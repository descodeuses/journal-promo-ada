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







## Mercredi 8 avril

### PHP (OpenClassroom)

                                                   (Autodidact)





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
 balise HTML pre qui nous permet d'avoir un affichage plus correct.



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



> Coder proprement
*********************

Les standards à suivre en ce qui concerne l'écriture de code PHP. Ce consortium s'appelle le FIG (Framework Interop Group) et 
a surtout été créé pour faire en sorte que l'ensemble des frameworks PHP respectent des règles communes. Avec les liens :

- https://www.php-fig.org/psr/
- https://www.php-fig.org/psr/psr-1/ : la base
- https://www.php-fig.org/psr/psr-2/ : le style







## Jeudi 9 avril

### PHP (OpenClassroom)

                                                   (Autodidact)





> Envoyer & récupérer des paramètres en PHP dans l'URL 
*********************

Tu créer 2 pages .php, dans la première, tu marques : 
  
      <a href="bonjour.php?nom=THAY&amp;prenom=Laura">Dis-moi bonjour !</a>

Dans la 2ème que tu as renommé bonjour.php, tu écris : 

      <p>Bonjour <?php echo $_GET['prenom'] . ' ' . $_GET['nom']; ?> !</p>






> Ne faites jamais confiance aux données reçues !
*********************

Issets pour confirmer que la réponse est valable, ici on teste si les variables$_GET['prenom']et$_GET['nom']existent.:

      <?php
          if (isset($_GET['prenom']) AND isset($_GET['nom'])) // On a le nom et le prénom
          {
            echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !';
          }
          else // si il manque des paramètres, on avertit le visiteur
          {
            echo 'Il faut renseigner un nom et un prénom !';
          }
      ?>


Contrôler la valeur des paramètres si on modifie dans l'URL : bonjour.php?nom=Thay&prenom=Laura&repeter=8

1. On teste si le paramètre repeter existe lui aussi (avec isset($_GET['repeter'])). Si tous les paramètres sont bien là, on   
   fait une boucle (for mais while marche aussi). La boucle incrémente une petite variable $i pour répéter le message de 
   bienvenue le nombre de fois indiqué.


        <?php
            if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter']))
            {
              for ($i = 0 ; $i < $_GET['repeter'] ; $i++)
              {
                echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !<br />';
              }
            }
            else
            {
               echo 'Il faut renseigner un nom, un prénom et un nombre de répétitions !';
            }
        ?>
        
2. Pour éviter les cas suivants:
   Le cas où le nombre qu'on vous envoie n'est pas une valeur raisonnable (répéter *100) ni logique (texte à la place de chiffre)
   Il faut donc vérifier que repeter contient bien un nombre & est compris dans un intervalle raisonnable (entre 1 et 100)
   = **transtypage**
   
         <?php
             $_GET['repeter'] = (int) $_GET['repeter'];
          ?>
          
          <?php
                if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter']))
                        {
                          // 1 : On force la conversion en nombre entier
                          $_GET['repeter'] = (int) $_GET['repeter'];

                          // 2 : Le nombre doit être compris entre 1 et 100
                          if ($_GET['repeter'] >= 1 AND $_GET['repeter'] <= 100) 
                          {	
                            for ($i = 0 ; $i < $_GET['repeter'] ; $i++)
                            {
                              echo 'Bonjour ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !<br />';
                            }
                          }
                        }
                else
                {
                   echo 'Il faut renseigner un nom, un prénom et un nombre de répétitions !';
                }
           ?>






> Transmettez des données avec les formulaires
*********************
Dans la balise form on applique:

- la méthode (method):
Au lieu de GET on prendra POST (pas de transistions de données dans l'url et possibilité +256 caractères + puissant+ commun)
Ex: method="POST"

- la cible (action):
Sert à définir la page appelée par le formulaire
Ex: action="cible.php"


Dans la page du formulaire:                               Et l'autre page cible.php:

      <form action="cible.php" method="post">               <p>Je sais comment tu t'appelles, hé hé.               
        <p>                                                  Tu t'appelles <?php echo $_POST['prenom']; ?> !</p>
            <input type="text" name="prenom" />             <p>Si tu veux changer de prénom, <a href="formulaire.php">
            <input type="submit" value="Valider" />           clique ici</a> pour revenir à la page formulaire.php.</p>
        </p>                                                     pour revenir à la page formulaire.php.
        <p>Bonjour !</p>                                     </p>


Rappel de HTML : le champ<input type="submit" />permet de créer le bouton de validation du formulaire qui commande l'envoi des 
données, et donc la redirection du visiteur vers la page cible.

Si on a une liste déroulante :

        <select name="choix">                                  $_POST['choix']
            <option value="choix1">Choix 1</option>
            <option value="choix2">Choix 2</option>
            <option value="choix3">Choix 3</option>
            <option value="choix4">Choix 4</option>
        </select>

Si on a des cases à cocher: 

        <input type="checkbox" name="case" id="case" /> <label for="case">Ma case à cocher</label>
        
        isset($_POST['case'])  //pour vérifier si la case a cocher est validé ou non

Label n'est pas obligatoire mais permet d'associer le libellé à la case à cocher qui a le mêmeidque son attributfor, ce qui 
permet de cliquer sur le libellé pour cocher la case. On y gagne donc en ergonomie.
Et si tu veux que la case sois coché par défaut: 

        <input type="checkbox" name="case" checked="checked" />

Si on a des cases à cocher multiple: 

        Aimez-vous les frites ?
        <input type="radio" name="frites" value="oui" id="oui" checked="checked" /> <label for="oui">Oui</label>
        <input type="radio" name="frites" value="non" id="non" /> <label for="non">Non</label>

Dans la page cible, une variable$_POST['frites']sera créée. Elle aura la valeur du bouton d'option choisi par le visiteur, 
issue de l'attribut value. Si on aime les frites, alors on aura$_POST['frites'] = 'oui'// bien renseigner value!

Pour éviter les failles XSS: htmlspecialchars
    
        <p>Je sais comment tu t'appelles, hé hé. Tu t'appelles <?php echo htmlspecialchars($_POST['prenom']); ?> !</p>

Il faut penser à utiliser cette fonction sur tous les textes envoyés par l'utilisateur qui sont susceptibles d'être affichés 
sur une page web. Sur un forum par exemple, il faut penser à échapper les messages postés par vos membres, mais aussi leurs 
pseudos (ils peuvent s'amuser à y mettre du HTML !) ainsi que leurs signatures. Bref, tout ce qui est affiché et qui vient à 
la base d'un visiteur, vous devez penser à le protéger avechtmlspecialchars.






L'envoi de fichiers (++ difficile)
********************************


L'attribut enctype="multipart/form-data": le navigateur du visiteur sait qu'il s'apprête à envoyer des fichiers

      <form action="cible_envoi.php" method="post" enctype="multipart/form-data">
              <p>
                      Formulaire d'envoi de fichier :<br />
                      <input type="file" name="monfichier" /><br />     //input type="file" permet envoyer un fichier
                      <input type="submit" value="Envoyer le fichier" />
              </p>
      </form>
      
Maintenant que le fichier est envoyé au serveur PHP il est stocké momentannement et c'est à nous de déterminer si on le 
valide ou pas. (si c'est la bonne taille, type de document) L'on validera grâce à move_uploaded_file  ,comment savoir if ok?


                                               (récapitulatif)

Variable

                Signification

$_FILES['monfichier']['name']

                Contient le nom du fichier envoyé par le visiteur.

$_FILES['monfichier']['type']

                Indique le type du fichier envoyé. Si c'est une image gif par exemple, le type seraimage/gif.

$_FILES['monfichier']['size']

                Indique la taille du fichier envoyé. Attention : 
                cette taille est en octets. Il faut environ 1 000 octets 
                pour faire 1 Ko, et 1 000 000 d'octets pour faire 1 Mo.
                Attention : la taille de l'envoi est limitée par PHP. 
                Par défaut, impossible d'uploader des fichiers de plus de 8 Mo.

$_FILES['monfichier']['tmp_name']

                Juste après l'envoi, le fichier est placé dans un répertoire temporaire sur le
                serveur en attendant que votre script PHP décide si oui ou non il accepte de
                le stocker pour de bon. Cette variable contient l'emplacement temporaire 
                du fichier (c'est PHP qui gère ça).

$_FILES['monfichier']['error']

                Contient un code d'erreur permettant de savoir si l'envoi s'est bien effectué ou s'il
                y a eu un problème et si oui, lequel. La variable vaut 0 s'il n'y a pas eu d'erreur.

1.Vérifier tout d'abord si le visiteur a bien envoyé un fichier (en testant la variable$_FILES['monfichier']avecisset()) et 
s'il n'y a pas eu d'erreur d'envoi (grâce à$_FILES['monfichier']['error']).

                <?php
                    // Testons si le fichier a bien été envoyé et s'il n'y a pas d'erreur
                    if (isset($_FILES['monfichier']) AND $_FILES['monfichier']['error'] == 0)
                    {

                    }
                 ?>

2.Vérifier si la taille du fichier ne dépasse pas 1 Mo par exemple (environ 1 000 000 d'octets) grâce à$_FILES['monfichier']
['size'].

                  <?php
                      // Testons si le fichier a bien été envoyé et s'il n'y a pas d'erreur
                      if (isset($_FILES['monfichier']) AND $_FILES['monfichier']['error'] == 0)
                      {
                              // Testons si le fichier n'est pas trop gros
                              if ($_FILES['monfichier']['size'] <= 1000000)
                              {

                              }
                      }
                  ?>

3.Vérifier si l'extension du fichier est autorisée (il faut interdire à tout prix que les gens puissent envoyer des fichiers 
PHP, sinon ils pourraient exécuter des scripts sur votre serveur). Dans notre cas, nous autoriserons seulement les images 
(fichiers .png, .jpg, .jpeg et .gif).

                  <?php
                      $infosfichier = pathinfo($_FILES['monfichier']['name']);
                      $extension_upload = $infosfichier['extension'];
                  ?>


Ce qui nous donne au total: 

                  <?php
                  // Testons si le fichier a bien été envoyé et s'il n'y a pas d'erreur
                  if (isset($_FILES['monfichier']) AND $_FILES['monfichier']['error'] == 0)
                  {
                          // Testons si le fichier n'est pas trop gros
                          if ($_FILES['monfichier']['size'] <= 1000000)
                          {
                                  // Testons si l'extension est autorisée
                                  $infosfichier = pathinfo($_FILES['monfichier']['name']);
                                  $extension_upload = $infosfichier['extension'];
                                  $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
                                  if (in_array($extension_upload, $extensions_autorisees))
                                  {

                                  }
                          }
                  }
                  ?>
                  
                  
4. Valider l'upload du fichier
Si tout est bon, on accepte le fichier en appelant move_uploaded_file().
Cette fonction prend deux paramètres :

  le nom temporaire du fichier (on l'a avec$_FILES['monfichier']['tmp_name']) ;
  le chemin qui est le nom sous lequel sera stocké le fichier de façon définitive. On peut utiliser le nom d'origine du 
  fichier$_FILES['monfichier']['name']ou générer un nom au hasard.

Je propose de placer le fichier dans un sous-dossier « uploads ».
On gardera le même nom de fichier que celui d'origine. Comme$_FILES['monfichier']['name']contient le chemin entier vers le 
fichier d'origine (C:\dossier\fichier.pngpar exemple), il nous faudra extraire le nom du fichier. On peut utiliser pour cela 
la fonction basename qui renverra juste « fichier.png ».

        <?php
        // Testons si le fichier a bien été envoyé et s'il n'y a pas d'erreur
        if (isset($_FILES['monfichier']) AND $_FILES['monfichier']['error'] == 0)
        {
                // Testons si le fichier n'est pas trop gros
                if ($_FILES['monfichier']['size'] <= 1000000)
                {
                        // Testons si l'extension est autorisée
                        $infosfichier = pathinfo($_FILES['monfichier']['name']);
                        $extension_upload = $infosfichier['extension'];
                        $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
                        if (in_array($extension_upload, $extensions_autorisees))
                        {
                                // On peut valider le fichier et le stocker définitivement
                                move_uploaded_file($_FILES['monfichier']['tmp_name'], 'uploads/' . basename($_FILES['monfichier']['name']));
                                echo "L'envoi a bien été effectué !";
                        }
                }
        }
        ?>







## Vendredi 10 avril

### PHP (OpenClassroom)

                                                   (Autodidact)





> TP  
*********************

**Objectif**:
- afficher du texte avec echo ;
- utiliser les variables (affectation, affichage…) ;
- transmettre des variables via une zone de texte d'un formulaire ;
- utiliser des conditions simples (if,else).

**Scénario** : 
Mettre en ligne une page web pour donner des informations confidentielles à certaines personnes. Cependant, pour limiter 
l'accès à cette page, il faudra connaître un mot de passe.Dans notre cas, les données confidentielles seront les codes 
d'accès au serveur central de la NASA (soyons fous !). Le mot de passe pour pouvoir visualiser les codes d'accès sera 
kangourou. Sauriez-vous réaliser une page qui n'affiche ces codes secrets que si l'on a rentré le bon mot de passe ?

**Etapes**:
Créer 2 pages .Php, l'une pour le client qui entre le mdp et l'autre pour recevoir l'input que le client a mis.

Dans le 1er: 

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Page protégée par mot de passe</title>
        </head>
        <body>
            <p>Veuillez entrer le mot de passe pour obtenir les codes d'accès au serveur central de la NASA :</p>
            <form action="secret.php" method="post">
                <p>
                <input type="password" name="mot_de_passe" />
                <input type="submit" value="Valider" />
                </p>
            </form>
            <p>Cette page est réservée au personnel de la NASA. Si vous ne travaillez pas à la NASA, inutile d'insister vous ne trouverez jamais le mot de passe ! ;-)</p>
        </body>
    </html>

Dans le 2eme:

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Codes d'accès au serveur central de la NASA</title>
        </head>
        <body>

            <?php
        if (isset($_POST['mot_de_passe']) AND $_POST['mot_de_passe'] ==  "kangourou") // Si le mot de passe est bon
        {
        // On affiche les codes
        ?>
            <h1>Voici les codes d'accès :</h1>
            <p><strong>CRD5-GTFT-CK65-JOPM-V29N-24G1-HH28-LLFV</strong></p>   

            <p>
            Cette page est réservée au personnel de la NASA. N'oubliez pas de la visiter régulièrement car les codes d'accès sont changés toutes les semaines.<br />
            La NASA vous remercie de votre visite.
            </p>
            <?php
        }
        else // Sinon, on affiche un message d'erreur
        {
            echo '<p>Mot de passe incorrect</p>';
        }
        ?>


        </body>
    </html>
    
    
Possibilité de réaliser ce TP en **une seule page**:
- sur la pageformulaire.php, s'appelle lui-même. En clair, l'attributactiondu formulaire seraitaction="formulaire.php".
- Il faut construire le code de votre pageformulaire.phpen deux grandes parties :
      si aucun mot de passe n'a été envoyé (ou s'il est faux) : afficher le formulaire ;
      si le mot de passe a été envoyé et qu'il est bon : afficher les codes secrets.

      <?php

          // Le mot de passe n'a pas été envoyé ou n'est pas bon
          if (!isset($_POST['mot_de_passe']) OR $_POST['mot_de_passe'] != "kangourou")
          {
            // Afficher le formulaire de saisie du mot de passe
          }
          // Le mot de passe a été envoyé et il est bon
          else
          {
            // Afficher les codes secrets
          }

       ?>




> Variables superglobales 
*********************



Des variables un peu particulières pour trois raisons :
1. écrites en majuscules et commencent toutes, à une exception près, par un underscore ex: (_).$_GETet$_POST;
2. ce sont des array car elles contiennent généralement de nombreuses informations ;
3. ces variables sont automatiquement créées par PHP à chaque fois qu'une page est chargée. Elles existent donc sur toutes 
les pages et sont accessibles partout : au milieu de votre code, au début, dans les fonctions, etc.



Afficher le contenu d'une superglobal, on utilise print_r pcq c'est une array: 

        <pre>
            <?php
            print_r($_GET);
        ?>



Les principales variables superglobales existantes:

**$_SERVER** : ce sont des valeurs renvoyées par le serveur. Elles sont nombreuses et quelques-unes d'entre elles peuvent 
               nous être d'une grande utilité. Je vous propose de retenir au moins$_SERVER['REMOTE_ADDR']. Elle nous donne 
               l'adresse IP du client qui a demandé à voir la page, ce qui peut être utile pour l'identifier.

**$_ENV** : ce sont des variables d'environnement toujours données par le serveur. C'est le plus souvent sous des serveurs 
            Linux que l'on retrouve des informations dans cette superglobale. Généralement, on ne trouvera rien de bien utile 
            là-dedans pour notre site web.

**$_SESSION** : on y retrouve les variables de session. Ce sont des variables qui restent stockées sur le serveur le temps de 
                la présence d'un visiteur. Nous allons apprendre à nous en servir dans ce chapitre.

**$_COOKIE** : contient les valeurs des cookies enregistrés sur l'ordinateur du visiteur. Cela nous permet de stocker des 
               informations sur l'ordinateur du visiteur pendant plusieurs mois, pour se souvenir de son nom par exemple.

**$_GET** : vous la connaissez, elle contient les données envoyées en paramètres dans l'URL.

**$_POST** : de même, c'est une variable que vous connaissez et qui contient les informations qui viennent d'être envoyées 
            par un formulaire.

**$_FILES** : elle contient la liste des fichiers qui ont été envoyés via le formulaire précédent.




> Session & Cookies 
*********************

**Session (fonctionnement)**
1. Un visiteur arrive sur votre site. On demande à créer une session pour lui. PHP génère alors un numéro unique. Ex:
   a02bbffc6198e6e0cc2715047bc3766f. (i.e. sert d'identifiant et est appelé « ID de session » (ou  PHPSESSID ). 
   PHP transmet automatiquement cet ID de page en page en utilisant généralement un cookie.)
2. Une fois la session générée, on peut créer une infinité de variables de session pour nos besoins. 
   Ex:  $_SESSION['nom'] ou $_SESSION['prenom']
   Le serveur conserve ces variables même lorsque la page PHP a fini d'être générée. Cela veut dire que, quelle que soit la   
   page de votre site, vous pourrez récupérer par exemple le nom et le prénom du visiteur via la superglobale  $_SESSION  !
3. Lorsque le visiteur se déconnecte de votre site, la session est fermée et PHP « oublie » alors toutes les variables de 
   session que vous avez créées. Il est en fait difficile de savoir précisément quand un visiteur quitte votre site. Le plus 
   souvent, le visiteur est déconnecté par un timeout.
   
   A retenir : 
    session_start(): appeler cette fonction au tout début de chacune des pages où vous avez besoin des variables de session.
    session_destroy():  automatiquement appelée lorsque le visiteur ne charge plus de page de votre site > timeout, 
                        possibilité créer une page « Déconnexion » si le visiteur souhaite se déconnecter manuellement.

Ex : 

    <?php
        // On démarre la session AVANT d'écrire du code HTML
        session_start();

        // On s'amuse à créer quelques variables de session dans $_SESSION
        $_SESSION['prenom'] = 'Jean';
        $_SESSION['nom'] = 'Dupont';
        $_SESSION['age'] = 24;
    ?>

    <!DOCTYPE html>
    <html>
            <head>
                <meta charset="utf-8" />
                <title>Titre de ma page</title>
            </head>
            <body>
            <p>
                Salut <?php echo $_SESSION['prenom']; ?> !<br />
                Tu es à l'accueil de mon site (index.php). Tu veux aller sur une autre page ?
            </p>
            <p>
                <a href="mapage.php">Lien vers mapage.php</a><br />
                <a href="monscript.php">Lien vers monscript.php</a><br />
                <a href="informations.php">Lien vers informations.php</a>
            </p>
            </body>
    </html>

dans lautre page :  

    <?php
        session_start(); // On démarre la session AVANT toute chose
    ?>

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Titre de ma page</title>
        </head>
        <body>
        <p>Re-bonjour !</p>
        <p>
            Je me souviens de toi ! Tu t'appelles <?php echo $_SESSION['prenom'] . ' ' . $_SESSION['nom']; ?> !<br />
            Et ton âge hummm... Tu as <?php echo $_SESSION['age']; ?> ans, c'est ça ? :-D
        </p>
        </body>
    </html>
    

**L'utilité des sessions en pratique**

Enregistrer les infos de l'authentification (id et mdp) et les mettre partout sur toutes les pages du site ! Ex: Panier.





**Cookies (fonctionnement)**
Les cookies sont donc des informations temporaires que l'on stocke sur l'ordinateur des visiteurs. La taille est limitée à 
quelques kilo-octets : vous ne pouvez pas stocker beaucoup d'informations à la fois, mais c'est en général suffisant.
Comment l'écrire : <?php setcookie('pseudo', 'M@teo21', time() + 365*24*3600); ?>  // nom, valeur et timestamp

**Sécuriser** son cookie avec le mode httpOnly
réduire drastiquement les risques de faille XSS sur votre site, ex:

    <?php setcookie('pseudo', 'M@teo21', time() + 365*24*3600, null, null, false, true); ?>

**Créer le cookie avant d'écrire du HTML**

    <?php
        setcookie('pseudo', 'M@teo21', time() + 365*24*3600, null, null, false, true); // On écrit un cookie
        setcookie('pays', 'France', time() + 365*24*3600, null, null, false, true); // On écrit un autre cookie...

        // Et SEULEMENT MAINTENANT, on peut commencer à écrire du code html
     ?>

     <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <title>Ma super page PHP</title>
            </head>
            <body>

            etc.
            
            
 **Afficher un cookie**
 
       <p>
          Hé ! Je me souviens de toi !<br />
          Tu t'appelles <?php echo $_COOKIE['pseudo']; ?> et tu viens de <?php echo $_COOKIE['pays']; ?> c'est bien ça ?
      </p>
      
**Modifier un cookie existant**
Ex, si maintenant j'habite en Chine voila ce que je ferai: 

      <?php setcookie('pays', 'Chine', time() + 365*24*3600, null, null, false, true); ?>





> Lire et écrire dans un fichier 
*********************

**Autoriser**
Il faut en effet donner le droit à PHP de créer et modifier les fichiers, CHMOD est un nombre à trois chiffres que l'on 
attribue à un fichier, 777 pour donner la peremission a PHP de créer/modifier des fichiers par lui-même

**Ouvrir/Fermer**
La fonctionfopenpermet d'ouvrir le fichier,fgetsde le lire ligne par ligne etfputsd'y écrire une ligne.



**Modifier/Ecrire**
À moins de stocker des données très simples, l'utilisation des fichiers n'est pas vraiment la technique la plus adaptée pour enregistrer des informations. Il est vivement recommandé de faire appel à une base de données.


## Samedi et Dimanche 11 et 12 avril

### Projet (App)

                                                   (Pages statut)
                                                   
- Des amis m'ont filé une maquette à faire, pour une app qui te donne un lieu selon ce que tu désires/aimes/veux faire.
- Le plus gros dilemme au début était de le faire en responsive mobile first je commencais à m'embrouiller avec les 
differentes taille d'iphone. Et le fait aussi qu'ils voulaient des checkbox et non des button du coup il fallait trouver 
un moyen de ne pas afficher les cases a check mais j'ai fini par trouver un site qui en faisait une démo. Du coup là j'ai 
fait toutes les pages de la surface, il me reste plus qu'a ajouter du JS pour pouvoir faire des animations du style, quand
on appuie sur le bouton infos ca affiche le texte en dessous de chaque catégorie correspondante.

 

#### (Login Page) 
