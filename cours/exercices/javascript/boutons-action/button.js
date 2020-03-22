// 1. Quand on clique sur "J'accepte", un dialogue "Vous avez accepté les cookies." apparait.
document.querySelector('.yes-button').addEventListener('click', function() {
  alert('Vous avez accepté les cookies.');
});

// 2. On ajoute un bouton "Refuser". Quand on clique dessus, un dialogue "Vous avez refusé les cookies." apparait.
document.querySelector('.refuse-button').addEventListener('click', function() {
  alert('Vous avez refusé les cookies.');
});

// 3. Rajouter un bouton « Survolez-moi ». Quand on passe la souris dessus, un dialogue avec le texte « J’ai été survolé ! » apparait.
document.querySelector('.survolez-moi').addEventListener('mouseover', function() {
  alert("J'ai été survolé");
});

// 4. Rajouter un bouton « Changer la couleur du titre ». Quand on clique dessus, la couleur du texte du h1 de la page devient bleue.
document.querySelector('.title-color-change').addEventListener('click', function() {
  document.querySelector('h1').style.color='blue';
});

// 5. Rajouter un bouton « Changer la couleur de fond de la page ». Quand on clique dessus, la couleur de fond de la page devient verte.
document.querySelector('.change').addEventListener('click', function() {
  document.body.style.background='green';
});

// 6. Changer le bouton « J’accepte ». Maintenant, quand on clique dessus, après avoir cliqué sur "OK", le bouton "J'accepte" disparait de la page.
document.querySelector('.accept-button').addEventListener('click', function() {
  alert('Bienvenue aux descodeuses !');
  document.querySelector('.accept-button').remove();
});
