// Problems data for practice section
const problemsData = {
    algebra: {
        name: "Алгебра",
        icon: "🔢",
        problems: [
            {
                id: "alg-p1",
                question: "Решите уравнение: 3x - 7 = 8",
                answer: "5",
                solution: "3x - 7 = 8\n3x = 15\nx = 5"
            },
            {
                id: "alg-p2",
                question: "Решите квадратное уравнение: x² - 6x + 9 = 0",
                answer: "3",
                solution: "D = 36 - 36 = 0\nОдин корень: x = 6/2 = 3"
            },
            {
                id: "alg-p3",
                question: "Упростите выражение: (a + b)² - (a - b)²",
                answer: "4ab",
                solution: "(a + b)² - (a - b)² = (a² + 2ab + b²) - (a² - 2ab + b²) = 4ab"
            },
            {
                id: "alg-p4",
                question: "Решите систему: x + y = 10, x - y = 2",
                answer: "6;4",
                solution: "Сложим уравнения: 2x = 12, x = 6\nПодставим: 6 + y = 10, y = 4\nОтвет: (6; 4)"
            },
            {
                id: "alg-p5",
                question: "Найдите корни уравнения: x² - 25 = 0",
                answer: "5;-5",
                solution: "x² = 25\nx = ±5"
            }
        ]
    },
    geometry: {
        name: "Геометрия",
        icon: "📐",
        problems: [
            {
                id: "geo-p1",
                question: "Найдите площадь треугольника с основанием 8 см и высотой 5 см",
                answer: "20",
                solution: "S = ah/2 = 8·5/2 = 20 см²"
            },
            {
                id: "geo-p2",
                question: "В прямоугольном треугольнике катеты равны 6 и 8. Найдите гипотенузу",
                answer: "10",
                solution: "По теореме Пифагора: c² = 6² + 8² = 36 + 64 = 100\nc = 10"
            },
            {
                id: "geo-p3",
                question: "Найдите длину окружности радиусом 7 см (π ≈ 3.14)",
                answer: "43.96",
                solution: "C = 2πR = 2 · 3.14 · 7 = 43.96 см"
            },
            {
                id: "geo-p4",
                question: "Сумма углов треугольника равна...",
                answer: "180",
                solution: "Сумма углов любого треугольника равна 180°"
            },
            {
                id: "geo-p5",
                question: "Найдите площадь круга радиусом 4 см",
                answer: "50.24",
                solution: "S = πR² = 3.14 · 16 = 50.24 см²"
            }
        ]
    },
    trigonometry: {
        name: "Тригонометрия",
        icon: "📊",
        problems: [
            {
                id: "trig-p1",
                question: "Чему равен sin(30°)?",
                answer: "0.5",
                solution: "sin(30°) = 1/2 = 0.5"
            },
            {
                id: "trig-p2",
                question: "Чему равен cos(60°)?",
                answer: "0.5",
                solution: "cos(60°) = 1/2 = 0.5"
            },
            {
                id: "trig-p3",
                question: "Вычислите: sin²(45°) + cos²(45°)",
                answer: "1",
                solution: "По основному тригонометрическому тождеству: sin²α + cos²α = 1"
            },
            {
                id: "trig-p4",
                question: "Чему равен tg(45°)?",
                answer: "1",
                solution: "tg(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1"
            },
            {
                id: "trig-p5",
                question: "Упростите: sin(90° - α)",
                answer: "cos(α)",
                solution: "По формулам приведения: sin(90° - α) = cos(α)"
            }
        ]
    },
    calculus: {
        name: "Матанализ",
        icon: "∫",
        problems: [
            {
                id: "calc-p1",
                question: "Найдите производную: f(x) = x³",
                answer: "3x^2",
                solution: "По правилу дифференцирования степенной функции: (xⁿ)' = nxⁿ⁻¹\n(x³)' = 3x²"
            },
            {
                id: "calc-p2",
                question: "Найдите интеграл: ∫ 2x dx",
                answer: "x^2",
                solution: "∫ 2x dx = 2 · x²/2 = x² + C"
            },
            {
                id: "calc-p3",
                question: "Найдите производную: f(x) = sin(x)",
                answer: "cos(x)",
                solution: "Производная синуса: (sin x)' = cos x"
            },
            {
                id: "calc-p4",
                question: "Вычислите предел: lim(x→0) sin(x)/x",
                answer: "1",
                solution: "Это первый замечательный предел, равный 1"
            },
            {
                id: "calc-p5",
                question: "Найдите производную: f(x) = eˣ",
                answer: "e^x",
                solution: "Производная экспоненты равна самой экспоненте: (eˣ)' = eˣ"
            }
        ]
    },
    physics: {
        name: "Физика",
        icon: "⚡",
        problems: [
            {
                id: "phys-p1",
                question: "Тело движется со скоростью 10 м/с в течение 5 секунд. Какой путь оно прошло?",
                answer: "50",
                solution: "s = vt = 10 · 5 = 50 м"
            },
            {
                id: "phys-p2",
                question: "Найдите силу тяжести для тела массой 10 кг (g = 10 м/с²)",
                answer: "100",
                solution: "F = mg = 10 · 10 = 100 Н"
            },
            {
                id: "phys-p3",
                question: "Тело падает свободно в течение 3 секунд. Какова его скорость в конце падения? (g = 10 м/с²)",
                answer: "30",
                solution: "v = gt = 10 · 3 = 30 м/с"
            },
            {
                id: "phys-p4",
                question: "Найдите кинетическую энергию тела массой 2 кг, движущегося со скоростью 4 м/с",
                answer: "16",
                solution: "Eₖ = mv²/2 = 2 · 16 / 2 = 16 Дж"
            },
            {
                id: "phys-p5",
                question: "Напряжение в цепи 12 В, сопротивление 4 Ом. Найдите силу тока",
                answer: "3",
                solution: "I = U/R = 12/4 = 3 А"
            }
        ]
    }
};
