// Main Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initNavigation();
    loadTopics();
    loadFormulas();
    updateStats();
    renderAchievements();
    renderSectionProgress();
    
    // Render KaTeX formulas
    renderMathInElement(document.body, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
        ]
    });
});

// Navigation
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.dataset.section;
            
            // Update active button
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding section
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
            
            // Hide viewers when switching sections
            document.getElementById('topic-viewer').style.display = 'none';
            document.getElementById('problem-viewer').style.display = 'none';
            document.getElementById('theory-topics').style.display = 'grid';
            document.getElementById('practice-menu').style.display = 'grid';
        });
    });
}

// Topics Management
function loadTopics() {
    const topicsContainer = document.getElementById('theory-topics');
    if (!topicsContainer) return;
    
    let html = '';
    for (const [categoryKey, category] of Object.entries(topicsData)) {
        category.topics.forEach(topic => {
            html += `
                <div class="topic-card" onclick="openTopic('${categoryKey}', '${topic.id}')">
                    <h3>${category.icon} ${topic.title}</h3>
                    <p>${topic.description}</p>
                </div>
            `;
        });
    }
    topicsContainer.innerHTML = html;
}

let currentCategory = null;
let currentTopic = null;

function openTopic(categoryKey, topicId) {
    const category = topicsData[categoryKey];
    const topic = category.topics.find(t => t.id === topicId);
    
    currentCategory = categoryKey;
    currentTopic = topicId;
    
    document.getElementById('theory-topics').style.display = 'none';
    document.getElementById('topic-viewer').style.display = 'block';
    document.getElementById('topic-content').innerHTML = topic.content;
    
    // Mark topic as studied
    markTopicAsStudied(categoryKey, topicId);
    
    // Re-render KaTeX
    renderMathInElement(document.getElementById('topic-content'), {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
        ]
    });
}

function closeTopic() {
    document.getElementById('topic-viewer').style.display = 'none';
    document.getElementById('theory-topics').style.display = 'grid';
    currentTopic = null;
}

function markTopicAsStudied(category, topicId) {
    let progress = getProgress();
    if (!progress.studiedTopics[category]) {
        progress.studiedTopics[category] = [];
    }
    if (!progress.studiedTopics[category].includes(topicId)) {
        progress.studiedTopics[category].push(topicId);
        saveProgress(progress);
        updateStats();
    }
}

// Formulas Management
function loadFormulas(selectedCategory = null) {
    const categoriesList = document.getElementById('formula-categories');
    const formulasList = document.getElementById('formulas-list');
    
    if (!categoriesList || !formulasList) return;
    
    // Load categories
    let categoriesHtml = '';
    for (const [key, category] of Object.entries(formulasData)) {
        categoriesHtml += `<li data-category="${key}" onclick="filterFormulas('${key}')">${category.name}</li>`;
    }
    categoriesList.innerHTML = categoriesHtml;
    
    // Load all formulas or filtered
    filterFormulas(selectedCategory || 'all');
}

function filterFormulas(category) {
    const formulasList = document.getElementById('formulas-list');
    const categoryItems = document.querySelectorAll('.formula-categories li');
    
    categoryItems.forEach(item => {
        item.classList.toggle('active', item.dataset.category === category);
    });
    
    let html = '';
    for (const [key, cat] of Object.entries(formulasData)) {
        if (category === 'all' || key === category) {
            cat.formulas.forEach(formula => {
                html += `
                    <div class="formula-item" onclick="openFormulaModal('${key}', '${formula.id}')">
                        <h4>${formula.title}</h4>
                        <div class="formula-preview">$${formula.latex}$</div>
                    </div>
                `;
            });
        }
    }
    formulasList.innerHTML = html;
    
    // Re-render KaTeX
    renderMathInElement(formulasList, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
        ]
    });
}

function openFormulaModal(categoryKey, formulaId) {
    const category = formulasData[categoryKey];
    const formula = category.formulas.find(f => f.id === formulaId);
    
    document.getElementById('modal-formula-title').textContent = formula.title;
    document.getElementById('modal-formula-display').innerHTML = `$$${formula.latex}$$`;
    document.getElementById('modal-formula-derivation').innerHTML = `
        <h4>Вывод формулы:</h4>
        ${formula.derivation}
    `;
    
    let examplesHtml = '<h4>Примеры:</h4><ul>';
    formula.examples.forEach(ex => {
        examplesHtml += `<li><strong>${ex.problem}</strong> — ${ex.solution}</li>`;
    });
    examplesHtml += '</ul>';
    document.getElementById('modal-formula-examples').innerHTML = examplesHtml;
    
    document.getElementById('formula-modal').style.display = 'flex';
    
    // Re-render KaTeX
    renderMathInElement(document.getElementById('formula-modal'), {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
        ]
    });
}

function closeFormulaModal() {
    document.getElementById('formula-modal').style.display = 'none';
}

// Close modal on outside click
document.getElementById('formula-modal')?.addEventListener('click', function(e) {
    if (e.target === this) closeFormulaModal();
});

// Practice Problems
let currentProblemCategory = null;
let currentProblemIndex = 0;

document.querySelectorAll('.practice-category').forEach(cat => {
    cat.addEventListener('click', () => {
        currentProblemCategory = cat.dataset.category;
        openProblems(currentProblemCategory);
    });
});

function openProblems(category) {
    const categoryData = problemsData[category];
    
    document.getElementById('practice-menu').style.display = 'none';
    document.getElementById('problem-viewer').style.display = 'block';
    document.getElementById('problem-category-title').textContent = `${categoryData.icon} ${categoryData.name}`;
    
    const solvedCount = getSolvedProblemsCount(category);
    document.getElementById('problems-solved-count').textContent = solvedCount;
    document.getElementById('problems-total-count').textContent = categoryData.problems.length;
    
    currentProblemIndex = 0;
    showProblem(category, currentProblemIndex);
}

function showProblem(category, index) {
    const problem = problemsData[category].problems[index];
    
    document.getElementById('problem-statement').textContent = problem.question;
    document.getElementById('problem-answer').value = '';
    document.getElementById('problem-feedback').style.display = 'none';
    document.getElementById('problem-solution').style.display = 'none';
}

function checkAnswer() {
    const problem = problemsData[currentProblemCategory].problems[currentProblemIndex];
    const userAnswer = document.getElementById('problem-answer').value.trim().toLowerCase();
    const correctAnswers = problem.answer.toLowerCase().split(';');
    
    const feedback = document.getElementById('problem-feedback');
    feedback.style.display = 'block';
    
    if (correctAnswers.some(ans => userAnswer.includes(ans))) {
        feedback.textContent = '✅ Правильно! Молодец!';
        feedback.className = 'problem-feedback correct';
        
        // Mark as solved
        markProblemAsSolved(currentProblemCategory, problem.id);
        
        const solvedCount = getSolvedProblemsCount(currentProblemCategory);
        document.getElementById('problems-solved-count').textContent = solvedCount;
    } else {
        feedback.textContent = '❌ Неверно. Посмотри решение.';
        feedback.className = 'problem-feedback incorrect';
    }
    
    // Show solution
    document.getElementById('solution-content').textContent = problem.solution;
    document.getElementById('problem-solution').style.display = 'block';
}

function nextProblem() {
    const problems = problemsData[currentProblemCategory].problems;
    if (currentProblemIndex < problems.length - 1) {
        currentProblemIndex++;
        showProblem(currentProblemCategory, currentProblemIndex);
    }
}

function prevProblem() {
    if (currentProblemIndex > 0) {
        currentProblemIndex--;
        showProblem(currentProblemCategory, currentProblemIndex);
    }
}

function closeProblem() {
    document.getElementById('problem-viewer').style.display = 'none';
    document.getElementById('practice-menu').style.display = 'grid';
    currentProblemCategory = null;
}

function markProblemAsSolved(category, problemId) {
    let progress = getProgress();
    if (!progress.solvedProblems[category]) {
        progress.solvedProblems[category] = [];
    }
    if (!progress.solvedProblems[category].includes(problemId)) {
        progress.solvedProblems[category].push(problemId);
        saveProgress(progress);
        updateStats();
    }
}

function getSolvedProblemsCount(category) {
    const progress = getProgress();
    return progress.solvedProblems[category]?.length || 0;
}

// Flashcards
let flashcardsSession = [];
let currentCardIndex = 0;
let cardResults = { easy: 0, normal: 0, difficult: 0 };

function startFlashcards() {
    const category = document.getElementById('flashcard-category').value;
    const count = document.getElementById('flashcard-count').value;
    
    // Get cards
    let allCards = [];
    if (category === 'all') {
        for (const catCards of Object.values(flashcardsData)) {
            allCards = allCards.concat(catCards);
        }
    } else {
        allCards = flashcardsData[category] || [];
    }
    
    // Shuffle and limit
    allCards.sort(() => Math.random() - 0.5);
    if (count !== 'all' && parseInt(count) < allCards.length) {
        allCards = allCards.slice(0, parseInt(count));
    }
    
    flashcardsSession = allCards;
    currentCardIndex = 0;
    cardResults = { easy: 0, normal: 0, difficult: 0 };
    
    document.querySelector('.flashcards-setup').style.display = 'none';
    document.getElementById('flashcards-game').style.display = 'block';
    document.getElementById('flashcard-result').style.display = 'none';
    
    showCard();
}

function showCard() {
    const card = flashcardsSession[currentCardIndex];
    
    document.getElementById('current-card').textContent = currentCardIndex + 1;
    document.getElementById('total-cards').textContent = flashcardsSession.length;
    document.getElementById('flashcard-progress-fill').style.width = 
        ((currentCardIndex) / flashcardsSession.length * 100) + '%';
    
    document.getElementById('card-front-text').textContent = card.front;
    document.getElementById('card-back-text').textContent = card.back;
    
    document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function markCard(difficulty) {
    cardResults[difficulty]++;
    
    currentCardIndex++;
    
    if (currentCardIndex >= flashcardsSession.length) {
        showResults();
    } else {
        showCard();
    }
}

function showResults() {
    document.getElementById('flashcards-game').style.display = 'none';
    document.getElementById('flashcard-result').style.display = 'block';
    
    document.getElementById('result-easy').textContent = cardResults.easy;
    document.getElementById('result-normal').textContent = cardResults.normal;
    document.getElementById('result-difficult').textContent = cardResults.difficult;
    
    // Save to progress
    let progress = getProgress();
    progress.flashcardsPassed += flashcardsSession.length;
    saveProgress(progress);
    updateStats();
}

function resetFlashcards() {
    document.getElementById('flashcard-result').style.display = 'none';
    document.querySelector('.flashcards-setup').style.display = 'block';
}

// Progress Management
function getProgress() {
    const saved = localStorage.getItem('mathConspectProgress');
    return saved ? JSON.parse(saved) : {
        studiedTopics: {},
        solvedProblems: {},
        flashcardsPassed: 0,
        achievements: [],
        activity: []
    };
}

function saveProgress(progress) {
    localStorage.setItem('mathConspectProgress', JSON.stringify(progress));
}

function updateStats() {
    const progress = getProgress();
    
    // Count totals
    const topicsCount = Object.values(progress.studiedTopics).reduce((sum, arr) => sum + arr.length, 0);
    const formulasCount = topicsCount; // Simplified
    const problemsCount = Object.values(progress.solvedProblems).reduce((sum, arr) => sum + arr.length, 0);
    
    // Update UI
    document.getElementById('total-topics').textContent = topicsCount;
    document.getElementById('total-formulas').textContent = formulasCount;
    document.getElementById('solved-problems').textContent = problemsCount;
    
    document.getElementById('stat-topics').textContent = topicsCount;
    document.getElementById('stat-formulas').textContent = formulasCount;
    document.getElementById('stat-problems').textContent = problemsCount;
    document.getElementById('stat-cards').textContent = progress.flashcardsPassed;
}

function renderAchievements() {
    const achievements = [
        { id: 'first-topic', name: 'Первые шаги', desc: 'Изучи первую тему', icon: '🎯', requirement: 1 },
        { id: 'five-topics', name: 'Любопытный', desc: 'Изучи 5 тем', icon: '📚', requirement: 5 },
        { id: 'ten-problems', name: 'Решатель', desc: 'Реши 10 задач', icon: '✏️', requirement: 10 },
        { id: 'flashcard-master', name: 'Мастер памяти', desc: 'Пройди 20 карточек', icon: '🎴', requirement: 20 },
        { id: 'all-sections', name: 'Универсал', desc: 'Изучи все разделы', icon: '🏆', requirement: 5 }
    ];
    
    const progress = getProgress();
    const topicsCount = Object.values(progress.studiedTopics).reduce((sum, arr) => sum + arr.length, 0);
    const problemsCount = Object.values(progress.solvedProblems).reduce((sum, arr) => sum + arr.length, 0);
    const sectionsCount = Object.keys(progress.studiedTopics).length;
    
    let html = '';
    achievements.forEach(ach => {
        let unlocked = false;
        if (ach.id === 'first-topic' && topicsCount >= 1) unlocked = true;
        if (ach.id === 'five-topics' && topicsCount >= 5) unlocked = true;
        if (ach.id === 'ten-problems' && problemsCount >= 10) unlocked = true;
        if (ach.id === 'flashcard-master' && progress.flashcardsPassed >= 20) unlocked = true;
        if (ach.id === 'all-sections' && sectionsCount >= 5) unlocked = true;
        
        html += `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                <span class="achievement-icon">${ach.icon}</span>
                <div class="achievement-name">${ach.name}</div>
                <div class="achievement-desc">${ach.desc}</div>
            </div>
        `;
    });
    
    document.getElementById('achievements-grid').innerHTML = html;
}

function renderSectionProgress() {
    const sections = [
        { key: 'algebra', name: 'Алгебра' },
        { key: 'geometry', name: 'Геометрия' },
        { key: 'trigonometry', name: 'Тригонометрия' },
        { key: 'calculus', name: 'Матанализ' },
        { key: 'physics', name: 'Физика' }
    ];
    
    const progress = getProgress();
    
    let html = '';
    sections.forEach(section => {
        const totalTopics = topicsData[section.key]?.topics.length || 0;
        const studiedTopics = progress.studiedTopics[section.key]?.length || 0;
        const percent = totalTopics > 0 ? Math.round(studiedTopics / totalTopics * 100) : 0;
        
        html += `
            <div class="progress-item">
                <span class="progress-item-label">${section.name}</span>
                <div class="progress-item-bar">
                    <div class="progress-item-fill" style="width: ${percent}%"></div>
                </div>
                <span class="progress-item-percent">${percent}%</span>
            </div>
        `;
    });
    
    document.getElementById('section-progress').innerHTML = html;
}

function resetProgress() {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
        localStorage.removeItem('mathConspectProgress');
        location.reload();
    }
}

// Search functionality
document.getElementById('theory-search')?.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.topic-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
});

document.getElementById('formula-search')?.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.formula-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
});
