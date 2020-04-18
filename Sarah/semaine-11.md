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


### Transmettre des données avec un formulaire

- Les formulaires sont le moyen le plus pratique pour le visiteur de transmettre des informations à un site. 

- Les données envoyées via un formulaire se retrouvent dans un array$_POST.

- il faut contrôler les données qu'envoie l'utilisateur. Il pourrait très bien ne pas remplir tous les champs voire trafiquer le code HTML de la page pour supprimer ou ajouter des champs. 

- il faut s'assurer qu'aucun texte qui est envoyé ne contient du HTML si celui-ci est destiné à être affiché sur une page. Sinon, on ouvre une faille XSS. Pour éviter la faille XSS, il suffit d'appliquer la fonction "htmlspecialchars" sur tous les textes envoyés par les visiteurs que l'on affiche.

## Jeudi 16 avril

J'ai continué à modifier mon site Codevores.

J'ai avancer d'un chapitre le cours de PHP et j'ai réussi le tp consistant à créer deux pages php dont l'une est protégée par un mot de passe qui doit être donné par l'utilisateur dans le champ input password de la première page php. 

                    <?php
                    htmlspecialchars($_POST['mdp']);

                    if (isset($_POST['mdp'])){
                      if ($_POST['mdp'] == 'kangourou') {
                        echo('voici les informations confidentielles');
                      } else {
                        echo('Vous n'avez pas les autorisations');
                      }
                    } else {
                        echo('Vous n'avez pas les autorisations');
                        }
                     ?>

## Vendredi 17 avril

Je continue le cours de PHP

### Les variables superglobales

Les variables superglobales sont des variables automatiquement créées par PHP. Elles se présentent sous la forme d'arrays contenant différents types d'informations.

$_SERVER : ce sont des valeurs renvoyées par le serveur. Elles sont nombreuses et quelques-unes d'entre elles peuvent nous être d'une grande utilité. $_SERVER['REMOTE_ADDR'] nous donne l'adresse IP du client qui a demandé à voir la page (utile pour l'identifier).

$_SESSION : on y retrouve les variables de session. Ce sont des variables qui restent stockées sur le serveur le temps de la présence d'un visiteur. 

$_COOKIE : contient les valeurs des cookies enregistrés sur l'ordinateur du visiteur. Cela nous permet de stocker des informations sur l'ordinateur du visiteur pendant plusieurs mois, pour se souvenir de son nom par exemple.

$_GET : elle contient les données envoyées en paramètres dans l'URL.

$_POST : elle contient les informations qui viennent d'être envoyées par un formulaire.

$_FILES : elle contient la liste des fichiers qui ont été envoyés via le formulaire précédent.
