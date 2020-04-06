# 10eme semaine de formation

## Lundi 6 Avril

Début du cours Openclassroom PHP. 

J'ai installé MAMP avec Apache et MySQL.
J'ai créé un dossier "Sites" et un dossier "tests" pour mes pages.php.
J'ai créé un premier script avec l'instruction echo.
J'ai configuré Php pour qu'il indique les erreurs en modifiant le fichier php.ini. 
    - Pour savoir où se trouve ce fichier on créé un fichier php contenant le script "<?php phpinfo();". On l'ouvre et on regarde le chemin indiqué à la ligne "Loaded configuration file".
    - On modifie le fichier php.ini en vérifiant deux clés de configuration: 
          - error_reporting = E_ALL
          - display_errors = On
 On enregistre le fichier et on relance MAMP pour que la modification soit prise en compte.

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

 
