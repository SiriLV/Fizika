// Глобальное состояние
let currentSection = 'mechanics';
let currentTab = 'theory';
let currentFlashcardIndex = 0;
let solvedProblems = new Set();

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    loadSection('mechanics');
    renderFlashcards();
});

// Инициализация навигации по разделам
function initNavigation() {
    // Кнопки разделов
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentSection = e.target.dataset.section;
            loadSection(currentSection);
        });
    });

    // Кнопки вкладок
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentTab = e.target.dataset.tab;
            loadContent(currentSection, currentTab);
        });
    });
}

// Загрузка раздела
function loadSection(section) {
    loadContent(section, currentTab);
}

// Загрузка контента
function loadContent(section, tab) {
    const contentArea = document.getElementById('content-area');
    
    switch(tab) {
        case 'theory':
            renderTheory(section, contentArea);
            break;
        case 'formulas':
            renderFormulas(section, contentArea);
            break;
        case 'problems':
            renderProblems(section, contentArea);
            break;
        case 'flashcards':
            renderFlashcards();
            break;
    }
}

// Рендеринг теории
function renderTheory(section, container) {
    const data = topicsData[section];
    if (!data) return;

    let html = `<h2 class="section-title">${data.title}</h2>`;
    
    data.sections.forEach((section, index) => {
        html += `
            <div class="topic-block">
                <h3>${section.title}</h3>
                ${section.content}
            </div>
        `;
    });

    container.innerHTML = html;
    renderMath(container);
}

// Рендеринг формул
function renderFormulas(section, container) {
    const data = formulasData[section];
    if (!data || data.length === 0) {
        container.innerHTML = '<p>Формулы для этого раздела будут добавлены позже.</p>';
        return;
    }

    let html = `<h2 class="section-title">Формулы раздела "${topicsData[section].title}"</h2>`;
    
    data.forEach((formula, index) => {
        html += `
            <div class="formula-card">
                <h4>${formula.title}</h4>
                <div class="formula-main">$$${formula.formula}$$</div>
                <div class="formula-derivation">
                    <strong>Вывод:</strong><br>
                    ${formula.derivation}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    renderMath(container);
}

// Рендеринг задач
function renderProblems(section, container) {
    const data = problemsData[section];
    if (!data || data.length === 0) {
        container.innerHTML = '<p>Задачи для этого раздела будут добавлены позже.</p>';
        return;
    }

    let html = `<h2 class="section-title">Задачи раздела "${topicsData[section].title}"</h2>`;
    
    data.forEach((problem, index) => {
        const problemId = `${section}-${index}`;
        const isSolved = solvedProblems.has(problemId);
        
        html += `
            <div class="problem-card">
                <div class="problem-statement">
                    <strong>Задача ${index + 1}:</strong><br>
                    ${problem.statement}
                </div>
                <button class="btn-show-solution" onclick="toggleSolution(${index}, '${section}')">
                    ${isSolved ? '✓ Решено' : 'Показать решение'}
                </button>
                <div class="problem-solution" id="solution-${section}-${index}">
                    ${problem.solution}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Переключение решения задачи
function toggleSolution(index, section) {
    const solutionDiv = document.getElementById(`solution-${section}-${index}`);
    const btn = solutionDiv.previousElementSibling;
    
    if (solutionDiv.classList.contains('show')) {
        solutionDiv.classList.remove('show');
        btn.textContent = 'Показать решение';
        solvedProblems.delete(`${section}-${index}`);
    } else {
        solutionDiv.classList.add('show');
        btn.textContent = '✓ Решено';
        solvedProblems.add(`${section}-${index}`);
        saveProgress();
    }
}

// Рендеринг карточек
function renderFlashcards() {
    const contentArea = document.getElementById('content-area');
    
    if (flashcardsData.length === 0) {
        contentArea.innerHTML = '<p>Карточки будут добавлены позже.</p>';
        return;
    }

    const card = flashcardsData[currentFlashcardIndex];
    
    let html = `
        <h2 class="section-title" style="text-align: center;">Карточки для запоминания</h2>
        <div class="flashcard-container">
            <div class="flashcard" onclick="flipCard()">
                <div class="flashcard-front">
                    <div class="flashcard-question">${card.question}</div>
                    <p style="color: #999; margin-top: 20px;">(нажмите, чтобы перевернуть)</p>
                </div>
                <div class="flashcard-back">
                    <div class="flashcard-answer">${card.answer}</div>
                </div>
            </div>
        </div>
        <div class="flashcard-controls">
            <button class="btn-flashcard btn-prev" onclick="prevCard()">← Предыдущая</button>
            <button class="btn-flashcard btn-flip" onclick="flipCard()">Перевернуть</button>
            <button class="btn-flashcard btn-next" onclick="nextCard()">Следующая →</button>
        </div>
        <div class="progress-section">
            <p>Карточка ${currentFlashcardIndex + 1} из ${flashcardsData.length}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(currentFlashcardIndex + 1) / flashcardsData.length * 100}%"></div>
            </div>
        </div>
    `;

    contentArea.innerHTML = html;
}

// Переворот карточки
function flipCard() {
    const card = document.querySelector('.flashcard');
    if (card) {
        card.classList.toggle('flipped');
    }
}

// Предыдущая карточка
function prevCard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        renderFlashcards();
    }
}

// Следующая карточка
function nextCard() {
    if (currentFlashcardIndex < flashcardsData.length - 1) {
        currentFlashcardIndex++;
        renderFlashcards();
    }
}

// Рендеринг математических формул (KaTeX)
function renderMath(container) {
    if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(container, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }
}

// Сохранение прогресса
function saveProgress() {
    localStorage.setItem('solvedProblems', JSON.stringify([...solvedProblems]));
}

// Загрузка прогресса
function loadProgress() {
    const saved = localStorage.getItem('solvedProblems');
    if (saved) {
        solvedProblems = new Set(JSON.parse(saved));
    }
}

// Загрузка прогресса при старте
window.addEventListener('load', loadProgress);
