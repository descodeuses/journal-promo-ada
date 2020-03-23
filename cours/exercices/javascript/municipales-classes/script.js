// 1. Définir en haut du fichier une classe "Candidat",
// qui contienne un prénom, un nom et un parti.
class Candidat {
  constructor(prenom, nom, parti) {
    this.prenom = prenom;
    this.nom = nom;
    this.parti = parti;
  }
}

// 2. Modifier le tableau 'candidats', pour le remplir en utilisant
// notre classe (new Candidat(…)) plutôt qu'en créant des objets directement.
let candidats = [
  new Candidat('Danielle', 'Simonnet', 'LFI'),
  new Candidat('Anne', 'Hidalgo', 'PS'),
  new Candidat('Cédric', 'Villani', '-'),
  new Candidat('Agnès', 'Buzyn', 'LREM'),
];

// Cette fonction met à jour la table de la page HTML avec le contenu du tableau 'candidats'.
function mettreAJourLaTable() {
  document.querySelector('.tbody-candidats').innerHTML = '';
  candidats.forEach(function(candidat) {
    document.querySelector('.tbody-candidats').innerHTML += `<tr><td>${candidat.prenom}</td><td>${candidat.nom}</td><td>${candidat.parti}</td</tr>`;
  });
}

// Évènement 'click' du bouton "Ajouter un candidat"
document.querySelector('.ajouter-candidat').addEventListener('click', function() {
  // Création d'un nouvel objet pour le nouveau candidat
  let nouveauCandidat = new Candidat(
    document.querySelector('.nouveau-candidat-prenom').value,
    document.querySelector('.nouveau-candidat-nom').value,
    document.querySelector('.nouveau-candidat-parti').value
  );
  // On ajoute le nouveau candidat au tableau Javascript
  candidats.push(nouveauCandidat);

  // Maintenant que le tableau Javascript est à jour, on peut mettre à jour la
  // table dans la page HTML.
  mettreAJourLaTable();

  // Finalement, on vide les trois champs de textes (maintenant que leur
  // contenu a été ajouté au tableau).
  document.querySelector('.nouveau-candidat-prenom').value = '';
  document.querySelector('.nouveau-candidat-nom').value = '';
  document.querySelector('.nouveau-candidat-parti').value = '';
});

// Évènement 'click' du bouton "Trier le tableau"
document.querySelector('.bouton-trier').addEventListener('click', function() {
  // On trie le tableau par ordre alphabétique de prénom.
  candidats.sort(function(candidatA, candidatB) {
    // Pour contrôler finement le tri, on donne à la méthode 'sort' une fonction.
    // Cela permet par exemple de spécifier qu'on veut trier par ordre de prénom
    // (plutôt que par ordre de nom, ou de parti.)
    //
    // Voir la documentation de Array.prototype.sort pour les détails.
    return candidatA.prenom > candidatB.prenom;
  });

  // Maintenant que le tableau Javascript a été modifié, on peut mettre à jour la
  // table dans la page HTML.
  mettreAJourLaTable();
});


// Au chargement initial du script, on appelle tout de suite la fonction
// 'mettreAJourLaTable' pour remplir la table dès le premier affichage de la page.
mettreAJourLaTable();
