"use strict";


// Last modified

window.addEventListener("load", function() {
    console.log("script toimii");
    last_modified();
});

function last_modified() {
    const date = new Date(document.lastModified).toLocaleString();
    //document.getElementById('modified').textContent = date;
    return date;
}


// Languahe switcher

function changeLanguage(lang) {
    location.hash = lang;
    updateContent(lang); 
}


function updateContent(lang) {
    const selectedLanguage = language[lang] || language.fi; 
    document.querySelectorAll("[id]").forEach(element => {
        const key = element.getAttribute("id");
        if (selectedLanguage[key]) {
            if (key == "modified") {
                let time = last_modified();
                element.textContent = selectedLanguage[key] + time;
            }
            element.textContent = selectedLanguage[key];
        }
    });
}


window.addEventListener('load', () => {
    const currentLang = location.hash.substring(1) || 'fi'; 
    updateContent(currentLang);
});

