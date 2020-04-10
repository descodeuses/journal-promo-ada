# 10eme semaine de formation

## Lundi 6 Avril

Début du cours Openclassroom PHP. 

  - J'ai installé MAMP avec Apache et MySQL.
  - J'ai créé un dossier "Sites" et un dossier "tests" pour mes pages.php.
  - J'ai créé un premier script avec l'instruction echo.
  - J'ai configuré Php pour qu'il indique les erreurs en modifiant le fichier php.ini. 
        - Pour savoir où se trouve ce fichier on créé un fichier php contenant le script "<?php phpinfo();". 
        - On l'ouvre et on regarde le chemin indiqué à la ligne "Loaded configuration file".
        - On modifie le fichier php.ini en vérifiant deux clés de configuration: 
          - error_reporting = E_ALL
          - display_errors = On
        - On enregistre le fichier et on relance MAMP pour que la modification soit prise en compte.

### fonctionnement d'un site écrit en PHP.

Il existe deux types de sites web :
  
  - les sites statiques : réalisés en HTML et CSS, leur contenu ne peut être mis à jour que par le webmaster ;
  
  - les sites dynamiques : réalisés avec d'autres outils comme PHP et MySQL en plus de HTML et CSS, ils permettent aux visiteurs de participer à la vie du site, de poster des messages;

Les visiteurs du site sont appelés les clients. Ils demandent au serveur qui héberge le site de leur transmettre les pages web.

PHP est un langage exécuté par le serveur. Il permet de personnaliser la page en fonction du visiteur, de traiter ses messages, d'effectuer des calculs, etc. Il génère une page HTML.

MySQL est un système de gestion de bases de données. Il se charge du stockage des informations (liste des messages, des membres…).

### Ecrire son premier script

- Les pages web contenant du PHP ont l'extension.php.

- Une page PHP est en fait une simple page HTML qui contient des instructions en langage PHP.

- Les instructions PHP sont placées dans une balise ouvrante et fermante : <?php ?>.

- Pour afficher du texte en PHP, on utilise l'instruction echo.

 ### Les variables
 
 - Une variable est une petite information qui reste stockée en mémoire le temps de la génération de la page PHP. Elle a un nom et une valeur.

 - Il existe plusieurs types de variables qui permettent de stocker différents types d'informations : du texte (string), des nombres entiers (int), des nombres décimaux (float), des booléens pour stocker vrai ou faux (bool), etc.

 - En PHP, un nom de variable commence par le symbole dollar :$agepar exemple.

 - La valeur d'une variable peut être affichée avec l'instruction echo.

 - Il est possible de faire des calculs mathématiques entre plusieurs variables : addition, soustraction, multiplication et modulo (le reste d'une division avec le symbole %).
 
 ## Mercredi 8 Avril
 
 J'ai continué les modifications de mon site Codevores en ajoutant un input slider et je l'ai relié en javascript pour afficher le prix choisi par l'utilisateur. 
 
 J'ai participé à la réunion Descodeuses pour réfléchir ensemble sur les modalités de reprise de la formation en le 2 Mai.
 
 
## Jeudi 9 Avril

J'ai continué les modifications de mon site codevores. J'ai reconnecté les boutons hamburger dont j'avais changé les classes. Il faut encore que je réorganise pour afficher correctement le menu. 

J'ai assisté au Meet-up sur le Sketchnoting organisé par les Duchesses (Mathilde. L)  et Flutter. Pierre Tibulle présente le sketch noting ou "facilitation graphique" :

        - associer le dessin et la prise de notes permet une meilleure concentration et plus de connections neuronales; 
        - permet de partager une vision avec un groupe de personnes;
        - Il faut noter toutes les idées principales;
        - Si tu sketchnotes tu es un "facilitateur";
        - Pour Sketchnoter on peut utiliser : 
                - des balises de bases
                - des pictos
                - des personnages
                - des lettres
                - des cadres
                - des connecteurs
                - des ombres
                - deux couleurs maximum en plus du noir
                - il faut organiser sa page. 
                - on peut signer en bas à droite
                - mettre la date de la conférence en haut à gauche. 
         - le site "un picto par jour" propose d'apprendre un pictogramme par jour pour être plus réactif lors du sketchnoting. 
 
## Vendredi 10 Avril

Reprise des cours de PhP

### Les boucles : 

    - Les boucles demandent à PHP de répéter des instructions plusieurs fois.

    - Les deux principaux types de boucles sont :

        - while : à utiliser de préférence lorsqu'on ne sait pas par avance combien de fois la boucle doit être répétée ;

        - for : à utiliser lorsqu'on veut répéter des instructions un nombre précis de fois.

    - L'incrémentation est une technique qui consiste à ajouter 1 à la valeur d'une variable. La décrémentation retire au contraire 1 à cette variable. On trouve souvent des incrémentations au sein de bouclesfor.
    
### Les arrays

Les tableaux (ou arrays) sont des variables représentées sous forme de tableau. Elles peuvent stocker de grandes quantités d'informations.

Chaque ligne d'un tableau possède une clé (qui permet de l'identifier) et une valeur.

Il existe deux types de tableaux :

    - les tableaux numérotés : chaque ligne est identifiée par une clé numérotée. La numérotation commence à partir de 0 ;

    - les tableaux associatifs : chaque ligne est identifiée par une courte chaîne de texte.

Pour parcourir un tableau, on peut utiliser: 
      - la boucle "for" 
      - la boucle "foreach";
      
Il existe de nombreuses fonctions permettant de travailler sur des tableaux et notamment d'effectuer des recherches : 
      - "array_key_exists" pour savoir si un clé est dans un tableau
      - "in_array" pour savoir si une valeur est dans un tableau
      - "array_search" pour chercher la clé qui correspond à une valeur dans le tableau
