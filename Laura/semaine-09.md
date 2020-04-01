# 9eme semaine de formation

## Lundi 30 mars

### Projet (Codevores)

                                                   (Pages statut)

 

#### (Login Page) 

- J'ai fait les pages de connexion pour recruteurs et developpeurs avec bootstrap


#### (Projet Pages)

- Tout est fini, il manque la partie JavaScript avec le Mandrill pour les mails et l'API, que je voulais faire pour Instagram 
  mais j'ai vu avec Yannick que c'était pas possible parcequ'il faut le faire depuis un serveur et donc demander à Marie pour 
  plus de conseils 
  
- J'ai passé 2h à indenter comme il fallait toute la page CSS 





## Mardi 31 mars

- Je vais faire les cours de CSS animation avec Charlotte et Sarah on verra bien ce que ça donne sinon je ferai des cours de PHP, mais j'ai déjà des projets de maquette à faire pour m'entraîner, sachant que j'ai un ami qui lance une application (plan B) 




## Mercredi 1 avril

### CSS animation (OpenClassroom)

- Il existe deux moyens de créer des animations en CSS : les transitions, et les keyframes.
- Pour créer une transition, vous aurez besoin de plusieurs informations :

          -une propriété CSS à modifier ;
          -une valeur initiale pour votre propriété CSS ;
          -une valeur finale pour cette même propriété ;
          -une durée ;
          -un événement pour déclencher votre transition.
          


Exemple: nous voulons que notre bouton grossisse quand un utilisateur passe sa souris dessus, 
- nous pouvons choisir la propriété  transform  et sa fonction  scale().

1. la fonction  scale()  permet de modifier la taille d’un élément, 
    selon la valeur qu’on lui donne, sachant que 0 = 0 % et 1 = 100 %

2. on va utiliser du: Sass, un nouveau langage à partir du CSS : le SCSS. Tout ce qui est valide en CSS l'est aussi en SCSS,      mais il y ajoute des expressions, des fonctions, des variables, une logique conditionnelle et des boucles. Il utilise          ensuite un préprocesseur (un programme qui fonctionne sur votre ordinateur ou sur un serveur) chargé de traduire cette        nouvelle syntaxe intelligente en CSS. 

3. 

          (HTML)                                         
          <body>
              <div class="container">
                  <div class="btn">
                      Vois comme je grandis !
                  </div>
              </div>
          </body>

          (CSS)
          $cd-btn: #011c37;
          $cd-txt: #15DEA5;
          .btn {
              background: $cd-btn;
              color: $cd-txt;
              font-size: 3rem;
              cursor: pointer;
              padding: 1.85rem 3rem;
              border-radius: 10rem;
              transform: scale(1);     // cela ne change rien pcq le btn est déjà à scale 1 de base 

          }

Nous voulons que le bouton grossisse de 15 % au survol de la souris. Pour cela, nous avons besoin de la pseudoclasse  :hover, avec la fonction  scale()  définie sur 1.15 

          $cd-btn: #011c37;
          $cd-txt: #15DEA5;
          .btn {
              background: $cd-btn;
              color: $cd-txt;
              font-size: 3rem;
              cursor: pointer;
              padding: 1.85rem 3rem;
              border-radius: 10rem;
              transform: scale(1);
              &:hover {
                  transform: scale(1.15);
              }
          }

Pour ajouter un peu de fluidité, nous devons indiquer à notre navigateur que le changement d’échelle, entre l’état inactif et le  :hover, devra se faire par une transition animée. Pour cela, vous pouvez ajouter la propriété  transition-property  au sélecteur  .btn. On lui indique que la propriété  transform est celle sur laquelle le navigateur doit appliquer une transition :

        $cd-btn: #011c37;
        $cd-txt: #15DEA5;
        .btn {
            background: $cd-btn;
            color: $cd-txt;
            font-size: 3rem;
            cursor: pointer;
            padding: 1.85rem 3rem;
            border-radius: 10rem;
            transform: scale(1);
            ```diff
            - transition-property: transform;  //pour plus fluide
            + transition-duration: 400ms;     // possibilité en secondes (s) ou millisecondes (ms) pas trop long non plus donc                                                                                                                400 c'est bien
                ``` 

            &:hover {
                transform: scale(1.15);  // pcq on veut que ca grosis de 15% 
            }
        }
