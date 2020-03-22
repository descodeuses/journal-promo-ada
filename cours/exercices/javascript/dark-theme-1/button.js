// 1. Faire une page simple, avec un peu de texte et deux boutons en haut de la page : un bouton « Thème clair » et un bouton « Thème sombre ».
//    - Quand on clique sur le bouton « Thème clair », les textes de la page doivent s’afficher en noir sur fond blanc.
//    - Quand on clique sur le bouton « Thème sombre », les textes de la page doivent s’afficher en blanc sur fond noir.
/*
document.querySelector('.bouton-jour').addEventListener('click', function() {
  document.querySelector('body').style.color = 'black';
  document.querySelector('body').style.backgroundColor = 'white';
});

document.querySelector('.bouton-nuit').addEventListener('click', function() {
  document.querySelector('body').style.color = 'white';
  document.querySelector('body').style.backgroundColor = 'black';
});
*/

// 2. Faire en sorte qu'aucune couleur n'apparaisse dans le fichier Javascript.
//    À la place, toutes les couleurs doivent définies dans le fichier CSS.
//    (Indice : utiliser `classList.add()` et `classList.remove()`.)
document.querySelector('.bouton-jour').addEventListener('click', function() {
  document.querySelector('body').classList.remove('theme-nuit');
  document.querySelector('body').classList.add('theme-jour');
});

document.querySelector('.bouton-nuit').addEventListener('click', function() {
  document.querySelector('body').classList.remove('theme-jour');
  document.querySelector('body').classList.add('theme-nuit');
});
