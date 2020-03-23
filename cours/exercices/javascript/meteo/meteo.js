// Pensez à générer votre propre token depuis https://api.meteo-concept.com
// plutôt que d'utiliser celui ci.
let token = '6cfc7d6548a33ff45e02aa9f02dcce59026a8b08231bd0879a80330cd87c3c46';

// 5. Ajouter un champ de texte "Code INSEE" sur la page, et un bouton "Obtenir la température maximale". Quand on clique sur le bouton, afficher la météo pour le code INSEE correspondant.
document.querySelector('.bouton-afficher').addEventListener('click', function() {
  let codeInsee = document.querySelector('.code-insee').value;
  let url = `https://api.meteo-concept.com/api/forecast/daily/0?token=${token}&insee=${codeInsee}`;

  $.get(url, function(reponse) {
    // La réponse est arrivée.
    document.querySelector('.prevision').innerHTML = `La température maximale à ${reponse.city.name} sera de ${reponse.forecast.tmax} °C.`;
  });
});

// 6. Permettre une recherche par nom de ville.
document.querySelector('.bouton-rechercher').addEventListener('click', function() {
  let recherche = document.querySelector('.champ-de-recherche').value;
  let urlRecherche = `https://api.meteo-concept.com/api/location/cities?token=${token}&search=${recherche}`;

  $.get(urlRecherche, function(reponseRecherche) {
    let premiereVille = reponseRecherche.cities[0];
    let codeInsee = premiereVille.insee;
    let urlPrevision = `https://api.meteo-concept.com/api/forecast/daily/0?token=${token}&insee=${codeInsee}`;

    $.get(urlPrevision, function(reponsePrevision) {
      document.querySelector('.prevision').innerHTML = `La température maximale à ${reponsePrevision.city.name} sera de ${reponsePrevision.forecast.tmax} °C.`;
    });
  });
});
