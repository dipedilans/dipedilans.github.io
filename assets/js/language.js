// Language Module - PT/EN toggle

let currentLanguage = localStorage.getItem('language') || 'pt';

export function initLanguage() {
    const languageToggle = document.getElementById('languageToggle');

    // Apply saved language
    setLanguage(currentLanguage);

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
            setLanguage(currentLanguage);
            localStorage.setItem('language', currentLanguage);
        });
    }

    // Apply translations immediately after DOM updates
    setTimeout(() => {
        setLanguage(currentLanguage);
    }, 100);
}

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    loadTranslations(lang);
}

async function loadTranslations(lang) {
    try {
        const response = await fetch(`/data/translations.json`);
        const translations = await response.json();

        if (translations[lang]) {
            applyTranslations(translations[lang]);
        }
    } catch (error) {
        console.log('Translations file not found, using default text');
    }
}

function applyTranslations(translations) {
    // Apply translations to elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

export function getCurrentLanguage() {
    return currentLanguage;
}