// 1. Choisir une scientifique dans la Liste de femmes scientifiques sur Wikipedia (https://fr.wikipedia.org/wiki/Liste_de_femmes_scientifiques).
// Créer un objet Javascript nommé `uneScientifique` avec trois propriété : 'nom', 'année de naissance', et 'réalisations'.
let uneScientifique = {
  nom: 'Marie Curie',
  anneDeNaissance: 1867,
  réalisations: 'découvre la radioactivité'
}

// 2. Utilisez console.log pour afficher le nom de la scientifique dans la console, avec un message de bienvenue. Par exemple "Bonjour, je m’apelle [NOM] et je suis une scientifique !"
console.log(`Bonjour, je m’apelle ${uneScientifique.nom} et je suis une scientifique !`);

// 3. Écrivez une nouvelle ligne de code, qui ajoute une propriété 'aRecuUnPrixNobel' à votre scientifique, et mettez la propriété à 'true'.
// (NB: ne modifiez pas le code que vous avez écrit plus haut pour créer votre objet. Faites cette étape avec une **nouvelle** ligne de code.)
uneScientifique.aRecuUnPrixNobel = true;

// 4. Ajoutez à votre objet 'uneScientifique' une méthode nommée 'parlerDeLinformatique', qui affiche dans la console le message 'En informatique, nous sommes tous perchés sur des épaules de géantes.'
// (NB: pareil, ne modifiez pas votre code précédent ! Ajoutez une nouvelle ligne de code.)
uneScientifique.parlerDeLinformatique = function() {
  console.log('En informatique, nous sommes tous perchés sur des épaules de géantes.')
}

// 5. Appelez la méthode 'parlerDeLinformatique' de votre scientifique, et vérifiez que le bon message s'affiche bien dans la console.
uneScientifique.parlerDeLinformatique();

// 6. Ajoutez une nouvelle méthode 'direBonjour', qui affiche dans la console le même message que dans la question 2. Mais cette fois, utilisez le mot-clef 'this' pour afficher le nom de votre scientifique (de manière à ce que ça marche potentiellement pour n'importe quelle scientifique).
uneScientifique.direBonjour = function() {
  console.log(`Bonjour, je m’apelle ${this.nom} et je suis une scientifique !`);
}

// 7. Appelez la méthode 'direBonjour' de votre scientifique, et vérifiez que ça affiche bien un message dans la console.
uneScientifique.direBonjour();

// 8. Sans modifier le code précédent, changez la propriété 'nom' de votre scientifique en 'Margaret Hamilton'. Appelez ensuite à nouveau la méthode 'direBonjour', et vérifiez que cela fonctionne toujours.
uneScientifique.nom = 'Margaret Hamilton';
uneScientifique.direBonjour();

// 9. Écrivez une nouvelle méthode 'decrireLesReussites', et danc cette méthode, utilisez un if/else pour afficher dans la console 'J’ai reçu un prix Nobel !' si sa propriété 'aRecuUnPrixNobel' est 'true', et 'Je n’ai pas reçu de prix Nobel, mais j’ai fait encore mieux que ça !' si sa propriété 'aRecuUnPrixNobel' est 'false'.
uneScientifique.decrireLesReussites = function() {
  if (this.aRecuUnPrixNobel) {
    console.log('J’ai reçu un prix Nobel !');
  } else {
    console.log('Je n’ai pas reçu de prix Nobel, mais j’ai fait encore mieux que ça !');
  }
}

// 10. Appelez la méthode 'decrireLesReussites()' de votre scientifique, et vérifiez que ça fonctionne.
uneScientifique.decrireLesReussites();

// 11. Mettez la propriété 'aRecuUnPrixNobel' de votre scientifique à false (pareil, sans ajouter de ligne de code).
uneScientifique.aRecuUnPrixNobel = false;

// 12. Appelez à nouveau la méthode 'decrireLesReussites()', et vérifiez que le bon message s'affiche dans la console.
uneScientifique.decrireLesReussites();
