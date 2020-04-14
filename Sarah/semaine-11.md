# 11eme semaine de formation

## Mardi 14 avril

Reprise du cours php d'OpenClassRoom

### Transmettre des données avec L'URL

- Une URL représente l'adresse d'une page web (commençant généralement parhttp://).

- Lorsqu'on fait un lien vers une page, il est possible d'ajouter des paramètres sous la "nomdufichier.php?nom=Dupont&prenom=Jean" qui seront transmis à la page.

- La page nomdufichier.php recevra ces paramètres dans un array nommé$_GET :

          $_GET['nom']aura pour valeur « Dupont » ;

          $_GET['prenom']aura pour valeur « Jean ».

- Cette technique est pratique pour transmettre des valeurs à une page, mais il faut prendre garde au fait que le visiteur peut les modifier très facilement. Il faut donc tester prudemment leur valeur avant de les utiliser.

- La fonction isset()permet de vérifier si une variable est définie ou non.

- Le transtypage est une technique qui permet de convertir une variable dans le type de données souhaité. Cela permet de s'assurer par exemple qu'une variable est bien unint(nombre entier).
