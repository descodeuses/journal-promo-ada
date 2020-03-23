let taches = [
  'Acheter des légumes',
  'Finir le dossier de stage',
  'Faire les exercices de Javascript'
];

// Cette fonction met à jour la liste de la page HTML avec le contenu du tableau 'taches'.
function mettreAJourLaListe() {
  document.querySelector('.liste-taches ul').innerHTML = '';
  taches.forEach(function(tache) {
    // Note : quand on met le input *à l'intérieur* du label, tout le label devient cliquable.
    // Cela nous permet de cliquer sur toute la surface d'une tâche pour cocher ou décocher la case.
    document.querySelector('.liste-taches ul').innerHTML += `<li><label><input type="checkbox" class="tache-checkbox"/><span class="tache-nom">${tache}</span></label></li>`;
  });
}

// Évènement 'click' du bouton "Ajouter une tâche"
document.querySelector('.ajouter-tache').addEventListener('click', function() {
  // Récupération de la nouvelle tâche depuis l'input dans la page HTML
  let nouvelleTache = document.querySelector('.nouvelle-tache').value;
  // On ajoute la nouvelle tâche au tableau Javascript
  taches.push(nouvelleTache);

  // Maintenant que le tableau Javascript est à jour, on peut mettre à jour la
  // liste dans la page HTML.
  mettreAJourLaListe();

  // Finalement, on vide le champ de texte (maintenant que son
  // contenu a été ajouté à la liste).
  document.querySelector('.nouvelle-tache').value = '';
});

// Évènement 'click' de la checkbox "Tout cocher ou décocher"
document.querySelector('.checkbox-generale').addEventListener('click', function() {
  // Récupération de l'état de la checkbox générale (cochée ou non-cochée).
  let etatGeneral =  document.querySelector('.checkbox-generale').checked;
  // On applique cet état coché ou non-coché aux checkboxes de toutes les tâches.
  document.querySelectorAll('.tache-checkbox').forEach(function(checkbox) {
    checkbox.checked = etatGeneral;
  });
});

// Au chargement initial du script, on appelle tout de suite la fonction
// 'mettreAJourLaTable' pour remplir la table dès le premier affichage de la page.
mettreAJourLaListe();
