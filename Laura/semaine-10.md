# 10eme semaine de formation

## Lundi 6 avril

### PHP (OpenClassroom)

                                                   (Autodidact)





> La Base
*********************

 - Les instructions PHP sont placées dans une balise ouvrante et fermante : <?php ?>
 - Pour afficher du texte en PHP, on utilise l'instructionecho. Ici ça nous affichera la date et l'heure d'aujourd'hui.
 - Ex: 
 
                      <!DOCTYPE html>
                      <html>
                          <head>
                              <meta charset="utf-8" />
                              <title>Ma page web</title>
                          </head>
                          <body>
                              <h1>Ma page web</h1>
                              <p>Aujourd'hui nous sommes le <?php echo date('d/m/Y h:i:s'); ?>.</p>
                          </body>
                      </html>



![OpenClassrooms aperçu](https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql/4238116-
ecrivez-votre-premier-script)
                      
- On peut mettre des commentaires dans les balises php avec // ou /* */ et on doit mettre des "" pour les textes   

          <?php
                echo "J'habite en Chine."; // Cette ligne indique où j'habite

             // La ligne suivante indique mon âge
                echo "J'ai 92 ans.";
            ?>
                                                // on remarquera que après les guillemets il y a un ; aka fin de l'instruction
          
          
> Notes 
*********************

- Pour écrire des guillemets: <?php echo "Cette ligne a été écrite \"uniquement\" en PHP."; ?>

> Là où ça bloque
*********************

* J'ai voulu suivre le tutos de OpenClassroom pour installer MAMP, il s'est avéré que je l'avais déjà installé y a 1 an sans 
  savoir ce que c'était parce que je voulais faire des modifications sur mon blog Wordpress.
* J'attends donc l'aide quelqu'un par partage d'écran et en attendant je continue le cours sur OpenClassroom. (Problème 
  résolu, il suffisait de cliquer sur démarrer... x)
* Maintenant je bloque sur où est mon fichier PHP stocké dans ma machine. C'est bon problème résolu: c'est pcq ils ont donné
  un mauvais exemple! On peut mettre notre fichier roots où on veut et l'appeler comme on veut. Il suffit juste de Stop 
  servers puis de Start servers et normalement ils t'affichent une page direct de MAMP et il suffira de changer l'adresse:
  http://localhost:8888/test/ le test est le nom de mon dossier que j'ai créer dans le dossier où j'ai mis mon PHP. 
* Configuration PHP pour voir les erreurs : raccourci clavier avec cmd + F en même temps et check "display_errors = On" 
  & "error_reporting = E_ALL" souvent l'ordi le trouve 4 fois et il faut donc tous les check avant de trouver le bon (si ça 
  commence par ; au début de la ligne c'est que c'est pas le bon = commentaire), lorsqu'on rafraichit la page de localhost:
  
  ![OpenClassrooms aperçu] (https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql/4238821-configurez-php-pour-visualiser-les-erreurs)

 
 
> Conclusion
*********************

J'ai pris plus de temps à savoir comment installer MAMP et à savoir comment relier mon fichier roots à PHP qu'à apprendre,
c'est dommage parce que maintenant je sais comment écrire des balises etc mais je ne peux pas vraiment passer à l'étape 
application, donc j'emmagasine les règles pour l'instant x) 
