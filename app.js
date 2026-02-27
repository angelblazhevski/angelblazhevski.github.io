// Minimal JS just for the spotlight effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        // Update CSS variables for the spotlight effect
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});


// form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Reset form
    this.reset();

    // Hide success message after 3 seconds
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);

});


// Send mail
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("9c9UABgvXx_XjFIfd");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_5buonrg", "template_5gqsi34", this);
    });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener('scroll', function() {
    // Проверуваме колку е скролнато
    const scrollValue = window.scrollY || document.documentElement.scrollTop;

    if (scrollValue > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Функција за прикажување на Toast
const toast = document.getElementById("toast");

function showToast() {
    toast.classList.add("show");

    // По 3 секунди, скриј го пак
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Селектирај ги картичките што немаат линк (Cyber и Vezilka)
const privateProjects = document.querySelectorAll('.disabled-card');

privateProjects.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault(); // Спречи го скокањето на страната
        showToast();
    });
});

const translations = {
    "en": {
        "logo": "ANGEL BLAZHEVSKI",
        "nav-contact": "Contact",
        // "hero-title": "WEB <span>DEVELOPER</span>",
        "hero-loc": "<p>BASED<br>In<br>Macedonia</p>",
        "hero-bio": 'Building <span style="color: #76b0ab;">scalable systems</span> and intelligent <span style="color: #76b0ab;">AI</span> solutions.',
        "about-title": "About Me",
        "card-intro-title": "HI THERE, I'M ANGEL",
        "card-intro-text": "I am a Computer Science student with strong skills in full-stack development, backend systems, and Machine Learning. I have experience building modern web applications using HTML, CSS, JavaScript, Spring Boot, .NET, and PHP, along with database design and system architecture.<br><br>I am currently a contributor to the Vezilka project, an AI-driven initiative focused on the Macedonian market. The project aims to simplify and improve workflows across multiple sectors by leveraging artificial intelligence and Macedonian language data. Through this experience, I have worked with dataset preparation, data processing, and AI-related development.<br><br>I have developed several real-world applications, including an Interview Management System built with .NET, a CyberSecurity platform using PHP and MySQL, a WordPress website for the Museum of the Macedonian Struggle, and an Air Pollution monitoring system.<br><br>I am passionate about building efficient, scalable software and continuously expanding my knowledge in modern software development and artificial intelligence.",
        "card-tech-title": "TECH STACK",
        "card-tech-text": "My technical expertise includes full-stack web development, backend engineering, and database design. I work with HTML, CSS, and JavaScript to build responsive and modern user interfaces.<br><br>On the backend, I have experience with Spring Boot, .NET, and PHP, developing secure and scalable applications. I also work with MySQL and relational databases for efficient data management.<br><br>Additionally, I have experience in Machine Learning, dataset preparation, and AI-related development through my work on the Vezilka project.<br><br>I am comfortable using Git, GitHub, REST APIs, and modern development workflows to build reliable and maintainable software systems.",
        "card-flex-title": "VERY FLEXIBLE WITH COMMUNICATIONS & LOCATIONS",
        "card-flex-text": "Based in Macedonia, Skopje and open to remote work worldwide.",
        "card-flex-btn": "<i class='bx bx-send'></i> CONTACT ME",
        "card-passion-title": "PASSION FOR CODING",
        "card-passion-text": "Solving problems and building solutions through code. Programming is my profession—it's my passion. I enjoy exploring new technologies and enhancing my skills.",
        "projects-title": "My Projects",
        "proj-pollution-desc": "An application for monitoring air quality and visualizing environmental data.",
        "proj-museum-desc": "Website/app with interactive content and educational features for the museum.",
        "proj-ims-desc": "A system for managing interviews and candidates, including scheduling and position details.",
        "proj-cyber-desc": "A web application for cybersecurity with various tools and simulations.",
        "proj-vezilka-desc": "Currently fine-tuning a model using translated Macedonian datasets to English and preparing the data for model training.",
        "contact-title": "Get In Touch",
        "contact-subtitle": "Have a project in mind or just want to ask me a question? Drop me a message"
    },
    "mk": {
        "logo": "АНГЕЛ БЛАЖЕВСКИ",
        "nav-contact": "Контакт",
        "hero-loc": "<p>ЖИВЕАМ<br>Во<br>Македонија, СКОПЈЕ</p>",
        "hero-bio": 'Развивам <span style="color: #76b0ab;"> скалабинли системи </span> и интелигинтни <span style="color: #76b0ab;"> AI </span> решенија.',
        "about-title": "За Мене",
        "card-intro-title": "ЗДРАВО, МОЕТО ИМЕ Е АНГЕЛ",
        "card-intro-text": "Јас сум студент на компјутерски науки со силни вештини во full-stack development, backend системи и Machine Learning. Имам искуство во градење модерни веб апликации користејќи HTML, CSS, JavaScript, Spring Boot, .NET и PHP, заедно со дизајн на бази на податоци и системска архитектура.<br><br>Моментално работам на проектот „Везилка“, иницијатива водена од вештачка интелигенција (AI) фокусирана на македонскиот пазар. Проектот има за цел да ги поедностави и подобри работните процеси во повеќе сектори преку користење на AI и податоци на македонски јазик. Преку ова искуство, работев на подготовка на сетови со податоци, обработка на податоци и развој поврзан со вештачка интелигенција.<br><br>Имам развиено неколку реални апликации, вклучувајќи Систем за менаџирање на интервјуа (IMS) изграден со .NET, CyberSecurity платформа со PHP и MySQL, WordPress веб-страница за Музејот на македонската борба, како и систем за мониторинг на аерозагадувањето.<br><br>Амбизиоцен сум за градење ефикасен, скалабилен софтвер и континуирано проширување на моето знаење во модерниот софтверски развој и вештачката интелигенција.",
        "card-tech-title": "TECH STACK",
        "card-tech-text": "Мојата техничка експертиза вклучува full-stack веб развој, backend инженеринг и дизајн на бази на податоци. Користам HTML, CSS и JavaScript за креирање респонзивни и модерни кориснички интерфејси.<br><br>На делот на backend, имам искуство со Spring Boot, .NET и PHP, развивајќи безбедни и скалабилни апликации. Исто така, работам со MySQL и релациони бази на податоци за ефикасно управување со податоци.<br><br>Дополнително, имам искуство во Machine Learning, подготовка на податоци и развој на AI решенија преку мојата работа на проектот „Везилка“.<br><br>Вешто ги користам Git, GitHub, REST апликациски интерфејси (APIs) и модерни процеси за развој за да изградам сигурни софтверски системи кои лесно се одржуваат.",
        "card-flex-title": "ФЛЕКСИБИЛНОСТ ЗА КОМУНИКАЦИЈА И ЛОКАЦИЈА",
        "card-flex-text": "Лоциран во Скопје, Македонија и отворен за далечинска работа (remote) ширум светот.",
        "card-flex-btn": "<i class='bx bx-send'></i> КОНТАКТИРАЈ МЕ",
        "card-passion-title": "СТРАСТ ЗА КОДИРАЊЕ",
        "card-passion-text": "Решавање проблеми и градење решенија преку код. Програмирањето е моја професија — тоа е мојата страст. Уживам во истражување на нови технологии и усовршување на моите вештини.",
        "projects-title": "Мои Проекти",
        "proj-pollution-desc": "Апликација за мониторинг на квалитетот на воздухот и визуелизација на податоци за животната средина.",
        "proj-museum-desc": "Веб апликација со интерактивна содржина и едукативни карактеристики за музејот.",
        "proj-ims-desc": "Систем за менаџирање на интервјуа и кандидати, вклучувајќи закажување и детали за позиции.",
        "proj-cyber-desc": "Веб апликација за сајбер безбедност со различни алатки и симулации.",
        "proj-vezilka-desc": "Моментално работам на прилагодување (fine-tuning) на модел со користење на преведени македонски податоци и нивна подготовка за тренинг.",
        "contact-title": "Контактирај Ме",
        "contact-subtitle": "Имате проект на ум или едноставно сакате да се ми поставите некое прашање? Пишете ми порака"
    }
};

// 2. Функција за превод на елементите
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('selectedLanguage', lang);
}

// 3. Логика за Dropdown менито
const langMenu = document.querySelector('.lang-menu');

// 1. Отворање и затворање на менито (Toggle)
if (langMenu) {
    langMenu.addEventListener('click', (e) => {
        // Спречува затворање на менито ако кликнеш внатре во него
        e.stopPropagation();
        langMenu.classList.toggle('active');
    });
}

// 2. Глобална функција за избор на јазик
window.updateLang = function(lang, flagSrc, langText, event) {
    // Спречува менито повторно да се отвори по изборот
    if (event) {
        event.stopPropagation();
    }

    // Промена на UI елементите (икона и текст)
    const currentFlag = document.getElementById('current-flag');
    const currentText = document.getElementById('current-lang-text');

    if (currentFlag) currentFlag.src = flagSrc;
    if (currentText) currentText.innerText = langText;

    // Извршување на преводот
    changeLanguage(lang);

    // ЕКСПЛИЦИТНО ЗАТВОРАЊЕ на менито по клик
    if (langMenu) {
        langMenu.classList.remove('active');
    }
};

// Затвори го менито ако се кликне било каде на екранот
window.addEventListener('click', () => {
    if (langMenu) {
        langMenu.classList.remove('active');
    }
});

