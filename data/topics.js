const topicsData = {
    mechanics: {
        title: "Механика",
        sections: [
            {
                title: "Кинематика. Основные понятия",
                content: `
                    <p><strong>Механическим движением тела</strong> называется изменение его положения в пространстве относительно других тел с течением времени.</p>
                    <p><strong>Материальной точкой</strong> называют тело, размерами которого в данных условиях задачи можно пренебречь.</p>
                    <p><strong>Траектория</strong> — это воображаемая (или видимая) линия, которую описывает тело при своем движении.</p>
                    <p><strong>Путь</strong> — это длина участка траектории, пройденного телом за данный промежуток времени. Путь является скалярной физической величиной. Обозначается буквой s. Единица измерения — 1 метр (1 м).</p>
                    <p><strong>Перемещение</strong> — это вектор, соединяющий начальную и конечную точки траектории движения тела за данный промежуток времени. Обозначается Δr⃗. Единица измерения — 1 метр (1 м).</p>
                `
            },
            {
                title: "Равномерное прямолинейное движение",
                content: `
                    <p><strong>Равномерным прямолинейным движением</strong> называется движение, при котором тело за любые равные промежутки времени совершает одинаковые перемещения.</p>
                    <p>Траекторией равномерного прямолинейного движения является прямая линия.</p>
                    <p><strong>Скоростью v⃗</strong> равномерного прямолинейного движения называется векторная физическая величина, равная отношению перемещения Δr⃗ тела к промежутку времени Δt, за который оно совершено:</p>
                    <p style="text-align: center; font-size: 1.3em;">v⃗ = Δr⃗ / Δt</p>
                    <p>Скорость совпадает по направлению с вектором перемещения. Единица измерения — 1 метр в секунду (1 м/с). При равномерном прямолинейном движении скорость постоянна (v = const).</p>
                    <p><strong>Уравнение координаты</strong> x тела, равномерно движущегося вдоль оси Ox: x = x₀ + vₓt, где x₀ — начальная координата тела, vₓ — проекция скорости на ось Ox.</p>
                `
            },
            {
                title: "Закон сложения скоростей Галилея",
                content: `
                    <p><strong>Закон сложения скоростей Галилея:</strong> Скорость v⃗ движения тела относительно неподвижной системы отсчета равна векторной сумме его скорости v⃗₀ относительно подвижной системы отсчета и скорости v⃗₁ подвижной системы отсчета относительно неподвижной:</p>
                    <p style="text-align: center; font-size: 1.3em;">v⃗ = v⃗₀ + v⃗₁</p>
                `
            },
            {
                title: "Средняя скорость",
                content: `
                    <p><strong>Средняя скорость пути v̄</strong> неравномерного движения тела называется скалярная величина, равная отношению пройденного пути s к промежутку времени Δt:</p>
                    <p style="text-align: center; font-size: 1.3em;">v̄ = s / Δt</p>
                    <p><strong>Средняя скорость перемещения v̄⃗</strong> неравномерного движения тела называется векторная величина, равная отношению перемещения Δr⃗ к промежутку времени Δt:</p>
                    <p style="text-align: center; font-size: 1.3em;">v̄⃗ = Δr⃗ / Δt</p>
                `
            },
            {
                title: "Равноускоренное прямолинейное движение",
                content: `
                    <p><strong>Равноускоренным прямолинейным движением</strong> (или равнопеременным движением) называется прямолинейное движение, при котором скорость тела за любые равные промежутки времени изменяется одинаково.</p>
                    <p><strong>Ускорением a⃗</strong> при равноускоренном прямолинейном движении называется векторная физическая величина, равная отношению вектора изменения скорости к промежутку времени:</p>
                    <p style="text-align: center; font-size: 1.3em;">a⃗ = (v⃗ - v⃗₀) / Δt</p>
                    <p>где v⃗₀ — скорость в начальный момент времени, v⃗ — скорость в конечный момент времени. Единица измерения — 1 м/с².</p>
                    <p>При равноускоренном прямолинейном движении вектор мгновенной скорости линейно зависит от времени:</p>
                    <p style="text-align: center; font-size: 1.3em;">v⃗ = v⃗₀ + a⃗t</p>
                    <p>Перемещение тела является квадратичной функцией времени:</p>
                    <p style="text-align: center; font-size: 1.3em;">Δr⃗ = v⃗₀t + (a⃗t²)/2</p>
                    <p>Проекция перемещения без времени:</p>
                    <p style="text-align: center; font-size: 1.3em;">Δrₓ = (v² - v₀²) / (2aₓ)</p>
                    <p>Уравнение координаты (кинематический закон):</p>
                    <p style="text-align: center; font-size: 1.3em;">x = x₀ + v₀ₓt + (aₓt²)/2</p>
                `
            },
            {
                title: "Свободное падение",
                content: `
                    <p><strong>Свободным падением</strong> называется движение тела под действием только силы тяжести. В зависимости от направления начальной скорости свободное падение является прямолинейным или криволинейным.</p>
                    <p><strong>Ускорение свободного падения g⃗</strong> направлено вертикально вниз. Его модуль вблизи поверхности Земли: g ≈ 9,8 м/с² (в задачах обычно g = 10 м/с²).</p>
                    <p>Зависимость скорости и перемещения от времени:</p>
                    <p style="text-align: center; font-size: 1.3em;">v⃗ = v⃗₀ + g⃗t</p>
                    <p style="text-align: center; font-size: 1.3em;">Δr⃗ = v⃗₀t + (g⃗t²)/2</p>
                    <p>Проекция перемещения:</p>
                    <p style="text-align: center; font-size: 1.3em;">Δrₓ = (v² - v₀²) / (2gₓ)</p>
                    <p>Время полёта tₚ, максимальная высота подъема hₘₐₓ и дальность полета L тела, брошенного под углом α к горизонту:</p>
                    <p style="text-align: center; font-size: 1.3em;">tₚ = (2v₀sinα) / g</p>
                    <p style="text-align: center; font-size: 1.3em;">hₘₐₓ = (v₀²sin²α) / (2g)</p>
                    <p style="text-align: center; font-size: 1.3em;">L = (v₀²sin2α) / g</p>
                `
            },
            {
                title: "Движение по окружности",
                content: `
                    <p><strong>Угловая скорость ω</strong>:</p>
                    <p style="text-align: center; font-size: 1.3em;">ω = φ/t = 2π/T = 2πν</p>
                    <p>где φ — угол поворота, T — период, ν — частота вращения.</p>
                    <p><strong>Линейная скорость υ</strong>:</p>
                    <p style="text-align: center; font-size: 1.3em;">υ = 2πR/T = 2πνR = ωR</p>
                    <p><strong>Центростремительное ускорение aц</strong>:</p>
                    <p style="text-align: center; font-size: 1.3em;">aц = υ²/R = 4π²R/T² = 4π²ν²R = ω²R</p>
                    <p>При равномерном движении ω = const.</p>
                `
            },
            {
                title: "Законы Ньютона",
                content: `
                    <p><strong>I закон Ньютона:</strong> Существуют такие инерциальные системы отсчёта, относительно которых поступательно движущееся тело сохраняет свою скорость постоянной (или покоится), если на него не действуют другие тела (или действие других тел компенсируется).</p>
                    <p style="text-align: center; font-size: 1.3em;">F⃗ = 0 ⇒ v⃗ = const или v⃗ = 0</p>
                    <p><strong>II закон Ньютона:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">F⃗ = ma⃗</p>
                    <p><strong>III закон Ньютона:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">F⃗₁₂ = -F⃗₂₁</p>
                    <p><strong>Основной закон динамики:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">F⃗ = Δp⃗/Δt</p>
                    <p>где Δp⃗ — изменение импульса тела.</p>
                `
            },
            {
                title: "Силы в природе",
                content: `
                    <p><strong>Сила тяжести:</strong> Fт = mg</p>
                    <p><strong>Вес тела:</strong> P = N = m(g ± a) — при движении с ускорением</p>
                    <p><strong>Невесомость:</strong> состояние, при котором a = g, тогда P = 0</p>
                    <p><strong>Сила упругости (закон Гука):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Fупр = k|x|</p>
                    <p>где k — коэффициент жёсткости, x — удлинение.</p>
                    <p><strong>Сила трения:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Fтр = μN</p>
                    <p>где μ — коэффициент трения.</p>
                    <p><strong>Закон всемирного тяготения:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">F = G·m₁m₂/R²</p>
                    <p>где G = 6,67·10⁻¹¹ Н·м²/кг² — гравитационная постоянная.</p>
                    <p><strong>Ускорение свободного падения:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">g = GM/R²</p>
                    <p><strong>Сила Архимеда:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">FАрх = ρжgVт</p>
                    <p><strong>I космическая скорость:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">υI = √(GMз/Rз) = √(gRз)</p>
                `
            },
            {
                title: "Законы сохранения в механике",
                content: `
                    <p><strong>Импульс силы:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">F⃗·Δt = Δp⃗</p>
                    <p><strong>Импульс тела:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">p⃗ = mv⃗</p>
                    <p><strong>Закон сохранения импульса:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">∑p⃗до = ∑p⃗после</p>
                    <p style="text-align: center; font-size: 1.3em;">m₁v⃗₁ + m₂v⃗₂ = m₁v⃗₁' + m₂v⃗₂'</p>
                    <p><strong>Механическая работа:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">A = F⃗·s⃗ = Fs·cosα</p>
                    <p>— Работа силы тяжести: A = ±mgs</p>
                    <p>— Работа силы трения: A = -μNs</p>
                    <p>— Работа силы упругости: A = kx²/2</p>
                    <p><strong>Кинетическая энергия:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Eк = mv²/2</p>
                    <p><strong>Потенциальная энергия:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Eр = mgh (в поле тяжести)</p>
                    <p style="text-align: center; font-size: 1.3em;">Eр = kx²/2 (упруго деформированного тела)</p>
                    <p><strong>Теорема о кинетической энергии:</strong> A = ΔEк</p>
                    <p><strong>Теорема о потенциальной энергии:</strong> A = -ΔEр</p>
                    <p><strong>Закон сохранения механической энергии:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Eк₁ + Eр₁ = Eк₂ + Eр₂</p>
                    <p><strong>Мощность:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">N = A/t = Fυ (при равномерном движении)</p>
                `
            },
            {
                title: "Статика",
                content: `
                    <p><strong>Момент силы:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">M = F·ℓ</p>
                    <p>где ℓ — плечо силы (кратчайшее расстояние от линии действия силы до оси вращения).</p>
                    <p><strong>Правило моментов:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">F₁·ℓ₁ = F₂·ℓ₂</p>
                    <p><strong>Условие равновесия:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">∑F⃗ = 0, ∑M⃗ = 0</p>
                `
            },
            {
                title: "Гидростатика",
                content: `
                    <p><strong>Давление:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">P = F/S (F ⊥ S)</p>
                    <p><strong>Давление в жидкостях и газах:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">P = ρgh</p>
                    <p><strong>Закон Паскаля:</strong> Давление, производимое на жидкость или газ, передаётся во все точки одинаково.</p>
                    <p><strong>Условия плавания тел:</strong></p>
                    <p>— FАрх > Fт — тело всплывает</p>
                    <p>— FАрх < Fт — тело тонет</p>
                    <p>— FАрх = Fт — тело находится внутри жидкости</p>
                `
            },
            {
                title: "Механические колебания",
                content: `
                    <p><strong>Уравнение гармонических колебаний:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">x(t) = A·sin(ωt + φ₀) или x(t) = Xₘ·cos(ωt + φ₀)</p>
                    <p>где φ₀ — начальная фаза, A (Xₘ) — амплитуда.</p>
                    <p><strong>Скорость при колебаниях:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">υ(t) = υₘ·cos(ωt + φ₀), где υₘ = Xₘω</p>
                    <p><strong>Ускорение при колебаниях:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">a(t) = aₘ·cos(ωt + φ₀), где aₘ = Xₘω²</p>
                    <p><strong>Частота и период:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">ν = N/t = 1/T, ω = 2πν</p>
                    <p><strong>Период пружинного маятника:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">T = 2π√(m/k)</p>
                    <p><strong>Период математического маятника:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">T = 2π√(ℓ/g)</p>
                `
            },
            {
                title: "Механические волны",
                content: `
                    <p><strong>Длина волны:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">λ = υT = υ/ν</p>
                    <p><strong>Звук:</strong> механические волны в упругой среде с частотой от 16 Гц до 20 кГц.</p>
                `
            }
        ]
    },
    molecular: {
        title: "Молекулярная физика",
        sections: [
            {
                title: "Основные положения МКТ",
                content: `
                    <p><strong>Молярная масса:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">μ = m₀Nₐ = Mᵣ·10⁻³ кг/моль</p>
                    <p><strong>Количество вещества:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">ν = m/μ = N/Nₐ</p>
                    <p>где Nₐ = 6,02·10²³ моль⁻¹ — постоянная Авогадро.</p>
                    <p><strong>Число молекул:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">N = (m/μ)·Nₐ</p>
                    <p><strong>Концентрация молекул:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">n = N/V</p>
                `
            },
            {
                title: "Основное уравнение МКТ",
                content: `
                    <p style="text-align: center; font-size: 1.3em;">P = (1/3)m₀nυ²̅ = (2/3)nĒₖ</p>
                    <p style="text-align: center; font-size: 1.3em;">P = nkT</p>
                    <p><strong>Средняя квадратичная скорость:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">υ̅ = √(3kT/m₀) = √(3RT/μ)</p>
                    <p><strong>Средняя кинетическая энергия молекул:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Ēₖ = (3/2)kT</p>
                    <p>где T = t° + 273 К — абсолютная температура.</p>
                `
            },
            {
                title: "Уравнение состояния идеального газа",
                content: `
                    <p><strong>Уравнение Менделеева-Клапейрона:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">PV = (m/μ)RT</p>
                    <p><strong>Уравнение Клапейрона:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">P₁V₁/T₁ = P₂V₂/T₂</p>
                `
            },
            {
                title: "Газовые законы (изопроцессы)",
                content: `
                    <p><strong>Изотермический процесс (T = const):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">P₁V₁ = P₂V₂ (закон Бойля-Мариотта)</p>
                    <p><strong>Изобарный процесс (P = const):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">V₁/T₁ = V₂/T₂ (закон Гей-Люссака)</p>
                    <p><strong>Изохорный процесс (V = const):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">P₁/T₁ = P₂/T₂ (закон Шарля)</p>
                `
            }
        ]
    },
    thermo: {
        title: "Термодинамика",
        sections: [
            {
                title: "Количество теплоты",
                content: `
                    <p><strong>Нагревание (охлаждение):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Q = cmΔt°</p>
                    <p><strong>Плавление (кристаллизация):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Q = ±λm</p>
                    <p><strong>Парообразование (конденсация):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Q = ±rm</p>
                    <p><strong>Сгорание:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Q = qm</p>
                `
            },
            {
                title: "Влажность воздуха",
                content: `
                    <p><strong>Относительная влажность:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">φ = (P/P₀)·100% = (ρ/ρ₀)·100%</p>
                `
            },
            {
                title: "Внутренняя энергия",
                content: `
                    <p><strong>Внутренняя энергия одноатомного идеального газа:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">U = (3/2)(m/μ)RT = (3/2)PV</p>
                `
            },
            {
                title: "Работа газа",
                content: `
                    <p><strong>Работа газа:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">A' = PΔV = (m/μ)RΔT</p>
                    <p><strong>Работа внешних сил:</strong> A' = -A</p>
                `
            },
            {
                title: "Первое начало термодинамики",
                content: `
                    <p style="text-align: center; font-size: 1.3em;">ΔU = A + Q = Q - A'</p>
                    <p><strong>Применение для изопроцессов:</strong></p>
                    <p>— Изотермический (T = const): ΔU = 0 ⇒ A' = Q</p>
                    <p>— Изобарный (P = const): ΔU = Q - A'</p>
                    <p>— Изохорный (V = const): A' = 0 ⇒ ΔU = Q</p>
                    <p>— Адиабатный (Q = 0): ΔU = A</p>
                `
            },
            {
                title: "Тепловые машины",
                content: `
                    <p><strong>КПД тепловой машины:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">η = (A'/Q₁)·100% = (|Q₁-Q₂|/Q₁)·100%</p>
                    <p style="text-align: center; font-size: 1.3em;">η = ((T₁-T₂)/T₁)·100% (максимальный КПД)</p>
                    <p>где Q₁ — теплота от нагревателя, Q₂ — теплота холодильнику, A' = Q₁ - Q₂ — работа.</p>
                `
            }
        ]
    },
    electrostatics: {
        title: "Электростатика",
        sections: [
            {
                title: "Закон Кулона",
                content: `
                    <p style="text-align: center; font-size: 1.3em;">Fₖ = k·|q₁||q₂|/(εr²)</p>
                    <p>где k = 9·10⁹ Н·м²/Кл², ε — диэлектрическая проницаемость среды.</p>
                `
            },
            {
                title: "Напряжённость электрического поля",
                content: `
                    <p style="text-align: center; font-size: 1.3em;">E = F/qₖ = k·|q₀|/(εr²)</p>
                    <p><strong>Напряжённость поля плоского конденсатора:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">E = σ/(ε₀ε) = |q|/(Sε₀ε)</p>
                    <p>где σ = |q|/S — плотность заряда, ε₀ = 8,85·10⁻¹² Ф/м.</p>
                `
            },
            {
                title: "Потенциал и напряжение",
                content: `
                    <p><strong>Потенциал:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">φ = Wₚ/q</p>
                    <p><strong>Потенциал сферы:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">φ = k·|q|/(εr)</p>
                    <p><strong>Напряжение (разность потенциалов):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">U = φ₁ - φ₂ = A/q</p>
                    <p><strong>Связь E и U:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">U = Ed</p>
                `
            },
            {
                title: "Электроёмкость и конденсаторы",
                content: `
                    <p><strong>Электроёмкость плоского конденсатора:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">C = (ε₀εS)/d = q/U</p>
                    <p><strong>Энергия электрического поля:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Wэ = CU²/2 = q²/(2C) = qU/2</p>
                `
            }
        ]
    },
    current: {
        title: "Постоянный ток",
        sections: [
            {
                title: "Сила тока и сопротивление",
                content: `
                    <p><strong>Сила тока:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">I = q/t = |q|nSυ</p>
                    <p><strong>Сопротивление проводника:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">R = ρℓ/S</p>
                    <p>где ρ — удельное сопротивление.</p>
                `
            },
            {
                title: "Закон Ома",
                content: `
                    <p><strong>Для участка цепи:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">I = U/R</p>
                    <p><strong>Для полной цепи:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">I = ε/(R + r)</p>
                    <p>где r — внутреннее сопротивление источника.</p>
                `
            },
            {
                title: "Соединение проводников",
                content: `
                    <p><strong>Последовательное соединение:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">I₁ = I₂, U = U₁ + U₂, R = R₁ + R₂</p>
                    <p><strong>Параллельное соединение:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">U₁ = U₂, I = I₁ + I₂, 1/R = 1/R₁ + 1/R₂</p>
                `
            },
            {
                title: "Работа и мощность тока",
                content: `
                    <p><strong>Закон Джоуля-Ленца:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Q = I²RΔt</p>
                    <p><strong>Мощность тока:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">P = IU</p>
                `
            },
            {
                title: "Закон электролиза",
                content: `
                    <p style="text-align: center; font-size: 1.3em;">m = kIt</p>
                    <p>где k — электрохимический эквивалент.</p>
                `
            }
        ]
    },
    magnetic: {
        title: "Магнитное поле. Электромагнитная индукция",
        sections: [
            {
                title: "Магнитное поле соленоида",
                content: `
                    <p><strong>Магнитная индукция:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">B = μ₀nI</p>
                    <p>где n = N/ℓ — число витков на единицу длины.</p>
                    <p><strong>Индуктивность соленоида:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">L = μ₀n²V</p>
                `
            },
            {
                title: "Сила Ампера и Лоренца",
                content: `
                    <p><strong>Сила Ампера:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Fₐ = IBℓsinα</p>
                    <p><strong>Сила Лоренца:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Fₗ = |q₀|υBsinα</p>
                `
            },
            {
                title: "Магнитный поток",
                content: `
                    <p style="text-align: center; font-size: 1.3em;">Φ = BScosα = LI</p>
                `
            },
            {
                title: "Электромагнитная индукция",
                content: `
                    <p><strong>Закон электромагнитной индукции:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">εᵢ = -N·ΔΦ/Δt</p>
                    <p><strong>ЭДС в движущемся проводнике:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">ε = ℓυBsinα</p>
                    <p><strong>Самоиндукция:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">εₛᵢ = -L·ΔI/Δt</p>
                    <p><strong>Энергия магнитного поля:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Wм = LI²/2</p>
                `
            }
        ]
    },
    optics: {
        title: "Оптика",
        sections: [
            {
                title: "Геометрическая оптика",
                content: `
                    <p><strong>Закон отражения:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">α = γ</p>
                    <p><strong>Закон преломления:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">sinα/sinβ = n₂/n₁ = n</p>
                    <p><strong>Полное отражение:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">sinα₀ = 1/n</p>
                    <p><strong>Абсолютный показатель преломления:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">n = c/υ</p>
                `
            },
            {
                title: "Линзы",
                content: `
                    <p><strong>Оптическая сила линзы:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">D = ±1/F</p>
                    <p><strong>Формула тонкой линзы:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">±1/F = 1/d ± 1/f</p>
                    <p><strong>Увеличение линзы:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Γ = |f|/|d| = H/h</p>
                `
            },
            {
                title: "Волновая оптика",
                content: `
                    <p><strong>Условие максимума интерференции:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Δd = kλ</p>
                    <p><strong>Условие минимума интерференции:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Δd = (2k+1)λ/2</p>
                    <p><strong>Условие максимума дифракции:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">dsinφ = kλ</p>
                `
            }
        ]
    },
    quantum: {
        title: "Квантовая физика",
        sections: [
            {
                title: "Квант энергии",
                content: `
                    <p style="text-align: center; font-size: 1.3em;">E = hν</p>
                    <p><strong>Масса фотона:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">m = hν/c²</p>
                    <p><strong>Импульс фотона:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">p = h/λ</p>
                `
            },
            {
                title: "Фотоэффект",
                content: `
                    <p><strong>Красная граница:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">νₘᵢₙ = c/λₘₐₓ</p>
                    <p><strong>Работа выхода:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Aвых = hνₘᵢₙ</p>
                    <p><strong>Уравнение Эйнштейна:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">hν = Aвых + Eₖ</p>
                    <p><strong>Кинетическая энергия фотоэлектронов:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Eₖ = mₑυ²ₘₐₓ/2 = eUₓ</p>
                `
            },
            {
                title: "Излучение атома",
                content: `
                    <p><strong>Частота излучения (по Бору):</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">νₖₙ = (Eₖ - Eₙ)/h</p>
                `
            }
        ]
    },
    nuclear: {
        title: "Ядерная физика",
        sections: [
            {
                title: "Строение ядра",
                content: `
                    <p><strong>Массовое число:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">A = Z + N</p>
                    <p>где Z — число протонов, N — число нейтронов.</p>
                `
            },
            {
                title: "Радиоактивный распад",
                content: `
                    <p><strong>Закон радиоактивного распада:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">m = m₀·2^(-t/T) или N = N₀·2^(-t/T)</p>
                    <p><strong>Активность:</strong> A = N/t</p>
                    <p><strong>α-распад:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">ᴬzX → ᴬ⁻⁴z₋₂Y + ⁴₂He</p>
                    <p><strong>β⁻-распад:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">ᴬzX → ᴬz₊₁Y + ⁰₋₁e</p>
                `
            },
            {
                title: "Энергия связи",
                content: `
                    <p><strong>Энергия связи ядра:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Eсв = (Zmₚ + Nmₙ - Mя)c² [Дж]</p>
                    <p style="text-align: center; font-size: 1.3em;">Eсв = (Zmₚ + Nmₙ - Mя)·931 [МэВ]</p>
                    <p><strong>Энергетический выход реакции:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">ΔE = Δmc² [Дж] = Δm·931 [МэВ]</p>
                    <p>где Δm = (m₁+m₂) - (m₃+m₄)</p>
                `
            }
        ]
    },
    relativity: {
        title: "Основы СТО",
        sections: [
            {
                title: "Релятивистские формулы",
                content: `
                    <p><strong>Релятивистская длина:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">ℓ = ℓ₀√(1 - υ²/c²)</p>
                    <p><strong>Релятивистское время:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">Δt = Δt₀/√(1 - υ²/c²)</p>
                    <p><strong>Релятивистская масса:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">m = m₀/√(1 - υ²/c²)</p>
                    <p><strong>Формула Эйнштейна:</strong></p>
                    <p style="text-align: center; font-size: 1.3em;">E = mc²</p>
                `
            }
        ]
    }
};
