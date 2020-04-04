# 9eme semaine de formation

## Lundi 30 Mars

J'ai commencé à reconstruire mon site Codevores très moche. Je tire un enseignement de mes erreurs notamment le nom de mes class fourre-tout aux multiples propriétés. Au final c'est improductif. Quand il s'agit de changer à la dernière minutes c'est une grande blague. 

Je commence donc par monter une bibliothèque css avec toutes les propriétés utiles pour minimiser les class fourre-tout.


## Mardi 31 Mars

Café avec les Descodeuses et Mich. 

On aborde Scss et stylus, Js.code dont le site est apparement très bien pédagogiquement parlant et j'installe l'extension Wappalyzer qui permet de voir quels langages utilise chaque site web. 

Je commence le cours Animation d'Openclassroom. J'ai appris notamment : 

- qu'il existe 12 grands principes fondamentaux en animation. Ils convergent tous vers le même but rendre l'animation réaliste et pour cela lui donner des imperfections qui correspondent davantage à ce que l'oeil humain est habitué à voir. 

- CSS est un des langages permettant de créer des animations (Javascript aussi).

- Avec CSS on peut créer des animations avec les propriétés transition et @keyframes.

- Avec transition on fait passer un objet d'un état A à un état B. 

- Pour faire une animation avec transition il faut :
    - un objet à animé
    - un état initial
    - un état final
    - une durée
    - un événment qui peut être notamment défini avec les pseudo class (:hover , :active, :no , etc).
    
 - la propriété transform avec la fonction scale() permet de transformer la taille d'un objet. 
 
 - la propriété transform permet aussi avec d'autre attribut de transformer un objet (ex: color, background-color, ...).
 
 - On peut ajouter un delai au lancement de l'animation pour retarder son lancement à partir de l'évènement: 
      transition-delay: 300ms;
   On peut aussi directement mettre le délai dans la propriété transition à la suite de la durée et de l'animation:
      transition: transform 0.3s 300ms;
      
 - Afin de rendre l'animation plus réaliste il faut apprendre à gérer les accélérations et décélérations de la transformation. 
 Pour cela on peut utiliser la propriété transition-function-timing ou dirctement ajouter dans la propriété transition la fonction voulue: 
    - ease (par défaut)
    - ease in
    - ease out
    - ease in out (apprécié des développeurs)
    - linear 

- On peut aussi choisir de manière plus précise la courbe du timing. Pour cela on utilise la fonction cubic-bezier qui reçoit plusieurs valeurs (x et y de l'accélération et x et y de la décélération). 
      
      
## Mardi 1 avril

_ J'ai continué tout doucement la refonte de Codevores. Difficile d'y voir clair dans tous le code produit avant. J'ai l'impression que repartir de 0 aurait été plus simple. 


_ Cet après midi reprise du cours Animation sur OpenClassRoom. j'ai appris: 

### Il faut optimiser les performances du navigateurs pour les animations CSS : 
        - Il faut essayer de garder un nombre idéal de 60 FPS (Frame per seconds/Images par seconde). 
        - FPS = une seconde / durée de calcul. 
        -Pour passer du code html/css à une page web le navigateur fait plusieurs étapes : 
                    - Style : interprète le code pour comprendre la structure du DOM et déterminer quelles règles s'appliquent à quels élèments. 
                    - Layout : détermine la taille des élèments et où les placer.
                    - Paint : transforme les élèments en pixels en appliquant le style et le placement des élèments
                    - Composition : combine tous les élèments pour composer la page. 
        - Pour des animations fluides il faut que le navigateur calcul le moins possible. Donc passer uniquement par composition. (pas utilisation de width ni de background color mais par transform et opacity). 
        - quand le mouvement "rouille" on parle de "jank".
        
### Créer des animations fluides avec transform : 
        - on peut déplacer des éléments avec les fonctions translate : 
                    - translate()
                    - translateX()
                    - translateY()
                    - translate3d()
        - on peut agrandir avec les fonctions scale :
                    - scale()
                    - scaleX() 
                    - scaleY()
                    - scale3d()
        - on peut les faire pivoter grâce aux fonctions rotate : 
                    - rotate()
                    - rotateX()
                    - rotateY()
                    - rotateZ()
        - si on ajoute une deuxième propriété  transform, elle annule la première. On ne peut donc définir qu’une seule propriété  transform  dans un même sélecteur ;
        - pour effectuer plusieurs transformations, on peut les lister dans une même propriété transform
        - une propriété avec plusieurs fonctions exécute les fonctions dans l’ordre, de droite à gauche ;
        - les fonctions de transformations en 3D comme translate3d(),  rotateZ()  et  scale3d()  ont également besoin de la fonction perspective pour indiquer au navigateur la distance à laquelle l'utilisateur se trouve : plus la distance est grande, moins l'animation sera marquée.
        
### Modifier le point d'ancrage d'un élèment grâce à transform-origin:
    - transform-origin  permet de repositionner le point d’ancrage, qui se trouve par défaut au centre de l’élément.
    - on peut régler ce point d’origine en :
        - utilisant des unités comme px, rem, vh, etc. ;
        - utilisant des pourcentages pour X et Y ;
        - utlisant des mots clés :  left  et   right  pour l’axe X,  top  et  bottom  pour l’axe Y, et  center  pour les deux;
        - il est possible de ne pas indiquer la valeur de l'axe Y ou, quand on utilise des mots clés, de mettre uniquement une valeur : le navigateur comprend de lui-même à quel axe la valeur s'applique ;
        - quand on change le point d’origine en 3D, la valeur de Z doit être exprimée en unités (et non en pourcentages) ! 
        
### Analyser la performances des animations avec Chrome DevTools :
        - l'outil Performance de Chrome DevTools permet d'analyser les performances d’une page, notamment le taux d’images par seconde d’une animation; 
        - On peut brider la performance de notre machine pour simuler un appareil plus lent (activer l’option “CPU throttling”) ;
        - zoomer sur une image précise d’une animation permet de détailler les calculs effectués par le navigateur.
        
### Animer les couleurs avec opacity : 
    - animer la couleur d’une propriété déclenche des calculs de paint ; La propriété  opacity permet de faire des transitions entre des couleurs en évitant ces calculs ;
    - la propriété  opacity  reçoit une valeur entre 0 et 1 (0 étant complètement transparent et 1 complètement opaque) ;
    - pour éviter d’avoir à ajouter des  <div>  supplémentaires, on peut utiliser le pseudoélément  ::before  ou  ::after  
    - ::before  et  ::after  créent un élément qui est respectivement le premier ou le dernier enfant de l’élément sélectionné; 
    - il est possible de créer des dégradés de couleur. Il suffit d'attribuer un dégradé au background-color de l'élément d'arrière-plan. On fera ensuite disparaître l'élément superposé avec opacity: 0.

## Jeudi 2 Avril

J'ai repris tous le bloc 2 du cours Animation d'Openclassroom en essayant de refaire les exercices. Je me rends compte que je bloque sur certaine traduction de Scss en Css. 

Gauthier partage une application permettant de traduire en direct le scss en css : SassMeister. 

## Vendredi 3 Avril
        
Visioconférence d'Olivier, développeur dont les langages favoris sont Javascript et Java! :)
J'apprends que : 
    - GWT transforme le Java en Javascript;
    - Rust serait une passerelle entre Front et Back.
    - CMS signifie : Content management system. (Wordpress en est un). Cela permet au client de modifier son site sans intervenir en codant. 
    - A list appart est un bon site. 
    - Le site de Sara Soueidan aussi! 
    
## Samedi 4 Avril

Je continue le cours Animations d'OpenClassRoom. 

### Des animations plus complexes avec la règle CSS @keyframes

   - les animations @keyframes permettent de construire des animations complexes en créant plusieurs étapes pour les propriétés tout au long de l'animation ;

   - les keyframes CSS sont mise en place à l'aide de la règle @keyframes suivie d'un nom pour l'ensemble des keyframes;

   - chaque keyframe peut être établi en utilisant comme valeur le pourcentage d'animation réalisé : 33% {...} ;

   - si on n'a besoin que d'un keyframe de début et de fin, on peut utiliser « from » et « to »;
   
   - si aucun keyframe de début ou de fin n'est fourni, l'animation commence et/ou se termine avec les valeurs de propriété assignées au sélecteur. Si aucune valeur n'est explicitement assignée dans le sélecteur, c'est la valeur par défaut qui est choisie ;

   - une animation @keyframes peut contenir différents keyframes avec des propriétés distinctes ;

   - plusieurs pourcentages peuvent être assignés à un seul keyframe. Les valeurs de ce keyframe seront appliquées à ces pourcentages dans l'animation ;

### Utiliser les propriétés de l'animation CSS

   - Comme les transitions, les animations @keyframes peuvent être déclenchées avec des pseudoclasses (:hover, etc.);
   - les @keyframes peuvent aussi être déclenchés par le chargement des éléments auxquels ils sont assignés, comme un sélecteur. Par exemple, dès le chargement d'une page ; 
   - On peut retarder le démarrage en utilisant la propriété animation-delay (s ou ms)
   - on peut étendre les valeurs du début à la fin des animations en utilisant la propriété animation-fill-mode :
            - « backwards » prolonge les valeurs de départ d'une animation avant son lancement. Cela couvre le délai avant que l'animation ne commence.
            - « forwards » prolonge les valeurs finales d'une animation jusqu'à ce que la page soit rechargée ou que le navigateur soit fermé.
            - « both » prolonge l'animation dans les deux sens ;
    - on peut définir une fonction de timing des @keyframes en utilisant la fonction animation-timing-function sur le sélecteur où l'animation a été assignée ;
        - on peut aussi définir un timing spécifique keyframe par keyframe, en assignant la propriété  animation-timing-function aux keyframes en question.
