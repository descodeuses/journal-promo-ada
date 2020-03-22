
function changerTheme(themeChoisi) {
  let leBody = document.querySelector('body');
  // 1. Enlever toutes les classes theme du body
  leBody.classList.remove('theme-jour', 'theme-nuit', 'theme-crepuscule', 'theme-hacker');
  // 2. Ajouter la classe du theme sélectionné au body
  leBody.classList.add(themeChoisi);
}

document.querySelector('.bouton-nuit-haut').addEventListener('click', function() {
  changerTheme('theme-nuit');
});

document.querySelector('.bouton-jour-haut').addEventListener('click', function() {
  changerTheme('theme-jour');
});

document.querySelector('.bouton-crepuscule-haut').addEventListener('click', function() {
  changerTheme('theme-crepuscule');
});

document.querySelector('.bouton-hacker-haut').addEventListener('click', function() {
  changerTheme('theme-hacker');
});

document.querySelector('.bouton-nuit-bas').addEventListener('click', function() {
  changerTheme('theme-nuit');
});

document.querySelector('.bouton-jour-bas').addEventListener('click', function() {
  changerTheme('theme-jour');
});

document.querySelector('.bouton-crepuscule-bas').addEventListener('click', function() {
  changerTheme('theme-crepuscule');
});

document.querySelector('.bouton-hacker-bas').addEventListener('click', function() {
  changerTheme('theme-hacker');
});



