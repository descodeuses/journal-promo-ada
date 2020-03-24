# Semaine 8

**Cher journal,**

_-----OBJECTIF DE LA SEMAINE-------_

- finir le site Codevores.co
- voir les vidéos tuto JS envoyées par Souad


_----REALISATION DE LA JOURNEE 23.03.2020-----_

**Promo**

- café du matin
- aide @alix : suggestion d'utilier [Brackets](http://brackets.io/) comme éditeur de code, car souligne mieux les oublis de moustaches `{ }` ou de balise `<>`...`</>`

**Codevores.co**

- Nettoyer mon code html/css
- le partager à Hell'vyra pour la visio Responsive de 18h
- démarrer une 2e page de mon site


_----REALISATION DE LA JOURNEE 24.03.2020-----_

**Promo**

- pas de café du matin car pas le moral
- aide @alix sur ; dérouler un menu sans qu’il ne “pousse” les autres divs. Elle n'avait pas placé sa class sur la bonne balise "ul"
  
  >>>  solution apportée copiée du site (https://www.malt.fr/create-profile) : 
  
  @media screen and (max-width: 1199px)
        
        .main-header-nav__list {

            position: fixed;
            z-index: 13;
            overflow: auto;
            top: 0;
            right: 0;
            display: none;
            width: calc(100vw - 30px);
            max-width: 320px;
            height: 100vh;
            margin: 0;
            padding: 20px;
            background-color: #fff;
            flex-direction: column;
    
    >>> ATTENTION où on place les class.


**Codevores.co**

- Création de 3 pages supplémentaires : espace pro, espace recruteur, inscription
- Soucis rencontrée sur inscription = pb au niveau du header.
- Nouvelle idée trouvée pour la page inscription et connexion = un modal css/js
- Le responsive initialement codé répond assez bien sur les nouvelles pages. A peaufiner à la fin pour les détails s'il me reste du temps.

>> pour action : 
- continuer sur le modal et l'appliquer sur les 3 pages crées : index, espace pro, espace recruteur
- correction du bug du header > demander de l'aide à un mentor pour nettoyer cette partie qui pose pb, notamment en responsive.
- création de la page FAQ + Formulaire contact (en modal // connexion ou inscription)
