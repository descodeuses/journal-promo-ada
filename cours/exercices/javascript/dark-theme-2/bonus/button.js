function changerTheme(themeChoisi) {
  let leBody = document.querySelector('body');
  // 1. Enlever toutes les classes theme du body
  leBody.classList.remove('theme-jour', 'theme-nuit', 'theme-crepuscule', 'theme-hacker');
  // 2. Ajouter la classe du theme sélectionné au body
  leBody.classList.add(themeChoisi);
}

document.querySelector('#selecteur-de-theme').addEventListener('change', function() {
  let classeDuTheme = document.querySelector('#selecteur-de-theme').value;
  changerTheme(classeDuTheme);
});

document.querySelector('.theme-au-hasard').addEventListener('click', function() {
  // 1. On définit un tableau avec les classes possibles
  let themes = [
    'theme-jour',
    'theme-nuit',
    'theme-crepuscule',
    'theme-hacker'
  ];
  // 2. On choisit un nombre entre 0 et le nombre de thèmes disponibles
  let indexAuHasard = Math.floor(Math.random()*themes.length);
  // 3. On récupère le thème correspondant au nombre choisi aléatoirement
  let classeDuThemeAuHasard = themes[indexAuHasard];
  // 4. On change l'entrée sélectionnée dans le menu déroulant.
  document.querySelector('#selecteur-de-theme').value = classeDuThemeAuHasard;
  // 5. Changer l'entrée du menu déroulant depuis du Javascript ne déclenche pas
  // l'évènement 'change'.
  // (Il n'est déclenché que quand c'est l'utilisateur lui-même qui clique sur le menu.)
  // Pour finir, on force donc maintenant le changement du thème.
  changerTheme(classeDuThemeAuHasard);
});
