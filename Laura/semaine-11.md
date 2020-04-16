# 11eme semaine de formation

## Lundi 13 avril

### Projet (App)

                                                   (Autodidact)





> Objectifs
*********************

- Finir l'ensemble des pages de la maquette 
- Commencer les parties:

    CSS-animation
    faire slider de bas en haut le titre p. index
    
    JavaScript pour afficher 
    lorsque l'on appuie sur le bouton infos, des textes en dessous de chaque catégorie apparaissent

- Reprendre et finir les pages de cours de PHP&MySQL (OC), les cours angular et react.JS (ENI) et essayer python.


## Mardi 14 avril

### Self-development 

                                                   (Autodidact)





> AI & Machine Learning visioconference
*********************

Joe Baguley, Vice President and Chief Technology Officer at VMware, as he talks to Jobteaser students about the future of tech 
and the important part AI, Machine Learning will play for humanity. 

Machine learning is teaching a machine how humans work : teaching AI. Ex: Tesla is educating their cars to be autonomous.
Not just data learning. AI is more like Alexa or Hey Google.

ML right now, why? 
- so much data
- better computin infrastructure
- deep learning : better models and learning algorithms
- numerous framworks that aim to make ML easy 

ML & AI will redefined the jobs we have not steal them. Change it so we can have more leisure/time than before.




> Projet (CSS)
*********************

Syntaxe pour sélectionner le premier enfant label dans une div: 

              (CSS)
              .petit-container label:first-of-type{       //et non pas first of child
                padding-left: 3em;
                margin-left: 5em;
                padding-right: 3em;
              }
              
              (HTML)
              <div class="petit-container">
                                      <input id="toggle1" type="checkbox">
                                      <label for="toggle1"> GO </label>


                                      <input id="toggle2" type="checkbox">
                                      <label for="toggle2"> WEBSITE </label>
                                </div>

## Mercredi 15 avril

### Projet (App) 

                                                   (Autodidact)



- visio-cours ce matin avec Laïla sur le client/serveur (que j'avais déjà compris en lisant les cours OC mais la partie où 
elle nous a montré ses extensions Chrome pour catalyser son quotidien c'était pratique. La seamine pro, elle nous montrera 
comment mettre une API instagram :D j'ai hate.


<hr/>

> CSS Animation
*********************
Alors j'ai un peu fouillé mes cours OC que j'avais stocké ici, pour pouvoir faire l'animation demander de la maquette app. Au
début j'ai demandé sur le slack par quoi commencer, on m'a dit :active, j'ai essayé mais c'est pas tout à fait l'effet 
que je voulais pcq je n'arrivais pas à changer sa position Y tant que ça. Finalement j'ai fini par taper CSS animation 
generator et je suis tombée sur cette pépite:

https://www.theappguruz.com/tag-tools/web/CSSAnimations/

Comme ça y a juste à changer les points qui nous intéressent. 


<hr/>

## Jeudi 16 avril

### Projet (App) 

                                                   (Autodidact)

> Javascript
*********************

Il me reste **à afficher les textes infos lorsque l'on clique sur le bouton infos**, que j'ai réussi pour la page with mais du 
coup il reste les 4 autres pages, quelque chose a péter quand j'ai changé le nom du bouton infos... 
J'ai un peu galéré ce matin à trouver le bon code JS, comme j'ai mes reflexes avec CSS: chercher sur internet si y a pas déjà
un modèl que je pourrai refaire à ma sauce mais non. Du coup j'ai demandé de l'aide sur Slack et Leila m'a corriger ma réponse 
ce qui a donner:

        
        (JS)
        document.querySelector('.bouton-afficher').addEventListener('click', function(){
          var paragraphes = document.querySelectorAll("p.infos-description");
          paragraphes.forEach((p) => {
            p.style.display = "block";
          });
        }); 
        
        (CSS)
        .bouton-afficher{
          border: none;
          color:inherit;
          padding: 0px 0px;
        }

        .infos-description{
          margin-left: 11em;
          margin-top: -1em;
          font-size: 0.5em;
          display:none;
        }
        
        (HTML)
        <input id="toggle1" type="checkbox" checked>
            		        <label for="toggle1"> solo </label>
                                <p class="infos-description">< short description on i tap ></p>

            		  <input id="toggle2" type="checkbox">
            		        <label for="toggle2"> date </label>
                                <p class="infos-description">< short description on i tap ></p>

            		  <input id="toggle3" type="checkbox">
            		        <label for="toggle3"> duo </label>
                                <p class="infos-description">< short description on i tap ></p>

            		  <input id="toggle4" type="checkbox">
            		        <label for="toggle4"> group </label>
                                <p class="infos-description">< short description on i tap ></p>

AAAAHHH CA Y EST !! J'ai enfin fini de faire debugg mon app ... A force de changer de nom de div ca finit par peter dans tous
les sens, merci mon canard (j'ai pris l'habitude mainteannt a chaque fois que je voulais faire une nouvelle feature de le 
faire sur essaie sur un autre fichier puis de le copier coller une fois que ca marchait pcq on finit vite par s'y perdre et 
ne plus savoir a quoi ressemblait le code de base), petit mode d'emploi: 

- check les noms 
- check si les fichiers sont bien connecté js et css 
- check l'indentation

