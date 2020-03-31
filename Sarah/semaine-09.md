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
      
