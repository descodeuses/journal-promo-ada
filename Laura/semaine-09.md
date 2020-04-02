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
          


            (Ex:nous voulons que notre bouton grossisse quand un utilisateur passe sa souris dessus) 
            
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

    Nous voulons que le bouton grossisse de 15 % au survol de la souris. Pour cela, nous avons besoin de la pseudoclasse           :hover, avec la fonction  scale()  définie sur 1.15 

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

    Pour ajouter un peu de fluidité, nous devons indiquer à notre navigateur que le changement d’échelle, entre l’état             inactif et le  :hover, devra se faire par une transition animée. Pour cela, vous pouvez ajouter la propriété                   transition-property  au sélecteur  .btn. On lui indique que la propriété  transform est celle sur laquelle le navigateur       doit appliquer une transition :

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
           
            transition-property: transform;  //pour plus fluide
            transition-duration: 400ms;     // possibilité en secondes (s) ou millisecondes (ms) pas trop long non plus donc                                                                                                                400 c'est bien
               

            &:hover {                     //  pour déclencher la transition, pseudo classe :hover comme if / else et il en                                                                                                              existe une 50aine 
                transform: scale(1.15);  // pcq on veut que ca grosis de 15% 
            }
        }

      Pour refactorer on écrirait: 
    
            transition: transform 400ms;



            
            
Liste des pseudoclasses les plus couramment utilisées pour déclencher des transitions :

    :hover, qui est déclenché au survol de la souris ;

    :active, activé au clic de l'utilisateur (le plus souvent pour les liens et boutons) ;

    :focus, qui se déclenche lorsque son élément reçoit le focus (soit il est sélectionné à l'aide du clavier, soit il est                 activé avec la souris) ;

    :valid, dont la validation du contenu s'effectue correctement par rapport au type de donnée attendu ;

    :invalid, qui inversement, correspond à un élément dont la validation du contenu ne s'effectue pas correctement par                     rapport au type de donnée attendu ;

    :not(), qui correspond à la négation. Elle prend un sélecteur en argument et permet de cibler les éléments qui ne sont pas               représentés par cet argument ;

    :checked, qui correspond aux input de type checkbox, option ou radio qui sont cochés ;

    :enabled, un élément avec lequel on peut interagir ;

    :disabled, qui correspond à un élément dont l'interaction a été bloquée.




                              (Exemple pour valider un formulaire)
  
    <body>
        <div class="container">
            <div class="form">
                <div class="form__group">
                    <label for="">email</label>
                    <input type="email" name="" id="">
                </div>
            </div>
        </div>
    </body>
    
    $cd-txt: #6300a0;
    $cd-txt--invalid: #fff;
    $cd-danger: #b20a37;
     .form {
          &__group {
              & input {
                  border: 2px solid $cd-box;
                  border-radius: 100rem;
                  color: $cd-txt;
                  font-family: 'Montserrat', sans-serif;
                  font-size: 2.5rem;
                  outline: none;
                  padding: .5rem 1.5rem;
                  width: 100%;
                  transition: background-color 500ms;    //un rapide effet de fondu entre le moment où l’utilisateur tape son                                                                         adresse e-mail et l’affichage de la couleur rouge.
                  
                  &:focus {                              //quand l’user clique, cela change l’état du champ à  :focus,        
                      border: 2px solid $cd-txt;                        ajoutant ainsi un contour violet à l’élément.
                  }
                  &:not(:focus):invalid {               // la fonctionnalité de validation des champs avec :invalid
                      background-color: $cd-danger;      :not(), combinée à la pseudoclasse  :focus, afin de s’assurer que    
                      border: 2px solid $cd-danger;         l’utilisateur a terminé de renseigner son adresse e-mail avant
                      color: $cd-txt--invalid;                                   de lui faire un feedback de validation.    
                  }
              }
          }
      }
 
 
 
 
            (Ex:Les pseudoclasses peuvent aussi être utilisés pour changer le style d’un élément voisin.)

  1. (HTML)
  
          <body>
              <div class="container">
                  <div class="btn">
                      C'est partiii!
                  </div>  
                  <div class="ball"></div>
              </div>
          </body>
      
      
      (CSS)
      
          .btn {
              background: $cd-primary;
              font-size: 3rem;
              cursor: pointer;
              padding: 1.85rem 3rem;
              border-radius: 10rem;
              &:active + .ball{                 //la boule grossisse au clic de l’utilisateur en utilisant la pseudoclasse   
                  transform: scale(1.0);                                                       :active  plutôt que  :hover
              }
          }

          .ball {
              width: $ball-size;
              height: $ball-size;
              background: $cd-secondary;
              margin-bottom: 1rem;
              border-radius: $ball-size * 0.5;
              transform: scale(0.1);                //l’échelle initiale  scale()  à .1 pour faire grandir le ballon et       
              transition: transform 4000ms;         // pour créer une impression de ballon en train de gonflé pendant 4s
          }
 
 

Les 12 principes de l'animation sont :

1. Squash and Stretch, pour compresser et étirer un élément ;
2. Anticipation, pour préparer l’audience à un mouvement à venir ; 
3. Staging (mise en scène), pour guider les yeux de l’utilisateur vers les éléments importants d’une page ;
4. Straight Ahead and Pose to Pose (toute l'action d'un coup et partie par partie), qui correspond davantage à l'animation
    traditionnelle mais fait penser à la différence transitions/keyframes ; 
5. Follow Through and Overlapping Action (continuité du mouvement initial et chevauchement de deux mouvements consécutifs), 
    pour faire accélérer et décélérer un élément en fonction de sa masse ; 
6. Slow in and slow out (ralentissement en début et en fin de mouvement), basé sur le fait que les objets ne démarrent pas et 
    ne s’arrêtent pas instantanément ;
7. Arc, pour créer des mouvements naturels ;
8. Secondary Action (action secondaire), pour séparer différentes parties d’une scène dans une animation ;
9. Timing, pour faire se déplacer les objets à une vitesse crédible ;
10. Exaggeration (exagération), pour donner du caractère et de la personnalité à une animation ; 
11. Solid Drawing (notion de volume), pour que les animations correspondent au résultat souhaité ;
12. Appeal (charisme), pour rendre les animations plus dynamiques.





                   (Ex: créez des animations naturelles en combinant les transitions)
                   
- au survol de la souris, non seulement le bouton grossira, mais on lui appliquera également un effet de fondu.

          $cd-btn-start: rgba(1, 28, 55, 0);
          $cd-btn-end: rgba(1, 28, 55, 1);

          .btn {
              background-color: $cd-btn-start;
              border: 4px solid $cd-btn;
              border-radius: 10rem;
              cursor: pointer;
              font-size: 3rem;
              padding: 1.85rem 3rem;
              &:hover {
                  transform: scale(1.13);
                  background-color: $cd-btn-end;
              }
          }

- on peut aussi retarder la transition: 

              transition: transform 450ms, background-color 300ms;

- retardez le début d'une transition:
  "Attention à bien respecter l'ordre qu'on a utilisé juste avant pour préciser la durée de chaque propriété. 
  Dans notre cas précis,    nous ne voulons pas retarder l’animation de transformation, mais celle de couleur
  d’arrière-plan"

              transition: transform 450ms, background-color 300ms;
              transition-delay: 0, 150ms;
              
  si on refactor ca donne : 
              
              transition: transform 450ms, background-color 300ms 150ms;
  
  le code finale:
  
              .btn {
                background-color: $cd-btn-start;
                border: 4px solid $cd-btn;
                border-radius: 10rem;
                cursor: pointer;
                font-size: 3rem;
                overflow: hidden;
                padding: 1.85rem 3rem;
                position: relative;
                transition: transform 450ms, background-color 300ms 150ms;
                &:hover {
                    transform: scale(1.13);
                    background-color: $cd-btn-end;
                }
              }
              
              

                     (Créez des animations plus naturelles avec les fonctions de timing)
                     
1.L’accélération et la décélération des transitions sont contrôlées par la propriété  transition-timing-function ;
    ex:
    
        transition: transform 1000ms;
        transition-timing-function: linear;
        
        ou transition: transform 1000ms linear;
        
2.Si aucune fonction de timing n’est indiquée, la transition utilisera la fonction  ease. Elle suit un profil d’accélération plus net, et une rampe de décélération plus prononcée ;
3.Parmi les autres mots clés pour les fonctions de temporisation, on peut trouver  ease-in,   ease-out,   ease-in-out, et  linear ;
    ex: 
        
        transition: transform 1000ms ease-in-out; 
        ou 
        // Fonction de timing ease-in :
        transition: transform 1000ms ease-in;
        // Fonction de timing ease-out :
        transition: transform 1000ms ease-out;
        
4.Quand aucune fonction de timing par défaut ne correspond à l’animation, il est possible de créer ses propres courbes d’animation personnalisée à l’aide de la fonction  cubic-bezier()  ;

    merci à https://cubic-bezier.com/#.17,.67,.83,.67
    
    ce qui donnerai :
    
    $trans-dur: 2000ms;
    .strength {
      transform: translateY(100%);
      transition: transform $trans-dur cubic-bezier(0, .75, .08, 1);
    }
5.Il existe des outils pour ajuster les effets de timing avec la fonction  cubic-bezier()  .




## Jeudi 2 avril

### CSS animation (OpenClassroom)

- FPS de 60 pour le navigateur 
- Pour nous assurer que nos animations soient aussi fluides que possibles, nos main propriétés sont  **transform  et  
  opacity**.
- Modifiez **la taille** d'un élément avec  **scale** avec un parametre genre scale(2) = grossi de 200% pour taille uniforme:

              .btn {
                  :hover + .box {
                      transform: scale(2);
                  }
              }

              .box {
                  transition: transform 330ms ease-in-out;
              }
              
  ou avec deux paramètres X et Y genre scale, X à 300 %, et Y à 50 % : pour un volume constant:
  
              .btn {
                :hover + .box {
                    transform: scale(3, 0.5);
                }
              }
            .box {
                transition: transform 330ms ease-in-out;
              }
              
   quand on veut modifier l’échelle dans une seule direction, on peut utiliser les fonctions  scaleX()  et  scaleY(). 
 - Modifiez **la position** d'un élément avec la fonction  **translate** qui accepte différentes unités, comme  les px, les vh ou 
 les em avec X et Y pour propriétés,  déplacer notre boîte de 150 px vers la droite et 7 vh vers le haut:
  
            .btn {
                :hover + .box {
                    transform: translate(150px, -7vh);
                }
            }
             
             .box {
                transition: transform 330ms ease-in-out;
              }
  
  Notes : Pour certaines propriétés CSS, les pourcentages sont calculés par rapport à leur élément parent. Par exemple, width: 
  50%  signifie la moitié de la largeur du parent. Mais quand on utilise des pourcentages avec  translate(), ces pourcentages 
  sont liés à l’élément lui-même. Il est possible de déplacer des éléments sur l’axe X et Y séparément, grâce aux fonctions  
  translateX()  et  translateY(). Ex:
    
    (HTML)                                                (CSS)
    <div class="container">                                .btn {
      <button class="btn">Transform!</button>              :hover + .box {
        <div class="box">                                       transform: scale(1);
          <span>Boop!</span>                                    span {
        </div>                                                       transform: translateY(0);
    </div>                                                      }
                                                              }
                                                             }
    

                                                                .box {
                                                                  transform: scale(0.1);
                                                                  transition: transform 330ms ease-in-out;
                                                                  overflow: hidden;     // texte n'apparaît que dans la boîte 
                                                                  span {
                                                                      display: inline-block;
                                                                      transform: translateY(250%);
                                                                      transition: transform 280ms ease-out 50ms;
                                                                  }
                                                                }
 Notes: transform  ne peut pas manipuler d’éléments inline. Nous devons donc modifier le mode d’affichage en   block  ou  
 inline-block  avant d’obtenir des résultats.
 - Faites **pivoter** vos éléments avec **rotate()** ex:
      
        (HTML)
        <div class="container">
            <button class="btn">Transform!</button>
            <div class="boxes">
                <div class="boxes__base boxes--rotDegrees">rotate(360deg)</div>
                <div class="boxes__base boxes--rotTurns">rotate(1turn)</div>
            </div>
        </div>

 
        (CSS)
       .btn {
          :hover + .boxes {
              & > .boxes--rotDegrees {
                  transform: rotate(0deg);
              }
              & > .boxes--rotTurns {
                   transform: rotate(0turn);
              }
          }
        }

        .boxes {                                                    //Chaque boîte démarre en position de rotation négative de 
           &--rotDegrees {                                             360 deg/1 turn. Au survol du bouton, cela déclenche la 
                transform: rotate(-360deg);                           transition.  On les fait alors tourner vers la position
                transition: transform 500ms ease-in-out;                      0 deg/0 turn sur une demi-seconde, en utilisant
            }                                                                       la fonction de temporisation ease-in-out.

            &--rotTurns {
                background: pink;
                transform: rotate(-1turn);
                transition: transform 500ms ease-in-out;
            }
        }
        
- si on ajoute une deuxième propriété  transform, elle annule la première. On ne peut donc définir qu’une seule propriété  transform  dans un même sélecteur ;
- pour effectuer plusieurs transformations, on peut les lister dans une même propriété transform comme 
transform:translateX(200%) scale(2);
- une propriété avec plusieurs fonctions exécute les fonctions dans l’ordre, de droite à gauche ;
- les fonctions de transformations en 3D comme translate3d(),  rotateZ()  et  scale3d()  ont également besoin de la fonction
perspective pour indiquer au navigateur la distance à laquelle l'utilisateur se trouve : plus la distance est grande, moins 
l'animation sera marquée.        
- Notes: À vous de choisir entre degrés et turns selon vos préférences. Pour ma part, j'ai tendance à préférer turn lorsque 
mon élément fait au moins un tour sur lui-même, et deg lorsqu'il s'agit de valeurs inférieures à un tour.
 
 
## Notes persos

***Les cours OpenClassRoom montrent parfois des exemples incomplet comme j'ai pu le constater avec Gauthier lorsque j'ai copié
coller un code sur rotate transition ... donc j'aurai peut etre pas du copier tout ces exemples hahahaha vu que je ne les ai 
pas testé moi-même, a par le dernier où d'ailleurs il manque un & et de la déco pour afficher les carrés rose et vert.. ***

Tout les exemples donné dans le cours OpenClassroom son en SASS donc si on veut traduire les codes en CSS pure: 
https://www.sassmeister.com/

Pour étudier le CSS pure en animation : 
https://www.w3schools.com/css/css3_animations.asp

Mais je conseillerai juste de finir le cours OpenClassroom avant pcq on nous a pas encore introduit la notion de keyframes
que l'on verra justement plus tard dans le cours OCR. Et j'avais envie du coup d'apprendre SCSS car comme me l'a montré 
Gauthier, c'est bien plus facile à manier et j'ai donc ce cours sous la main : 
https://la-cascade.io/se-lancer-dans-sass/
(Sarah est d'ailleurs en train de l'installer et de faire joujou avec, moi je continue sur la partie théorie, le temps d'avoir
bien toute la base consolidé pour ensuite pouvoir mettre en pratique, chacun sa façon d'apprendre :) 
