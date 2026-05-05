const navItems = [
  ["index.html", "Главная", "home"],
  ["how.html", "Как работает", "how"],
  ["formats.html", "Форматы", "formats"],
  ["audience.html", "Для кого", "audience"],
  ["method.html", "Метод", "method"],
  ["results.html", "Отзывы", "results"],
  ["trainer.html", "О тренере", "trainer"],
  ["contacts.html", "Контакты", "contacts"],
];

const vkUrl = "https://vk.com/katrin_kr";
const phoneNumber = "+79200-675-678";

const photos = {
  hero: "assets/trainer-contact-portrait.jpg",
  strength: "assets/trainer-06.jpg",
  calm: "assets/trainer-07.jpg",
  stretch: "assets/trainer-08.jpg",
  portrait: "assets/trainer-contact-portrait.jpg",
  portraitTwo: "assets/trainer-contact-portrait.jpg",
  detail: "assets/trainer-08.jpg",
  trust: "assets/trainer-contact-portrait.jpg",
};

const sessionData = {
  20: [
    ["04 мин", "Вход в движение", "Мобилизация, суставы, дыхание. Тело быстро включается без резкого старта."],
    ["10 мин", "Сила + контроль", "Короткая силовая связка с понятным темпом и акцентом на технику."],
    ["04 мин", "Функциональный блок", "Движения, которые собирают корпус, баланс и координацию."],
    ["02 мин", "Восстановление", "Мягкая растяжка, чтобы выйти из занятия собранно."],
  ],
  30: [
    ["05 мин", "Разогрев", "Подготовка суставов и дыхания, чтобы нагрузка легла ровно."],
    ["12 мин", "Силовой блок", "Опора, мышцы, контроль амплитуды. Без хаоса и случайных упражнений."],
    ["08 мин", "Функциональность", "Пульс, координация, работа всего тела в цельной связке."],
    ["05 мин", "Растяжка", "Возвращение длины, снятие лишнего напряжения, спокойный финиш."],
  ],
  45: [
    ["06 мин", "Настройка тела", "Плавный вход, мобилизация и проверка состояния на сегодня."],
    ["18 мин", "Глубокая сила", "Больше подходов, больше контроля, больше времени на качество движения."],
    ["12 мин", "Функциональная серия", "Работа на выносливость, баланс, реакцию и собранность корпуса."],
    ["09 мин", "Растяжка и восстановление", "Длиннее финальный блок, чтобы тело не уходило в перегруз."],
  ],
};

const stateData = {
  tired: ["Устал", "20 минут", "Мягкая сила", "Снять инерцию дня", "Тело включилось, но не перегорело"],
  base: ["Базовый", "30 минут", "Ровная нагрузка", "Сила + функциональность", "Чувство собранности и ясного тонуса"],
  tone: ["Хочу тонус", "30-45 минут", "Плотный ритм", "Корпус, ноги, пульс", "Энергия без ощущения наказания"],
  recovery: ["Восстановление", "20-30 минут", "Мобилизация", "Дыхание, спина, таз, плечи", "Легкость и больше свободы движения"],
};

const pickRules = {
  goal: {
    shape: "Подтянутое тело",
    strength: "Сила и контроль",
    rhythm: "Вернуть регулярность",
  },
  condition: {
    low: "бережно",
    normal: "ровно",
    high: "энергично",
  },
  time: {
    20: "20 минут",
    30: "30 минут",
    45: "45 минут",
  },
};

const week = [
  ["Пн", "Энергичный", "Сила ног, корпус, короткий пульс", "Плотное начало недели без длинной тренировки."],
  ["Вт", "Базовый", "Верх, осанка, контроль", "Ровная нагрузка, которая не забирает вечер целиком."],
  ["Ср", "Восстановительный", "Спина, таз, дыхание", "День, где регулярность сохраняется через мягкость."],
  ["Чт", "Тонус", "Баланс, функциональная связка", "Больше движения и собранности, меньше рутины."],
  ["Пт", "Базовый", "Сила + растяжка", "Закрепление недели без ощущения марафона."],
  ["Сб", "Короткий формат", "20 минут на все тело", "Когда день плотный, но ритм хочется удержать."],
  ["Вс", "Восстановление", "Мобилизация и спокойный финиш", "Тело закрывает неделю без перегруза."],
];

const reviews = [
  ["Марина, 34", "Раньше я выбирала между силовой, растяжкой и чем-то для спины. Здесь наконец появилось ощущение, что все собрано в одно занятие и мне не нужно самой строить систему."],
  ["Алексей, 38", "Обычная качалка быстро надоедала. Формат короткий, но не пустой: есть сила, координация, баланс и нормальный финиш через растяжку."],
  ["Ольга, 41", "Мне важно, что Екатерина не гонит в героизм. Мы подобрали ритм, который я реально держу, даже когда неделя сложная."],
];

const formatCards = [
  ["Знакомство и подбор", "Для старта: обсудить цель, ограничения, опыт и понять, какой ритм подойдет сейчас."],
  ["Индивидуальный формат", "Короткие тренировки под состояние, график и задачу: тонус, сила, контроль тела, возвращение регулярности."],
  ["Сопровождение", "Когда важно не просто получить занятия, а удерживать ритм, корректировать нагрузку и не выпадать."],
  ["Формат под жизнь", "Система, где есть варианты на 20, 30 и 45 минут, чтобы тренировка не спорила с реальным днем."],
];

const audienceCards = [
  ["Занятые взрослые", "Когда день уже расписан, но телу нужен понятный формат без длинного выбора и подготовки."],
  ["Женщины 25-45", "Подтянутый, сильный, не перегруженный ритм с вниманием к состоянию и восстановлению."],
  ["Мужчины 25-45", "Для тех, кому скучна обычная качалка, но хочется силы, координации и ощущения тела."],
  ["Те, кто устал собирать по кускам", "Не нужно отдельно искать силу, растяжку, функционал и баланс. Метод уже соединяет их."],
];

const faqs = [
  ["Кому подойдет формат?", "Занятым взрослым, которым нужна короткая и собранная система тренировок без лишнего выбора."],
  ["Можно ли новичкам?", "Да. Екатерина уточняет опыт, состояние и уровень, а затем помогает подобрать подходящий вход."],
  ["Нужен ли инвентарь?", "Часто достаточно коврика и небольшого пространства. Если нужен инвентарь, это обсуждается лично."],
  ["Как начинается работа?", "Вы пишете Екатерине во ВК: цель, опыт, состояние и удобный ритм. Дальше тренер уточняет детали лично."],
  ["Как подбирается формат?", "По цели, состоянию, уровню нагрузки, доступному времени и реальному ритму недели."],
  ["В каком виде выдаются тренировки?", "Формат передачи тренировок обсуждается с Екатериной, чтобы он был удобен именно вам."],
  ["Как проходит оплата?", "Формат и стоимость обсуждаются лично с тренером. На сайте нет автоматической оплаты."],
  ["Можно ли заниматься дома?", "Да, формат рассчитан на то, чтобы его можно было встроить в обычную жизнь и домашний график."],
];

function layout(content) {
  const page = document.body.dataset.page;
  return `
    <div class="site-shell">
      <header class="top-line">
        <a class="brand" href="index.html" aria-label="На главную">
          <strong>CHIBIREVA</strong>
          <span>short online training</span>
        </a>
        <nav class="nav" aria-label="Основная навигация">
          ${navItems.map(([href, label, key]) => `<a class="${page === key ? "active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="btn primary" href="${vkUrl}" target="_blank" rel="noopener">Написать тренеру</a>
          <button class="menu-toggle" type="button" aria-label="Открыть меню"><span></span><span></span></button>
        </div>
      </header>
      <main class="page">${content}</main>
      ${footer()}
    </div>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <a class="brand" href="index.html"><strong>CHIBIREVA</strong><span>regularity without overchoice</span></a>
          <p style="margin-top:18px;max-width:520px">Короткие онлайн-тренировки через живой контакт с тренером. Формат и стоимость обсуждаются лично с Екатериной.</p>
        </div>
        <nav>${navItems.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}</nav>
      </div>
    </footer>
  `;
}

function homePage() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <div>
            <div class="kicker">Екатерина Чибирева</div>
            <h1>Одна тренировка вместо трех</h1>
            <p class="lead">Сила, функциональность и растяжка в одном коротком формате. Екатерина Чибирева помогает подобрать ритм, нагрузку и формат под вашу цель и состояние.</p>
            <div class="hero-ctas" style="margin-top:30px">
              <a class="btn primary" href="${vkUrl}" target="_blank" rel="noopener">Подобрать формат с тренером</a>
              <a class="btn ghost" href="${vkUrl}" target="_blank" rel="noopener">Написать во ВК</a>
            </div>
          </div>
          <div class="hero-meta">
            <div><b>20</b><span>минут, когда день плотный</span></div>
            <div><b>30</b><span>собранный базовый ритм</span></div>
            <div><b>45</b><span>глубже, но без перегруза</span></div>
          </div>
        </div>
        <div class="hero-visual reveal">
          <img src="${photos.hero}" alt="Екатерина Чибирева, тренер по онлайн-тренировкам" />
          <div class="scanline"></div>
          <div class="motion-grid">
            <div class="glass-tag"><b>strength</b><span>functional control</span></div>
            <div class="metric-chip"><b>28 min</b><span>session assembled</span></div>
          </div>
        </div>
      </div>
    </section>
    ${problemSection()}
    ${sessionModule()}
    ${stateModule()}
    ${pickerModule()}
    ${weekModule()}
    ${streakSection()}
    ${audienceSection()}
    ${alternativesSection()}
    ${reviewsSection()}
    ${formatsSection()}
    ${faqSection()}
    ${finalCta()}
  `;
}

function problemSection() {
  return `
    <section class="section midnight">
      <div class="container">
        <div class="section-head reveal">
          <h2>Почему обычный фитнес ломает регулярность</h2>
          <p class="lead">Чаще всего проблема не в мотивации. Проблема в слишком большом выборе и в формате, который не помещается в реальную неделю.</p>
        </div>
        <div class="problem-grid">
          <div class="problem-list reveal">
            <div>Нет времени на длинные тренировки</div>
            <div>Сложно выбирать, что делать сегодня</div>
            <div>Не хочется собирать нагрузку из разных направлений</div>
            <div>Трудно держать ритм, когда неделя меняется</div>
          </div>
          <div class="comparison reveal">
            <div>
              <div class="eyebrow">хаос выбора</div>
              <h3 style="margin-top:12px">Силовая отдельно. Растяжка отдельно. Функционал отдельно.</h3>
              <div class="chaos-lines"><i style="--r:-2deg"></i><i style="--r:4deg"></i><i style="--r:-5deg"></i><i style="--r:2deg"></i></div>
            </div>
            <div>
              <div class="eyebrow">собранный формат</div>
              <h3 style="margin-top:12px">Одна короткая тренировка с понятной логикой дня.</h3>
              <div class="method-stack">
                <div><b>Сила</b><span>опора</span></div>
                <div><b>Функциональность</b><span>ритм</span></div>
                <div><b>Растяжка</b><span>выход без перегруза</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function sessionModule() {
  return `
    <section id="session" class="section light">
      <div class="container module reveal" data-session>
        <div class="module-top">
          <div class="module-title">
            <span class="eyebrow">product demo</span>
            <h3>Собрана тренировка дня</h3>
          </div>
          <div class="segmented" data-session-tabs>
            ${[20, 30, 45].map((m) => `<button class="${m === 30 ? "active" : ""}" data-duration="${m}" type="button">${m} мин</button>`).join("")}
          </div>
        </div>
        <div class="timeline">
          <div class="session-dial"><div class="dial-inner"><div><b data-dial>30</b><span>минут</span></div></div></div>
          <div class="timeline-list" data-session-list></div>
        </div>
      </div>
    </section>
  `;
}

function stateModule() {
  return `
    <section class="section white">
      <div class="container module reveal" data-state>
        <div class="module-top">
          <div class="module-title">
            <span class="eyebrow">state switch</span>
            <h3>Подбор по состоянию</h3>
          </div>
          <p class="dark-text" style="max-width:420px">Это демонстрация принципа: нагрузка не обязана быть одинаковой каждый день.</p>
        </div>
        <div class="state-grid">
          <div class="state-buttons">
            ${Object.entries(stateData).map(([key, item], i) => `<button class="${i === 1 ? "active" : ""}" data-state-key="${key}" type="button">${item[0]}</button>`).join("")}
          </div>
          <div class="state-output" data-state-output></div>
        </div>
      </div>
    </section>
  `;
}

function pickerModule() {
  return `
    <section class="section light">
      <div class="container module reveal" data-picker>
        <div class="module-top">
          <div class="module-title">
            <span class="eyebrow">format selection</span>
            <h3>Умный подбор формата</h3>
          </div>
          <p class="dark-text" style="max-width:460px">Вы выбираете цель, состояние и время. Екатерина дальше помогает адаптировать формат лично.</p>
        </div>
        <div class="picker-grid">
          <div class="picker-controls">
            <label>Цель<div class="mini-tabs">${Object.entries(pickRules.goal).map(([k, v], i) => `<button class="${i === 0 ? "active" : ""}" data-pick="goal" data-value="${k}" type="button">${v}</button>`).join("")}</div></label>
            <label>Состояние<div class="mini-tabs">${Object.entries(pickRules.condition).map(([k, v], i) => `<button class="${i === 1 ? "active" : ""}" data-pick="condition" data-value="${k}" type="button">${v}</button>`).join("")}</div></label>
            <label>Время<div class="mini-tabs">${Object.entries(pickRules.time).map(([k, v], i) => `<button class="${i === 1 ? "active" : ""}" data-pick="time" data-value="${k}" type="button">${v}</button>`).join("")}</div></label>
          </div>
          <div class="pick-output" data-pick-output></div>
        </div>
      </div>
    </section>
  `;
}

function weekModule() {
  return `
    <section class="section white">
      <div class="container module reveal" data-week>
        <div class="module-top">
          <div class="module-title">
            <span class="eyebrow">weekly rhythm</span>
            <h3>Как выстраивается ритм недели</h3>
          </div>
        </div>
        <div class="week">
          <div class="week-strip">${week.map((d, i) => `<button class="week-day ${i === 0 ? "active" : ""}" data-day="${i}" type="button"><b>${d[0]}</b><strong>${d[1]}</strong><span>${d[2]}</span></button>`).join("")}</div>
          <div class="week-card" data-week-card></div>
        </div>
      </div>
    </section>
  `;
}

function streakSection() {
  return `
    <section class="section midnight">
      <div class="container streak">
        <div class="reveal">
          <div class="kicker">регулярность без перегруза</div>
          <h2 style="margin-top:22px">Ритм, который реально удерживать</h2>
          <p class="lead" style="margin-top:22px">Не цифровая гонка и не обещание приложения. Это образ устойчивой недели: короткие занятия, разные состояния, ясная логика и меньше внутреннего торга.</p>
        </div>
        <div class="streak-chain reveal">
          ${["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс", "+1", "+2", "+3"].map((d, i) => `<span style="--i:${i}">${d}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function audienceSection() {
  return `
    <section class="section light">
      <div class="container">
        <div class="section-head reveal">
          <h2>Для кого это</h2>
          <p class="lead dark-text">Не сухие категории, а реальные сценарии людей, которым нужна одна универсальная система вместо нескольких направлений.</p>
        </div>
        <div class="grid four">${audienceCards.map(([title, text]) => `<article class="audience-card reveal"><span class="eyebrow">segment</span><h3>${title}</h3><p class="dark-text">${text}</p></article>`).join("")}</div>
      </div>
    </section>
  `;
}

function alternativesSection() {
  const rows = [
    ["Случайные видео", "много выбора, мало системы"],
    ["Хаотичный самостоятельный фитнес", "каждый раз нужно быть себе методистом"],
    ["Длинные программы", "сложно встроить в загруженный график"],
    ["Отдельные направления", "силу, баланс и растяжку приходится собирать вручную"],
    ["Метод с тренером", "короткий собранный формат и личная адаптация"],
  ];
  return `
    <section class="section white">
      <div class="container split">
        <div class="split-photo reveal"><img src="${photos.strength}" alt="Динамичная тренировка Екатерины Чибиревой" /></div>
        <div class="reveal">
          <span class="eyebrow">better than scattered fitness</span>
          <h2 style="margin-top:18px">Чем этот формат лучше альтернатив</h2>
          <div class="list-lines" style="margin-top:28px">${rows.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join("")}</div>
        </div>
      </div>
    </section>
  `;
}

function reviewsSection() {
  return `
    <section class="section light">
      <div class="container">
        <div class="section-head reveal">
          <h2>Отзывы</h2>
          <p class="lead dark-text">Теплые истории о том, как короткий формат помогает вернуть ощущение контроля, силы и ритма.</p>
        </div>
        <div class="grid three">
          ${reviews.map(([name, text], i) => `<article class="review-card reveal"><div class="avatar"><img src="${[photos.portrait, photos.detail, photos.trust][i]}" alt="Фото в блоке доверия" /></div><p>${text}</p><b>${name}</b></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function formatsSection() {
  return `
    <section class="section white">
      <div class="container">
        <div class="section-head reveal">
          <h2>Форматы работы</h2>
          <p class="lead dark-text">Без цен на сайте и без автоматической покупки. Формат и стоимость обсуждаются лично с тренером.</p>
        </div>
        <div class="grid four">${formatCards.map(([title, text]) => `<article class="format-card reveal"><span class="eyebrow">format</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
      </div>
    </section>
  `;
}

function faqSection() {
  return `
    <section class="section light">
      <div class="container">
        <div class="section-head reveal"><h2>FAQ</h2><p class="lead dark-text">Коротко о старте, формате и контакте с тренером.</p></div>
        <div class="grid two">${faqs.map(([q, a]) => `<article class="faq reveal"><h3>${q}</h3><p>${a}</p></article>`).join("")}</div>
      </div>
    </section>
  `;
}

function finalCta() {
  return `
    <section class="section midnight">
      <div class="container cta-band reveal">
        <div>
          <span class="eyebrow" style="color:#9fe3c1">personal contact</span>
          <h2 style="margin-top:14px">Обсудите свой ритм тренировок с Екатериной</h2>
          <p class="lead" style="margin-top:18px">Напишите тренеру, чтобы подобрать формат под цель, состояние и реальную неделю.</p>
        </div>
        <div class="cta-row">
          <a class="btn light" href="${vkUrl}" target="_blank" rel="noopener">Написать тренеру</a>
          <a class="btn ghost" href="${vkUrl}" target="_blank" rel="noopener">Обсудить формат во ВК</a>
        </div>
      </div>
    </section>
  `;
}

function pageHero(title, text, image = photos.portrait) {
  return `
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="reveal">
          <div class="kicker">Екатерина Чибирева</div>
          <h1>${title}</h1>
          <p class="lead">${text}</p>
        </div>
        <div class="portrait-card reveal"><img src="${image}" alt="Екатерина Чибирева" /></div>
      </div>
    </section>
  `;
}

function howPage() {
  const steps = [
    ["Вы пишете во ВК", "Коротко рассказываете о цели, опыте, состоянии и удобном ритме."],
    ["Екатерина связывается", "В живом диалоге уточняет уровень, состояние, график и ожидания."],
    ["Подбирается формат", "Определяются длительность, характер нагрузки и реалистичный ритм недели."],
    ["Вы получаете тренировки", "Тренировки выдаются в удобном формате, который обсуждается лично."],
    ["Ритм корректируется", "При необходимости Екатерина помогает адаптировать нагрузку и не выпадать."],
  ];
  return pageHero("Как это работает", "Путь простой: не автоматическая подписка, а личный контакт с тренером и формат, который подбирается под человека.", photos.detail) + `
    <section class="section light">
      <div class="container split">
        <div class="steps reveal">${steps.map(([a, b]) => `<div class="step"><div><h3>${a}</h3><p class="dark-text" style="margin-top:8px">${b}</p></div></div>`).join("")}</div>
        <div class="module pad reveal">
          <span class="eyebrow">human-led flow</span>
          <h3 style="color:var(--navy);margin-top:12px">Не автоматический сервис</h3>
          <p class="dark-text" style="margin-top:14px;line-height:1.7">Сайт приводит к контакту. Дальше Екатерина лично обсуждает цель, уровень, состояние, удобный формат выдачи тренировок и условия работы.</p>
          <div class="stat-grid" style="margin-top:24px">
            <div class="stat"><span>контакт</span><b>лично</b></div>
            <div class="stat"><span>подбор</span><b>по состоянию</b></div>
            <div class="stat"><span>ритм</span><b>20 / 30 / 45</b></div>
            <div class="stat"><span>стоимость</span><b>обсуждается лично</b></div>
          </div>
        </div>
      </div>
    </section>
    ${weekModule()}
    ${sessionModule()}
    ${finalCta()}
  `;
}

function formatsPage() {
  return pageHero("Форматы работы", "Разные уровни контакта и сопровождения. Цена не указана на сайте: формат и стоимость обсуждаются лично с тренером.", photos.strength) + `
    <section class="section light">
      <div class="container grid two">
        ${formatCards.map(([title, text], i) => `<article class="format-card reveal"><span class="eyebrow">0${i + 1}</span><h3>${title}</h3><p>${text}</p><b>Формат и стоимость обсуждаются лично с тренером.</b></article>`).join("")}
      </div>
    </section>
    ${formatCompareModule()}
    ${finalCta()}
  `;
}

function audiencePage() {
  return pageHero("Для кого", "Для людей, которым нужна не коллекция упражнений, а понятная система коротких тренировок под реальную жизнь.", photos.calm) + audienceSection() + `
    <section class="section white">
      <div class="container split">
        <div class="reveal">
          <span class="eyebrow">behavior scenarios</span>
          <h2 style="margin-top:18px">Когда формат особенно попадает</h2>
          <div class="list-lines" style="margin-top:28px">
            <div><b>После работы нет ресурса выбирать</b><span>нужна готовая логика занятия</span></div>
            <div><b>Есть желание тренироваться дома</b><span>без сложной подготовки</span></div>
            <div><b>Скучно повторять одно и то же</b><span>нужен ритм, но не хаос</span></div>
            <div><b>Хочется сильное тело без перегруза</b><span>важен баланс нагрузки и восстановления</span></div>
          </div>
        </div>
        <div class="split-photo reveal"><img src="${photos.stretch}" alt="Портретная спортивная секция" /></div>
      </div>
    </section>
    ${finalCta()}
  `;
}

function methodPage() {
  return pageHero("Метод", "Одна тренировка вместо трех: сила, функциональность, контроль тела, баланс и растяжка в одном коротком формате.", photos.hero) + `
    <section class="section light">
      <div class="container grid two">
        ${[
          ["Одна тренировка вместо трех", "Не нужно самому соединять силовой блок, функциональность и растяжку. Метод уже собран."],
          ["Регулярность без перегруза", "Короткая длительность помогает встроить занятия в жизнь, а не спорить с ней."],
          ["Подбор по состоянию", "День может быть энергичным, базовым или восстановительным. Формат учитывает реальность."],
          ["Живой тренер", "Екатерина помогает выбрать ритм, скорректировать нагрузку и не превращать фитнес в давление."],
        ].map(([title, text]) => `<article class="format-card reveal"><span class="eyebrow">method</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
    ${stateModule()}
    ${formatCompareModule()}
    ${finalCta()}
  `;
}

function resultsPage() {
  return pageHero("Отзывы и результаты", "Доверие здесь строится не на обещаниях быстрых чудес, а на понятном ритме, контакте с тренером и ощущении собранности.", photos.trust) + reviewsSection() + `
    <section class="section white">
      <div class="container">
        <p class="quote reveal">“Самый сильный результат начинается там, где тренировка становится частью недели, а не отдельным подвигом.”</p>
        <div class="grid three" style="margin-top:34px">
          ${["Удерживают регулярность", "Лучше чувствуют тело", "Меньше спорят с собой перед занятием"].map((t) => `<article class="format-card reveal"><span class="eyebrow">result</span><h3>${t}</h3><p>Короткий формат снижает порог входа и помогает заниматься без лишнего выбора.</p></article>`).join("")}
        </div>
      </div>
    </section>
    ${finalCta()}
  `;
}

function trainerPage() {
  return pageHero("О тренере", "Екатерина Чибирева помогает выстроить тренировки так, чтобы они поддерживали силу, контроль тела и регулярность без перегруза.", photos.portraitTwo) + `
    <section class="section light">
      <div class="container split">
        <div class="split-photo reveal"><img src="${photos.strength}" alt="Екатерина Чибирева в спортивной тренировочной позе" /></div>
        <div class="reveal">
          <span class="eyebrow">trainer philosophy</span>
          <h2 style="margin-top:18px">Не героизм. Устойчивый ритм.</h2>
          <p class="lead dark-text" style="margin-top:22px">Подход Екатерины строится вокруг качества движения, адаптации под состояние и понятного плана. Здесь важна не гонка за максимальной нагрузкой, а тренировки, которые можно продолжать.</p>
          <div class="list-lines" style="margin-top:28px">
            <div><b>Внимание к состоянию</b><span>нагрузка не обязана быть одинаковой</span></div>
            <div><b>Собранная структура</b><span>сила, функциональность, растяжка</span></div>
            <div><b>Личный контакт</b><span>формат подбирается в диалоге</span></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section white">
      <div class="container">
        <p class="quote reveal">“Я хочу, чтобы человеку было понятно, что делать сегодня, и спокойно продолжать завтра.”</p>
        <div class="grid three" style="margin-top:34px">
          <div class="story-photo reveal"><img src="${photos.detail}" alt="Фото Екатерины для доверительного блока" /></div>
          <article class="format-card reveal"><span class="eyebrow">difference</span><h3>Метод вместо хаоса</h3><p>Екатерина помогает не собирать тренировку по частям, а выбрать формат, который уже соединяет нужные направления.</p></article>
          <article class="format-card reveal"><span class="eyebrow">care</span><h3>Без перегруза</h3><p>Сильный результат не требует постоянного давления. Нагрузка должна быть точной, а ритм устойчивым.</p></article>
        </div>
      </div>
    </section>
    ${finalCta()}
  `;
}

function contactsPage() {
  return pageHero("Контакты", "Напишите Екатерине, чтобы обсудить цель, состояние, ритм недели и подходящий формат тренировок.", photos.hero) + `
    <section class="section light">
      <div class="container grid two">
        <div class="module pad reveal">
          <span class="eyebrow">vk contact</span>
          <h3 style="margin-top:12px;color:var(--navy)">Написать Екатерине во ВК</h3>
          <p class="dark-text" style="margin-top:16px;line-height:1.7">Самый быстрый путь начать: напишите цель, опыт, текущее состояние и сколько времени обычно есть на тренировку.</p>
          <div class="cta-row" style="margin-top:24px">
            <a class="btn primary" href="${vkUrl}" target="_blank" rel="noopener">Перейти во ВК</a>
            <a class="btn dark" href="${vkUrl}" target="_blank" rel="noopener">Обсудить формат</a>
          </div>
          <div class="contact-chip" style="margin-top:18px">Телефон: ${phoneNumber}</div>
        </div>
        <div class="reveal">
          <span class="eyebrow">direct contact</span>
          <h2 style="margin-top:18px">Связаться напрямую</h2>
          <div class="list-lines" style="margin-top:28px">
            <div><b>ВКонтакте</b><span>vk.com/katrin_kr</span></div>
            <div><b>Телефон</b><span>${phoneNumber}</span></div>
            <div><b>Что написать</b><span>цель, состояние, опыт, доступное время</span></div>
            <div><b>Стоимость</b><span>обсуждается лично с тренером</span></div>
          </div>
          <p class="lead dark-text" style="margin-top:28px">Формат и стоимость обсуждаются лично с тренером после короткого знакомства.</p>
          <div class="cta-row" style="margin-top:24px">
            <a class="btn primary" href="${vkUrl}" target="_blank" rel="noopener">Написать во ВК</a>
            <a class="btn dark" href="${vkUrl}" target="_blank" rel="noopener">Подобрать формат</a>
          </div>
        </div>
      </div>
    </section>
    ${finalCta()}
  `;
}

function formatCompareModule() {
  return `
    <section class="section white">
      <div class="container module reveal" data-format>
        <div class="module-top">
          <div class="module-title"><span class="eyebrow">20 / 30 / 45</span><h3>Сравнение форматов</h3></div>
          <div class="segmented">${[20, 30, 45].map((m, i) => `<button class="${i === 1 ? "active" : ""}" data-format-duration="${m}" type="button">${m} мин</button>`).join("")}</div>
        </div>
        <div class="format-switch-grid">
          <div class="photo-panel"><img src="${photos.calm}" alt="Демонстрация формата тренировки" /></div>
          <div class="format-output" data-format-output></div>
        </div>
      </div>
    </section>
  `;
}

function renderSession(root, duration = 30) {
  const list = root.querySelector("[data-session-list]");
  root.querySelector("[data-dial]").textContent = duration;
  list.innerHTML = sessionData[duration].map(([time, title, text], i) => `
    <article class="timeline-item ${i === 1 ? "active" : ""}">
      <time>${time}</time>
      <div><h3>${title}</h3><p>${text}</p></div>
    </article>
  `).join("");
}

function renderState(root, key = "base") {
  const [name, duration, load, accent, result] = stateData[key];
  root.querySelector("[data-state-output]").innerHTML = `
    <span class="eyebrow">выбрано: ${name}</span>
    <h3>Сегодня нагрузка строится ${key === "recovery" ? "через восстановление" : "через точный ритм"}</h3>
    <div class="stat-grid">
      <div class="stat"><span>длительность</span><b>${duration}</b></div>
      <div class="stat"><span>нагрузка</span><b>${load}</b></div>
      <div class="stat"><span>акцент</span><b>${accent}</b></div>
      <div class="stat"><span>ощущение</span><b>${result}</b></div>
    </div>
    <p>Это пример того, как Екатерина может адаптировать тренировку под состояние дня, не разрушая регулярность.</p>
  `;
}

function renderPicker(root) {
  const values = {};
  root.querySelectorAll("[data-pick].active").forEach((button) => {
    values[button.dataset.pick] = button.dataset.value;
  });
  const goal = pickRules.goal[values.goal || "shape"];
  const condition = pickRules.condition[values.condition || "normal"];
  const time = pickRules.time[values.time || "30"];
  const depth = values.time === "45" ? "глубже проработать силу и растяжку" : values.time === "20" ? "сохранить ритм даже в плотный день" : "получить сбалансированное занятие";
  root.querySelector("[data-pick-output]").innerHTML = `
    <span class="eyebrow">пример рекомендации</span>
    <h3>${goal}: ${time}</h3>
    <div class="stat-grid">
      <div class="stat"><span>формат дня</span><b>${condition} собранный</b></div>
      <div class="stat"><span>акцент</span><b>${depth}</b></div>
      <div class="stat"><span>тип нагрузки</span><b>сила + функциональность + растяжка</b></div>
      <div class="stat"><span>контакт</span><b>адаптация лично</b></div>
    </div>
    <p>Это не автоматическая выдача программы. Екатерина помогает уточнить детали и выбрать подходящий формат в живом диалоге.</p>
  `;
}

function renderWeek(root, index = 0) {
  const day = week[index];
  root.querySelector("[data-week-card]").innerHTML = `<span class="eyebrow">${day[0]} / ${day[1]}</span><h3 style="margin-top:10px">${day[2]}</h3><p style="margin-top:10px">${day[3]}</p>`;
}

function renderFormat(root, duration = 30) {
  const items = {
    20: ["Короткий формат", "мобилизация, точная сила, короткая растяжка", "удержать регулярность", "легкость, включенность, без перегруза", "базовая"],
    30: ["Базовый формат", "сила, функциональный блок, восстановление", "собрать все тело", "тонус, контроль, спокойная усталость", "средняя"],
    45: ["Глубокий формат", "больше силовой работы и длиннее восстановление", "проработать качество движения", "сильное тело без ощущения гонки", "выше"],
  };
  const [title, structure, accent, feeling, depth] = items[duration];
  root.querySelector("[data-format-output]").innerHTML = `
    <span class="eyebrow">${duration} минут</span>
    <h3>${title}</h3>
    <div class="stat-grid">
      <div class="stat"><span>состав</span><b>${structure}</b></div>
      <div class="stat"><span>акцент</span><b>${accent}</b></div>
      <div class="stat"><span>после</span><b>${feeling}</b></div>
      <div class="stat"><span>глубина</span><b>${depth}</b></div>
    </div>
    <p>Выбор длительности не заменяет разговор с тренером. Екатерина помогает понять, какой формат будет устойчивым именно для вашей недели.</p>
  `;
}

function initInteractions() {
  document.querySelector(".menu-toggle")?.addEventListener("click", () => document.body.classList.toggle("menu-open"));

  document.querySelectorAll("[data-session]").forEach((root) => {
    renderSession(root);
    root.querySelectorAll("[data-duration]").forEach((button) => {
      button.addEventListener("click", () => {
        root.querySelectorAll("[data-duration]").forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        renderSession(root, button.dataset.duration);
      });
    });
  });

  document.querySelectorAll("[data-state]").forEach((root) => {
    renderState(root);
    root.querySelectorAll("[data-state-key]").forEach((button) => {
      button.addEventListener("click", () => {
        root.querySelectorAll("[data-state-key]").forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        renderState(root, button.dataset.stateKey);
      });
    });
  });

  document.querySelectorAll("[data-picker]").forEach((root) => {
    renderPicker(root);
    root.querySelectorAll("[data-pick]").forEach((button) => {
      button.addEventListener("click", () => {
        root.querySelectorAll(`[data-pick="${button.dataset.pick}"]`).forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        renderPicker(root);
      });
    });
  });

  document.querySelectorAll("[data-week]").forEach((root) => {
    renderWeek(root);
    root.querySelectorAll("[data-day]").forEach((button) => {
      button.addEventListener("mouseenter", () => updateDay(root, button));
      button.addEventListener("click", () => updateDay(root, button));
    });
  });

  document.querySelectorAll("[data-format]").forEach((root) => {
    renderFormat(root);
    root.querySelectorAll("[data-format-duration]").forEach((button) => {
      button.addEventListener("click", () => {
        root.querySelectorAll("[data-format-duration]").forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        renderFormat(root, button.dataset.formatDuration);
      });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  initTactileMotion();
}

function initTactileMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const tiltTargets = document.querySelectorAll([
    ".btn",
    ".module",
    ".review-card",
    ".format-card",
    ".audience-card",
    ".faq",
    ".photo-panel",
    ".split-photo",
    ".portrait-card",
    ".story-photo",
    ".hero-copy",
    ".hero-visual",
    ".cta-band",
  ].join(","));

  tiltTargets.forEach((el) => {
    el.classList.add("tilt-card");
    if (reduceMotion) return;

    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const strength = el.classList.contains("btn") ? 4 : 7;
      el.style.setProperty("--tilt-y", `${(x - 0.5) * strength}deg`);
      el.style.setProperty("--tilt-x", `${(0.5 - y) * strength}deg`);
      el.style.setProperty("--shine-x", `${x * 100}%`);
      el.style.setProperty("--shine-y", `${y * 100}%`);
    });

    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
      el.style.setProperty("--shine-x", "50%");
      el.style.setProperty("--shine-y", "50%");
    });
  });

  if (reduceMotion) return;

  const updateScroll = () => {
    const y = window.scrollY || 0;
    root.style.setProperty("--scroll-ratio", String(Math.round(y)));
    root.style.setProperty("--scroll-bg", `${(-y * 0.04).toFixed(2)}px`);
    root.style.setProperty("--scroll-grid", `${(-y * 0.08).toFixed(2)}px`);
    root.style.setProperty("--hero-parallax", `${(y * 0.025).toFixed(2)}px`);
    document.querySelectorAll(".section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = (center - window.innerHeight / 2) / window.innerHeight;
      section.style.setProperty("--section-shift", `${Math.max(-10, Math.min(10, distance * -10)).toFixed(2)}px`);
    });
  };

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateScroll();
      ticking = false;
    });
  }, { passive: true });

  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 18;
    root.style.setProperty("--drift-x", `${x.toFixed(2)}px`);
    root.style.setProperty("--drift-x-inverse", `${(-x * 0.45).toFixed(2)}px`);
    root.style.setProperty("--drift-y", `${y.toFixed(2)}px`);
  }, { passive: true });

  updateScroll();
}

function updateDay(root, button) {
  root.querySelectorAll("[data-day]").forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
  renderWeek(root, Number(button.dataset.day));
}

const pages = {
  home: homePage,
  how: howPage,
  formats: formatsPage,
  audience: audiencePage,
  method: methodPage,
  results: resultsPage,
  trainer: trainerPage,
  contacts: contactsPage,
};

document.getElementById("app").innerHTML = layout((pages[document.body.dataset.page] || homePage)());
initInteractions();
