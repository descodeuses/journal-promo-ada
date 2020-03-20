# 7eme semaine

## Lundi 16 mars 2020

## Mardi 17 mars 2020

Découpage d'image avec Alix

> SOS ! Comment mettre une image détourée sur fond de couleur svp ?

Seul les formats [PNG](https://fr.wikipedia.org/wiki/Portable_Network_Graphics) et [GIF](https://fr.wikipedia.org/wiki/Graphics_Interchange_Format) (à vérifier pour ce dernier) permettent d'avoir un fond transparent.
PNG est un bon format pour le web.

Pour en savoir un peu plus [un article sur les différents format d'image](https://www.supinfo.com/articles/single/7013-differences-jpg-gif-png)


## Mercredi 18 mars 2020

### Exercice JavaScript
À propos de la construction d'un autocomplete en JavaScript

[exercice issu du cours JavaScript d'OpenClassRoom](https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3514956-manipulez-les-formulaires#/id/r-3684444)

Nous avons fait une visioconférence, et produit [du code example](https://github.com/descodeuses/autocomplete-javascript) et deux vidéo.

[1ere vidéo de mise en place](https://valise.chapril.org/s/wnmrFNw27d2xssa)
[2eme vidéo de réalisation avec revue de code à la fin](https://valise.chapril.org/s/srJdJdHtoPyfkwJ)


### Différent style de fonction en JavaScript

[Style de fonction](https://descodeuses.github.io/fonctions-javascript/) avec Laura

Suivi d'une discussion avec Nathan (un mentor) sur la porté du this dans les différents cas. Recommandation d'utiliser la forme 

```javascript
function maFunction() {

}
```


## Jeudi 19 mars 2020

### Discussion sur Git et l'organisation du travail

Ce matin, avec 3 descodeuses, nous avons parlé de fichier TODO et de comment on
s'organise pour travailler. On a parlé de la séquence de travail habituelle :

- récupérer le code le plus à jour possible (`git pull --rebase` par exemple)
- coder pouh apporter de la valeur au produit
- enregistrer les modifications (`git commit` en général)
- publier les modifications pour que les autres puissent y accéder (`git push`)

> C'est le meilleur moyen de ne pas avoir de conflit

Elles travaillent sur windows avec l'outil github desktop pour tout ce qui est
`push` et `pull` (qui fait plutôt du `fetch` si j'ai bien saisi). Et les
commits sur atom.

### Échange sur SVG

Thimy (mentor) réponds à des questions à propos de SVG.

> Salut à toutes/tous! Quelqu’un serait-il calé en utilisation de SVG? Je m’essaye au dessin vectoriel et j’ai réussi à le transférer correctement sur une page html mais j’ai du mal à comprendre comment lui appliquer les propriétés css, notamment avec hover et pour la colorisation.

[Cette page explique plutôt bien (en anglais) comment tu peux utiliser le svg](https://fvsch.com/svg-icons/)
Dans les grandes lignes, si tu charges ton svg en tant qu’image avec `<img src="img.svg" />`, tu ne pourras pas appliquer de style en css dessus.
Pour pouvoir mettre du style, il faut que ton svg soit défini directement dans ton html (si tu ouvres ton svg dans ton éditeur tu verras que c’est du code dedans).

> SVG(Scalable Vector Graphics) a quoi sert? C'est pour les images ? pour les carrés ?

c’est un format d’image composé de formes géométriques, ce qui permet d’avoir des images qu’on peut redimensionner sans perdre de qualité

Il y a des icônes en SVG disponible sur [feathericons.com](https://feathericons.com/)

### JavaScritp avancé

Le soir, Laura à partagé un bout de code JavaScript assez poussé pour quelqu'un qui se forme depuis 6 semaines seulement :)

```JavaScript
async function func1() {
    return 3;
}
async function func2() {
    return 4;
}
var promiseRes =
    Promise
        .all([func1(), func2()])
        .then(function(results) {
            return results.reduce(function(acc, res) {
                return acc * res;
            }, 2);
        })
        .then(function(time) {
            return setTimeout(callback, time * 1000);
        });
```

Elle en comprend pas très bien ce qu'il se passe dedans. Je suppose que c'est les histoires d'asynchronisme ?

## Vendredi 20 mars 2020

Suite aux discussions avec Souad et Mich ces derniers jours, on essaie de se retrouver toutes à 9h30 pour démarrer la journée. La semaine dernière, nous avions convenue de nous retrouver à 10h pour faire un point de situation.

Il y avait assez peu de monde à 9h30, et personne de plus à 10h.

Nous avons présenté une ébauche de l'organisation pour la suite. En particulier, l'intrduction des journaux.

Point avec Céline qui à du mal avec le positionnement de sont `≤header>`. On parle du flow d'affichage en HTML, et du positionnement en CSS. Faire du négatif, c'est plutôt rare, special, à éviter.

Vers 12h, Lynda demande un peu d'aide. Également une histoire de placement et d'affichage de sont menu hamburger. Elle a essayé plusieurs choses, mais ça ne semble pas fonctionner. Beaucoup de chose dans tout les sens sur le HTML et le CSS, c'est pas facile de garder un code propre et lisible, et pourtant, c'est souvent ce qui aide à mieux comprendre ce qu'il se passe.

Dans une point l'après midi, elle semble avoir réussi quelque chose, mais trouve ça pas jolie.

En fin de journée, je refait un check avec Céline qui me montre ce qu'elle a réussi à faire avec son [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header). Elle me demande mon avis, je fait quelques retours.

Retour sur le JavaScript que Laura a posté hier soir tard. J'essaie de déméler ce qu'elle ne comprend pas. Il y a dans le code l'aspect asynchrone de JavaScript (avec async et les promesses), et en fait c'est sur [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) qu'elle souhaite des explications. Je partage mon écran pour dérouler des bouts de code dans la console.

Nous avons parlé de [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), et donc de la structure [mapReduce](https://fr.wikipedia.org/wiki/MapReduce). C'est un pied dans la [programmation fonctionnelle](https://fr.wikipedia.org/wiki/Programmation_fonctionnelle)

Quelques échanges avec Silvia pour l'encourager à programmer, quitte à le faire avec ces enfants sur [Scratch](https://scratch.mit.edu/) et [Leekwars](https://leekwars.com/).

Le soir, discussion avec Delphine sur des soucis de taille d'image. Je lui partage l'article de [Raphaël Goetter sur les images responsives](https://www.alsacreations.com/article/lire/1621-responsive-images-srcset.html)
