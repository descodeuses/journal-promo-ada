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

- Pour écrire des guillemets: 

              <?php echo "Cette ligne a été écrite \"uniquement\" en PHP."; ?>


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
les joies du confinement x) mais ça avance petit à petit. J'ai décidé de faire un chapitre par jour (i.e. donc 1 chapitre
par jour pour toute la semaine) 




## Mardi 7 avril

### PHP (OpenClassroom)

                                                   (Autodidact)





> Les variables 
*********************


  - Les variables sont capables de stocker **différents types d'informations. On parle de types de données.** 
  - Les chaînes de caractères **(string)** : le nom informatique qu'on donne au texte (aka chaîne de caractères). 
  - Les nombres entiers **(int)** : ce sont les nombres du type 1, -1 etc ...
    Ex :
    
                 <?php
                      $age_du_visiteur = 17;
                  ?>
                  
  - Les nombres décimaux **(float)** : nombres à virgule, comme 14,738. Attention, les nombres doivent être écrits 
    avec un point au lieu de la virgule (c'est la notation anglaise).Exemple :14.738.
    Ex :
    
                  <?php
                        $poids = 57.3;
                    ?>
                    
  - Les booléens **(bool)** : type très important qui permet de stocker soit vrai soit faux. (aka retenir si une information 
    est vraie ou fausse. On les utilise très fréquemment. On écrittruepour vrai, etfalsepour faux.
    Ex :
    
                  <?php
                        $je_suis_un_zero = true;
                        $je_suis_bon_en_php = false;
                   ?>
                   
  - Rien **(NULL)** : qu'une variable ne contient rien.  Ce n'est pas vraiment un type de données, mais plutôt l'absence de type.
  
    Ex : 
    
                    <?php
                        $pas_de_valeur = NULL;
                    ?>
  
  
  - **Affecter une valeur à une variable**
  1. D'abord, on écrit le symbole **« dollar » ($)** : il précède toujours le nom d'une variable. C'est comme un signe de 
  reconnaissance si vous préférez : ça permet de dire à PHP « J'utilise une variable ». Vous reconnaîtrez toujours qu'il y a 
  une variable par la présence du symbole « dollar » ($). Notes: le nom de la variable avec _ pour chaque espace du nom.
  2. Ensuite, il y a le signe « égal » ** = ** 
  3. À la suite, il y a la **valeur de la variable**, ici 17.
  4. Enfin, il y a l'incontournable point-virgule **(;)** qui permet de terminer l'instruction
  
  
      Ex: 
      
                                <?php
                                  $age_du_visiteur = 17; // La variable est créée et vaut 17
                                  $age_du_visiteur = 23; // La variable est modifiée et vaut 23
                                  $age_du_visiteur = 55; // La variable est modifiée et vaut 55
                                ?>
                                
  
  - **Afficher et concaténer des variables**
    Avec echo 
      Ex: 
      
                                <?php
                                    $age_du_visiteur = 17;
                                    echo $age_du_visiteur;
                                 ?>
    La concaténation
      Ex : 
      
          // pour écrire que le visiteur a 17 ans 
                                <?php
                                    $age_du_visiteur = 17;
                                    echo "Le visiteur a ";
                                    echo $age_du_visiteur;
                                    echo " ans";
                                 ?>
                                 
           // la même chose mais concaténer avec guillemets double 
                                  <?php
                                      $age_du_visiteur = 17;
                                      echo "Le visiteur a $age_du_visiteur ans";
                                   ?>
          
          // la même chose mais concaténer avec guillemets simple
          
        <?php                                                             <?php
          $age_du_visiteur = 17;                                            $age_du_visiteur = 17;
          echo 'Le visiteur a $age_du_visiteur ans'; // Ne marche pas       echo 'Le visiteur a ' . $age_du_visiteur . ' ans';
         ?>                                                                ?>
  
  
  - **Faire des calculs simples**
      Ex : 
      
              <?php
                $nombre = 10;
                $resultat = ($nombre + 5) * $nombre; // $resultat prend la valeur 150
               ?>
      
      Le modulo: le reste de la division entière. Par exemple, 6 / 3 = 2 et il n'y a pas de reste. En revanche, 7 / 3 = 2 (car 
      le nombre 3 « rentre » 2 fois dans le nombre 7) et il reste 1. Le modulo permet justement de récupérer ce « reste ». 
      Pour faire un calcul avec un modulo, on utilise le symbole%. Ex : 
               
               <?php
                  $nombre = 10 % 5; // $nombre prend la valeur 0 car la division tombe juste
                  $nombre = 10 % 3; // $nombre prend la valeur 1 car il reste 1
                ?>
  




> Les conditions
*********************


1. Les symboles à connaître : il va d'abord falloir retenir quelques symboles qui permettent de faire des comparaisons. Soyez 
   attentifs car ils vous seront utiles pour les conditions.

    == sert à tester l'égalité, à dire « Si c'est égal à… ». Dans les conditions, on utilisera toujours le double égal ==
    Tout le reste comme d'hab = <= >= < > et != veut dire, est différent de
    

2. La structure if… else : ressemble beaucoup à JavaScript mais en moins compliqué ( ou peut-être pcq on l'a déjà vu).
   
   Ex :
   
           <?php
                $autorisation_entrer = "Oui";

                if ($autorisation_entrer == "Oui") // SI on a l'autorisation d'entrer
                {
                    // instructions à exécuter quand on est autorisé à entrer
                }
                elseif ($autorisation_entrer == "Non") // SINON SI on n'a pas l'autorisation d'entrer
                {
                    // instructions à exécuter quand on n'est pas autorisé à entrer
                }
                else // SINON (la variable ne contient ni Oui ni Non, on ne peut pas agir)
                {
                    echo "Euh, je ne connais pas ton âge, tu peux me le rappeler s'il te plaît ?";
                }
            ?>
            
3. Si ca avait été des booléens, pas obligés d'ajouter le== true, PHP comprend très bien ce que vous avez voulu dire :
     
              <?php
                    $autorisation_entrer = true;

                    if ($autorisation_entrer)
                    {
                        echo "Bienvenue petit nouveau. :o)";
                    }
                    else
                    {
                        echo "T'as pas le droit d'entrer !";
                    }
               ?>

     
     Il y a un symbole qui permet de vérifier si la variable vautfalse : le point d'exclamation (!). On écrit :

              <?php
                    $autorisation_entrer = true;

                    if (! $autorisation_entrer)
                    {

                    }
              ?>
              
    C'est une autre façon de faire. Si vous préférez mettreif ($autorisation_entrer == false)c'est tout aussi bien, mais la   
    méthode « courte » est plus lisible.

4. Les conditions multiples

    AND = Et = &&, ex:
    
    
        <?php
            $age = 8;
            $langue = "anglais";


            if ($age <= 12 AND $langue == "français")
            {
                echo "Bienvenue sur mon site !";
            }
            elseif ($age <= 12 AND $langue == "anglais")
            {
                echo "Welcome to my website!";
            }
         ?>
    
    OR = Ou = ||, ex: 
    
          <?php
                $pays = "France";

                if ($pays == "France" OR $pays == "Belgique")
                {
                    echo "Bienvenue sur notre site !";
                }
                else
                {
                    echo "Désolés, notre service n'est pas encore disponible dans votre pays !";
                }
           ?>

5. l'astuce bonus, remplacer echo par des accolades, ex: 

          <?php
                $variable = 23;

                if ($variable == 23)
                {
                    echo '<strong>Bravo !</strong> Vous avez trouvé le nombre mystère !';
                }
          ?>
          
          Les deux veulent dire la même chose sauf qu'avec les accolades plus de problemes de guillemets mais faut refermer.
          
          <?php
                $variable = 23;

                if ($variable == 23)
                {
                ?>
                <strong>Bravo !</strong> Vous avez trouvé le nombre mystère !
                <?php
                }
            ?>

6. Dernier type de condition: switch, ex: 

- Pour éviter ce genre de lourdeur 

            <?php
                $note = 16;

                if ($note == 0)
                {
                    echo "Tu es vraiment un gros nul !!!";
                }

                elseif ($note == 5)
                {
                    echo "Tu es très mauvais";
                }

                elseif ($note == 7)
                {
                    echo "Tu es mauvais";
                }

                elseif ($note == 10)
                {
                    echo "Tu as pile poil la moyenne, c'est un peu juste…";
                }

                elseif ($note == 12)
                {
                    echo "Tu es assez bon";
                }

                elseif ($note == 16)
                {
                    echo "Tu te débrouilles très bien !";
                }

                elseif ($note == 20)
                {
                    echo "Excellent travail, c'est parfait !";
                }

                else
                {
                    echo "Désolé, je n'ai pas de message à afficher pour cette note";
                }
            ?>
    
- On écrirait comme ça:

        <?php
        $note = 10;

        switch ($note) // on indique sur quelle variable on travaille
        { 
            case 0: // dans le cas où $note vaut 0
                echo "Tu es vraiment un gros nul !!!";
            break;

            case 5: // dans le cas où $note vaut 5
                echo "Tu es très mauvais";
            break;

            case 7: // dans le cas où $note vaut 7
                echo "Tu es mauvais";
            break;

            case 10: // etc. etc.
                echo "Tu as pile poil la moyenne, c'est un peu juste…";
            break;

            case 12:
                echo "Tu es assez bon";
            break;

            case 16:
                echo "Tu te débrouilles très bien !";
            break;

            case 20:
                echo "Excellent travail, c'est parfait !";
            break;

            default:
                echo "Désolé, je n'ai pas de message à afficher pour cette note";
        }
        ?>
        
Avantage : on n'a plus besoin de mettre le double égal ! Défaut : ça ne marche pas avec les autres symboles (< > <= >= !=). En 
clair, leswitchne peut tester que l'égalité.
Notes: En pratique, on utilise très souvent unbreakcar sinon, PHP lit des instructions qui suivent et qui ne conviennent pas.
Pour une condition simple et courte, on utilise leif, et quand on a une série de conditions à analyser, on préfère 
utiliserswitchpour rendre le code plus clair.

7. Les ternaires : des conditions condensées (pas très utiliser et difficile à lire mais au cas où)

- Un ternaire est une condition condensée qui fait deux choses sur une seule ligne :
    on teste la valeur d'une variable dans une condition ;
    on affecte une valeur à une variable selon que la condition est vraie ou non.
- Ex: 

Au lieu d'écrire comme ça:         On écrit comme ça:      
    
    <?php                          <?php
        $age = 24;                      $age = 24;

        if ($age >= 18)                 $majeur = ($age >= 18) ? true : false;
        {                             ?>
          $majeur = true;
        }
        else
        {
          $majeur = false;
        }
    ?>




> Les boucles 
*********************



Avec **While**, ex: 

            <?php
                $nombre_de_lignes = 1;  // initianilisation du nombre de ligne et commence à 1 

                while ($nombre_de_lignes <= 100)
                {
                    echo 'Ceci est la ligne n°' . $nombre_de_lignes . '<br />';
                    $nombre_de_lignes++; // ça c'est pour la réitération du nombre de ligne +1 a chaque fois jusqu'a 100 donc
                }
             ?>
             
Avec **for**, ex: 

            <?php
                for ($nombre_de_lignes = 1; $nombre_de_lignes <= 100; $nombre_de_lignes++) // initialtn; condition; incrémnt
                {
                    echo 'Ceci est la ligne n°' . $nombre_de_lignes . '<br />';
                }
            ?>


Notes: Si vous hésitez entre les deux, il suffit simplement de vous poser la question suivante : « Est-ce que je sais d'avance 
combien de fois je veux que mes instructions soient répétées ? ». Si la réponse est oui, alors la boucleforest tout indiquée. 
Sinon, alors il vaut mieux utiliser la bouclewhile.





> Les tableaux 
*********************

1. Les tableaux numérotés: c'est-à-dire que chaque case est identifiée par un numéro. Ce numéro est appelé clé. Ex:
    
        <?php
            // La fonction array permet de créer un array
            $prenoms = array ('François', 'Michel', 'Nicole', 'Véronique', 'Benoît');
         ?>

         ou peut s'écrire comme cela                  et voilà comment on écrirait pour afficher la valeur du tableau:

         <?php                                        <?php
            $prenoms[0] = 'François';                     echo $prenoms[1];
            $prenoms[1] = 'Michel';                    ?>
            $prenoms[2] = 'Nicole';
          ?>
          

2. Les tableaux associatifs: au lieu de numéroter les cases, on va les étiqueter en leur donnant à chacune un nom diff. Ex:

        <?php                                         ou      <?php
            // On crée notre array $coordonnees                   $coordonnees['prenom'] = 'François';
            $coordonnees = array (                                $coordonnees['nom'] = 'Dupont';
                'prenom' => 'François',                           $coordonnees['adresse'] = '3 Rue du Paradis';
                'nom' => 'Dupont',                                $coordonnees['ville'] = 'Marseille';
                'adresse' => '3 Rue du Paradis',                 ?>
                'ville' => 'Marseille');
          ?>                                          et pour l'afficher:
          
                                                        <?php
                                                             echo $coordonnees['ville'];
                                                         ?>

3. Parcourir un tableau avec:

- la bouclefor ;

      <?php
          // On crée notre array $prenoms
          $prenoms = array ('François', 'Michel', 'Nicole', 'Véronique', 'Benoît');

          // Puis on fait une boucle pour tout afficher :
          for ($numero = 0; $numero < 5; $numero++)
          {
              echo $prenoms[$numero] . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
          }
       ?>

- la boucleforeach ;

        <?php
            $prenoms = array ('François', 'Michel', 'Nicole', 'Véronique', 'Benoît');

            foreach($prenoms as $element)
            {
                echo $element . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
            }
         ?>
         
         et marche aussi pour les tableaux associatifs 
         
         <?php
            $coordonnees = array (
                'prenom' => 'François',
                'nom' => 'Dupont',
                'adresse' => '3 Rue du Paradis',
                'ville' => 'Marseille');

            foreach($coordonnees as $cle => $element)
            {
                echo '[' . $cle . '] vaut ' . $element . '<br />';
            }
          ?>

- la fonctionprint_r(utilisée principalement pour le débogage): si vous n'avez pas besoin d'une mise en forme spéciale et que 
vous voulez juste savoir ce que contient l'array. C'est une sorte deechospécialisé dans les arrays.

        <?php
            $coordonnees = array (
                'prenom' => 'François',
                'nom' => 'Dupont',
                'adresse' => '3 Rue du Paradis',
                'ville' => 'Marseille');

            echo '<pre>';
            print_r($coordonnees);
            echo '</pre>';
         ?>
  
  
  
 Notes: elle ne renvoie pas de code HTML comme<br />pour les retours à la ligne. Pour bien les voir, il faut donc utiliser la 
 balise HTML<pre> qui nous permet d'avoir un affichage plus correct.



4. Rechercher dans un tableau:

- **array_key_exists**: pour vérifier si une clé existe dans l'array ; ex:

  En général:  <?php array_key_exists('cle', $array); ?>
    
               <?php                                                Et affichera sur la page :
                    $coordonnees = array (                          La clé "nom" se trouve dans les coordonnées!
                        'prenom' => 'François',
                        'nom' => 'Dupont',
                        'adresse' => '3 Rue du Paradis',
                        'ville' => 'Marseille');

                    if (array_key_exists('nom', $coordonnees))
                    {
                        echo 'La clé "nom" se trouve dans les coordonnées !';
                    }

                    if (array_key_exists('pays', $coordonnees))
                    {
                        echo 'La clé "pays" se trouve dans les coordonnées !';
                    }

                ?>

- **in_array** : pour vérifier si une valeur existe dans l'array ;mais cette fois on recherche dans les valeurs.in_array renvoie 
true si la valeur se trouve dans l'array,falsesi elle ne s'y trouve pas.

    <?php
        $fruits = array ('Banane', 'Pomme', 'Poire', 'Cerise', 'Fraise', 'Framboise');

        if (in_array('Myrtille', $fruits))
        {
            echo 'La valeur "Myrtille" se trouve dans les fruits !';
        }

        if (in_array('Cerise', $fruits))
        {
            echo 'La valeur "Cerise" se trouve dans les fruits !';
        }
     ?>
     
     Et ca affichera sur la page web : La valeur "Cerise" se trouve dans les fruits!

- **array_search** : pour récupérer la clé d'une valeur dans l'array.

      <?php
          $fruits = array ('Banane', 'Pomme', 'Poire', 'Cerise', 'Fraise', 'Framboise');

          $position = array_search('Fraise', $fruits);
          echo '"Fraise" se trouve en position ' . $position . '<br />';

          $position = array_search('Banane', $fruits);
          echo '"Banane" se trouve en position ' . $position;
      ?>
      
      Et ca affichera sur la page web :  "Fraise" se trouve en position 4 
                                         "Banane" se trouve en position 0





> Les fonctions 
*********************

Une fonction est une série d'instructions qui effectue des actions et qui retourne une valeur.
1. comment **appelle**-t-on une fonction ? Par son nom. Ex : calculCube();

2. mettre **paramètre** (un nombre, une chaîne de caractères, un booléen...), il faut l'écrire entre les () et
si plusieurs paramétres à séparer avec des , Ex: fonctionImaginaire(17, 'Vert', true, 41.7);
      
3. **Récupérer** la valeur de retour de la fonction dans une variable, Ex: $volume = calculCube(4);

4. Les fonctions prêtes à l'emploi de PHP: c'est en partie là que réside la force de PHP : ses fonctions sont vraiment 
excellentes car elles couvrent la quasi-totalité de nos besoins avec ce site: https://www.php.net/manual/fr/funcref.php ex:

    strlen: longueur d'une chaîne
    <?php
        $phrase = 'Bonjour tout le monde ! Je suis une phrase !';
        $longueur = strlen($phrase);


        echo 'La phrase ci-dessous comporte ' . $longueur . ' caractères :<br />' . $phrase;
    ?>
    
    str_replace: rechercher et remplacer
    <?php
        $ma_variable = str_replace('b', 'p', 'bim bam boum');

        echo $ma_variable;
     ?>
    
    Récupérer la date
    
    <?php
      // Enregistrons les informations de date dans des variables

      $jour = date('d');
      $mois = date('m');
      $annee = date('Y');

      $heure = date('H');
      $minute = date('i');

      // Maintenant on peut afficher ce qu'on a recueilli
      echo 'Bonjour ! Nous sommes le ' . $jour . '/' . $mois . '/' . $annee . 'et il est ' . $heure. ' h ' . $minute;
    ?>




> Les erreurs les plus courantes
*********************



**Parse error** ;
La plus basique, ex: Parse error: parse error in fichier.php on line 15
Souvent à cause de: ; - "" - } - trompé de concaténation

**Undefined function** ;
La fonction inconnue, ex: Fatal Error: Call to undefined function: fonction_inconnue() in fichier.php on line 27
soit la fonction n'existe vraiment pas. (i.e. faute de frappe ou orthographe)
soit la fonction existe vraiment, mais PHP ne la reconnaît pas : une extension de PHP que vous n'avez pas activée. 
soit vous essayiez d'utiliser une fonction qui n'est pas disponible dans la version de PHP que vous avez

**Wrong parameter count**.
Si vous utilisez mal une fonction, ex: Warning: Wrong parameter count for fonction() in fichier.php on line 112
Cela signifie que vous avez oublié des paramètres pour la fonction, ou même que vous en avez trop mis.

Un peu moins courantes **Headers already sent by…**
ex: Cannot modify header information - headers already sent by ...
Ce que vous devez retenir, c'est que chacune de ces fonctions doit être utilisée au tout début de votre code PHP. Il ne faut 
RIEN mettre avant, sinon ça provoquera l'erreur « Headers already sent by… »

**Maximum execution time exceeded**



> Inclure des portions de page
*********************

Si on a envie de mettre le header, menu et footer sur differentes pages et ne pas avoir a changer toutes les pages à 
chaque fois qu'on change quelque chose dessus:
1. on converti toutes nos pages en .php
2. on copie colle la partie sur une nouvelle page en .php 
3. à la place de la où on voudrait mettre la portion de page à dupliquer on met ce code :

       <?php include("menus.php"); ?>

4. et voilà on répète l'action pour les autres (footer et header) et lorsqu'on veut changer quelque chose on le change direct
   dans menu.php et les changements se feront d'eux-mêmes sur les autres pages. 
