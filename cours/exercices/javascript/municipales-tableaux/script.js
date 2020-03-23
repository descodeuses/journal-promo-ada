// 1. Déclarer un tableau let candidats = […]; avec les noms des candidates et candidats aux municipales
let candidats = [
  "Danielle Simonet",
  "Anne Hidalgo",
  "David Belliard",
  "Cédric Villani",
  "Benjamin Griveaux",
  "Rachida Dati",
  "Serge Federbusch",
  "Marcel Campion",
  "Christophe Berkani"
];

// 2. Afficher le contenu du tableau entier dans la console.
console.log(candidats);

// 3. Afficher le nom du 2ème candidat du tableau dans la console
console.log(candidats[1]);

// 4. Remplacer le candidat "Benjamin Griveaux" par "Agnès Buzyn". Afficher le tableau dans la console pour vérifier.
candidats[4] = 'Agnes Buzyn'
console.log(candidats);

// 5. Ajouter une nouvelle candidate ou candidat à la fin du tableau.
candidats.push('Nana Pomette');
console.log(candidats);

// 6. Inverser la position du premier et du second candidat.
let a = candidats[0];
let b = candidats[1];
candidats[0] = b;
candidats[1] = a;
console.log(candidats);

// 7. Trier les candidats par ordre alphabétique.
candidats.sort();
console.log(candidats);

// 8. Coder une recherche : coder une fonction qui renvoie le premier candidat dont le prénom commence par une lettre donnée (par exemple la lettre 'D'). Utiliser la fonction Array.prototype.find.
function estCeQueCandidatCommenceParD(candidat) {
  return candidat.startsWith('D')
}

let candidatTrouve = candidats.find(estCeQueCandidatCommenceParD);
console.log(candidatTrouve);
