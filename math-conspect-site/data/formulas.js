// Formulas data for the math conspect site
const formulasData = {
    algebra: {
        name: "Алгебра",
        formulas: [
            {
                id: "alg-1",
                title: "Линейное уравнение",
                latex: "ax + b = 0, \\quad x = -\\frac{b}{a}",
                derivation: `
                    <p>Линейное уравнение решается переносом свободного члена в правую часть:</p>
                    <ol>
                        <li>ax + b = 0</li>
                        <li>ax = -b</li>
                        <li>x = -b/a (при a ≠ 0)</li>
                    </ol>
                `,
                examples: [
                    { problem: "3x - 12 = 0", solution: "3x = 12 → x = 4" },
                    { problem: "-2x + 8 = 0", solution: "-2x = -8 → x = 4" }
                ]
            },
            {
                id: "alg-2",
                title: "Квадратное уравнение",
                latex: "ax^2 + bx + c = 0, \\quad D = b^2 - 4ac, \\quad x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}",
                derivation: `
                    <p>Вывод формулы корней квадратного уравнения:</p>
                    <ol>
                        <li>ax² + bx + c = 0 | :a</li>
                        <li>x² + (b/a)x + c/a = 0</li>
                        <li>Выделим полный квадрат: (x + b/2a)² - b²/4a² + c/a = 0</li>
                        <li>(x + b/2a)² = (b² - 4ac)/4a² = D/4a²</li>
                        <li>x + b/2a = ±√D/2a</li>
                        <li>x = (-b ± √D)/2a</li>
                    </ol>
                `,
                examples: [
                    { problem: "x² - 5x + 6 = 0", solution: "D = 25 - 24 = 1, x₁ = 3, x₂ = 2" },
                    { problem: "2x² + 3x - 2 = 0", solution: "D = 9 + 16 = 25, x₁ = 0.5, x₂ = -2" }
                ]
            },
            {
                id: "alg-3",
                title: "Теорема Виета",
                latex: "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}",
                derivation: `
                    <p>Для приведённого квадратного уравнения x² + px + q = 0:</p>
                    <ul>
                        <li>x₁ + x₂ = -p</li>
                        <li>x₁ · x₂ = q</li>
                    </ul>
                    <p>Доказательство следует из формулы корней.</p>
                `,
                examples: [
                    { problem: "x² - 7x + 12 = 0", solution: "x₁ + x₂ = 7, x₁x₂ = 12 → x₁ = 3, x₂ = 4" }
                ]
            },
            {
                id: "alg-4",
                title: "Формулы сокращённого умножения",
                latex: "(a \\pm b)^2 = a^2 \\pm 2ab + b^2, \\quad a^2 - b^2 = (a-b)(a+b)",
                derivation: `
                    <p>Основные формулы:</p>
                    <ul>
                        <li>(a + b)² = a² + 2ab + b²</li>
                        <li>(a - b)² = a² - 2ab + b²</li>
                        <li>a² - b² = (a - b)(a + b)</li>
                        <li>(a + b)³ = a³ + 3a²b + 3ab² + b³</li>
                        <li>a³ - b³ = (a - b)(a² + ab + b²)</li>
                    </ul>
                `,
                examples: [
                    { problem: "(x + 3)²", solution: "x² + 6x + 9" },
                    { problem: "x² - 16", solution: "(x - 4)(x + 4)" }
                ]
            }
        ]
    },
    geometry: {
        name: "Геометрия",
        formulas: [
            {
                id: "geo-1",
                title: "Теорема Пифагора",
                latex: "a^2 + b^2 = c^2",
                derivation: `
                    <p>В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов.</p>
                    <p>Доказательство через площади квадратов или подобие треугольников.</p>
                `,
                examples: [
                    { problem: "Катеты 3 и 4", solution: "c² = 9 + 16 = 25 → c = 5" }
                ]
            },
            {
                id: "geo-2",
                title: "Площадь треугольника",
                latex: "S = \\frac{1}{2}ah_a = \\frac{1}{2}ab\\sin\\gamma = \\sqrt{p(p-a)(p-b)(p-c)}",
                derivation: `
                    <p>Формулы площади:</p>
                    <ul>
                        <li>Через основание и высоту: S = ah/2</li>
                        <li>Через две стороны и угол: S = ab·sin(γ)/2</li>
                        <li>Формула Герона: S = √[p(p-a)(p-b)(p-c)], где p — полупериметр</li>
                    </ul>
                `,
                examples: [
                    { problem: "a=5, h=4", solution: "S = 5·4/2 = 10" }
                ]
            },
            {
                id: "geo-3",
                title: "Длина окружности и площадь круга",
                latex: "C = 2\\pi R, \\quad S = \\pi R^2",
                derivation: `
                    <p>Число π ≈ 3.14159... — отношение длины окружности к диаметру.</p>
                    <p>Площадь круга выводится через предел площадей вписанных многоугольников.</p>
                `,
                examples: [
                    { problem: "R = 5", solution: "C = 10π ≈ 31.4, S = 25π ≈ 78.5" }
                ]
            },
            {
                id: "geo-4",
                title: "Объём шара",
                latex: "V = \\frac{4}{3}\\pi R^3",
                derivation: `
                    <p>Вывод через интегрирование или метод Архимеда (шар и цилиндр).</p>
                    <p>Площадь поверхности: S = 4πR²</p>
                `,
                examples: [
                    { problem: "R = 3", solution: "V = 4/3 · π · 27 = 36π ≈ 113.1" }
                ]
            }
        ]
    },
    trigonometry: {
        name: "Тригонометрия",
        formulas: [
            {
                id: "trig-1",
                title: "Основное тригонометрическое тождество",
                latex: "\\sin^2\\alpha + \\cos^2\\alpha = 1",
                derivation: `
                    <p>Следует из теоремы Пифагора для единичной окружности.</p>
                    <p>Если x = cos α, y = sin α, то x² + y² = 1.</p>
                `,
                examples: [
                    { problem: "sin α = 3/5, α в I четверти", solution: "cos α = √(1 - 9/25) = 4/5" }
                ]
            },
            {
                id: "trig-2",
                title: "Формула синуса суммы",
                latex: "\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta",
                derivation: `
                    <p>Доказательство через поворот системы координат или геометрически.</p>
                    <p>Аналогично: sin(α - β) = sin α cos β - cos α sin β</p>
                `,
                examples: [
                    { problem: "sin(75°)", solution: "sin(45°+30°) = (√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4" }
                ]
            },
            {
                id: "trig-3",
                title: "Формула косинуса разности",
                latex: "\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta",
                derivation: `
                    <p>Доказательство через скалярное произведение векторов на единичной окружности.</p>
                `,
                examples: [
                    { problem: "cos(15°)", solution: "cos(45°-30°) = (√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4" }
                ]
            },
            {
                id: "trig-4",
                title: "Формула двойного угла",
                latex: "\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha, \\quad \\cos(2\\alpha) = \\cos^2\\alpha - \\sin^2\\alpha",
                derivation: `
                    <p>Следует из формул сложения при β = α.</p>
                    <p>Также: cos(2α) = 2cos²α - 1 = 1 - 2sin²α</p>
                `,
                examples: [
                    { problem: "sin α = 1/2", solution: "cos α = √3/2, sin(2α) = 2·(1/2)·(√3/2) = √3/2" }
                ]
            }
        ]
    },
    calculus: {
        name: "Матанализ",
        formulas: [
            {
                id: "calc-1",
                title: "Определение производной",
                latex: "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}",
                derivation: `
                    <p>Производная — это скорость изменения функции в точке.</p>
                    <p>Геометрический смысл: тангенс угла наклона касательной.</p>
                `,
                examples: [
                    { problem: "f(x) = x²", solution: "f'(x) = lim[(x+Δx)² - x²]/Δx = lim[2xΔx + Δx²]/Δx = 2x" }
                ]
            },
            {
                id: "calc-2",
                title: "Производная степенной функции",
                latex: "(x^n)' = n x^{n-1}",
                derivation: `
                    <p>Доказательство по определению с использованием бинома Ньютона.</p>
                `,
                examples: [
                    { problem: "(x⁵)'", solution: "5x⁴" },
                    { problem: "(√x)'", solution: "(x^(1/2))' = (1/2)x^(-1/2) = 1/(2√x)" }
                ]
            },
            {
                id: "calc-3",
                title: "Неопределённый интеграл",
                latex: "\\int f(x)dx = F(x) + C, \\text{ где } F'(x) = f(x)",
                derivation: `
                    <p>Интегрирование — операция, обратная дифференцированию.</p>
                    <p>C — произвольная постоянная интегрирования.</p>
                `,
                examples: [
                    { problem: "∫ x³ dx", solution: "x⁴/4 + C" },
                    { problem: "∫ cos x dx", solution: "sin x + C" }
                ]
            },
            {
                id: "calc-4",
                title: "Определённый интеграл (Ньютон-Лейбниц)",
                latex: "\\int_a^b f(x)dx = F(b) - F(a)",
                derivation: `
                    <p>Определённый интеграл равен приращению первообразной на отрезке [a; b].</p>
                    <p>Геометрический смысл: площадь криволинейной трапеции.</p>
                `,
                examples: [
                    { problem: "∫₀¹ x² dx", solution: "[x³/3]₀¹ = 1/3 - 0 = 1/3" }
                ]
            },
            {
                id: "calc-5",
                title: "Первый замечательный предел",
                latex: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
                derivation: `
                    <p>Доказательство через геометрические соображения и теорему о двух полицейских.</p>
                    <p>Используется для раскрытия неопределённостей типа 0/0.</p>
                `,
                examples: [
                    { problem: "lim(x→0) sin(5x)/x", solution: "5 · lim sin(5x)/(5x) = 5 · 1 = 5" }
                ]
            }
        ]
    },
    physics: {
        name: "Физика",
        formulas: [
            {
                id: "phys-1",
                title: "Равноускоренное движение",
                latex: "v = v_0 + at, \\quad s = v_0t + \\frac{at^2}{2}, \\quad v^2 - v_0^2 = 2as",
                derivation: `
                    <p>Из определения ускорения a = (v - v₀)/t получаем v = v₀ + at.</p>
                    <p>Путь — площадь под графиком скорости: s = v₀t + at²/2</p>
                `,
                examples: [
                    { problem: "v₀ = 0, a = 2 м/с², t = 5 с", solution: "v = 10 м/с, s = 25 м" }
                ]
            },
            {
                id: "phys-2",
                title: "Второй закон Ньютона",
                latex: "\\vec{F} = m\\vec{a}",
                derivation: `
                    <p>Ускорение тела прямо пропорционально равнодействующей сил и обратно пропорционально массе.</p>
                    <p>В проекциях: F_x = ma_x, F_y = ma_y</p>
                `,
                examples: [
                    { problem: "m = 5 кг, a = 3 м/с²", solution: "F = 15 Н" }
                ]
            },
            {
                id: "phys-3",
                title: "Закон всемирного тяготения",
                latex: "F = G\\frac{m_1 m_2}{R^2}",
                derivation: `
                    <p>G = 6.67×10⁻¹¹ Н·м²/кг² — гравитационная постоянная.</p>
                    <p>Ускорение свободного падения: g = GM/R² ≈ 9.8 м/с²</p>
                `,
                examples: [
                    { problem: "Первая космическая скорость", solution: "v₁ = √(gR) ≈ 7.9 км/с" }
                ]
            },
            {
                id: "phys-4",
                title: "Закон сохранения энергии",
                latex: "E_k + E_p = \\text{const}, \\quad \\frac{mv^2}{2} + mgh = \\text{const}",
                derivation: `
                    <p>В замкнутой системе полная механическая энергия сохраняется.</p>
                    <p>Работа всех сил равна изменению кинетической энергии.</p>
                `,
                examples: [
                    { problem: "Тело падает с высоты h", solution: "v = √(2gh)" }
                ]
            },
            {
                id: "phys-5",
                title: "Закон Ома",
                latex: "I = \\frac{U}{R}",
                derivation: `
                    <p>Сила тока прямо пропорциональна напряжению и обратно пропорциональна сопротивлению.</p>
                    <p>Для полной цепи: I = ε/(R + r), где r — внутреннее сопротивление источника.</p>
                `,
                examples: [
                    { problem: "U = 12 В, R = 4 Ом", solution: "I = 3 А" }
                ]
            }
        ]
    }
};
