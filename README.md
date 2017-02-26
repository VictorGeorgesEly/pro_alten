# Prix de la meilleure approche commerciale - CNH 2016

Pour lancer le projet, il est nécessaire d'avoir node et npm installés sur son ordinateur. Pour s'en assurer, lancer la commande `$ npm --version` et vérifier qu'elle ne renvoie pas d'erreur.

Pour lancer le projet en mode développement (compilation en watch + live reload), dans un terminal, en étant placé dans le dossier du projet (clone du dépôt git) :

```
$ npm install
$ npm start
```

Pour build le projet (compilation single run) :

```
$ npm run build
```

## Documentation :

### Blocs "légende de l'image" :

Ajouter un id à l'image qui doit être légendée (par exemple mockup-1). Puis ajouter l'attribut `data-pinpoint-image="#mockup-1"` sur le texte de légende.

Pour positionner le point qui sera placé sur l'image, utiliser un ou plusieurs des 4 attributs suivants sur la légende. Les valeurs sont en pourcentages, pour un `position:absolute` par rapport au bloc contenant l'image :

```
data-pinpoint-top
data-pinpoint-bottom
data-pinpoint-left
data-pinpoint-right
```

Exemple complet :

```HTML

<div> <!-- bloc utilisé pour ajouter les marqueurs de l'image (attention donc à ses dimensions etc) -->
    <img id="mockup-1" src="img/mockups/mockup-1.png" alt="Capture d'écran 1" />
</div>
<div>
    <p data-pinpoint-image="#mockup-1" data-pinpoint-top="50" data-pinpoint-left="55"> <!-- 50% du haut du conteneur et 55% de la gauche -->
        Une présentation des produits sous forme de tiling parce que c'est quand même vraiment la classe, quand on y pense
    </p>
    <p data-pinpoint-image="#mockup-1" data-pinpoint-bottom="75" data-pinpoint-right="85"> <!-- 75% du bas du conteneur et 85% de la droite -->
        Un joli menu latéral pour augmenter votre taux de conversion au maximum
    </p>
</div>

```


### Blocs de choix

Do what the fuck you want avec tes blocs et tes colonnes. Ajouter simplement les attributs suivants sur les tags des boutons (ou liens) destinés à sélectionner le choix :

- `data-option-group` : texte - sert à grouper les options, pour désactiver toutes les autres quand on en sélecitonne une (exactement comme le name pour des inputs radio)
- `data-price-diff` : nombre - prix à ajouter au prix de base quand cette option est choisie

Styling : le bouton (/lien) qui correspond à l'option choisie se verra ajouter la classe `selected` (pour être ciblée par un sélecteur).

**Remarque :** Le prix de base est défini dans l'attribut `data-base-price` de la balise portant la classe `price`.

### Blocs "ombre de mise en avant" :

Ajoute un `data-dark` à tout ce que tu veux qui actionne un "ombrage" sur une image.

Les 5 paramètres nécessaires sont séparés par des virgules, comme ceci : `data-dark="1,2,3,4,5"`

- **1**: le sélecteur CSS de l'image (ex: #mockup-1)
- **2**: pixels entre le haut de l'image et le coin supérieur gauche de la zone éclairée
- **3**: pixels entre le bord gauche de l'image et le coin supérieur gauche de la zone éclairée
- **4**: pixels entre le haut de l'image et le coin inférieur droit de la zone éclairée
- **5**: pixels entre le bord gauche de l'image et le coin inférieur droit de la zone éclairée

Comme les pixels sont difficiles à deviner, un petit script à entrer dans le console du navigateur devient indispensable.

Il faut donc copier ce code :

`var f=false;$('html').on('click', function(e){var $t=$(e.target);var y=e.pageY-$t.offset().top,x=e.pageX-$t.offset().left;if(f!==false){console.log(f+','+Math.round(x)+','+Math.round(y));f=false;$('.opascr').remove();$('.opascr-t').remove();$('html').unbind('mousemove');}else{$('<div/>').addClass('opascr').css({'width':'100%','top':0,'left':0,'height':e.pageY+'px','position':'absolute','background-color':'rgba(0,0,0,0.5)'}).insertAfter('body');$('<div/>').addClass('opascr').css({'width':e.pageX+'px','top':e.pageY+'px','left':0,'height':'9999px','position':'absolute','background-color':'rgba(0,0,0,0.5)'}).insertAfter('body');$('html').on('mousemove', function(e){$('.opascr-t').remove();$('<div/>').addClass('opascr-t').css({'width':(e.view.innerWidth - e.pageX)+'px','top':y+8+'px','left':(e.pageX+1)+'px','height':(e.pageY-y-7) +'px','position':'absolute','background-color':'rgba(0,0,0,0.5)'}).insertAfter('body');$('<div/>').addClass('opascr-t').css({'width':'100%','top':(e.pageY+1)+'px','left':(x+8)+'px','height':'1700px','position':'absolute','background-color':'rgba(0,0,0,0.5)'}).insertAfter('body');});f=Math.round(x)+','+Math.round(y);}});`

puis le coller dans la console, et la garder ouverte.

Il suffit ensuite de **cliquer une fois sur l'image à l'endroit qui sera le coin supérieur gauche de la zone éclairée**, puis recliquer à l'endroit qui sera le coin inférieur droit de la zone éclairée. **Une zone interactive expérimentale se dessinera lors de l'opération.**

Au deuxième clique, les coordonnées nécessaires apparaitront dans la console (ex: 43,168,144,192), il suffira de les renseigner dans l'attribut `data-dark="#mockup-1,43,168,144,192"` et le tour est joué.

Pour annuler l'effet du script, il faut recharger la page.
    

## Thème d'origine :

### [Start Bootstrap](http://startbootstrap.com/) - [Creative](http://startbootstrap.com/template-overviews/creative/)

[Creative](http://startbootstrap.com/template-overviews/creative/) is a one page creative theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

### Getting Started

To begin using this template, choose one of the following options to get started:
* [Download the latest release on Start Bootstrap](http://startbootstrap.com/template-overviews/creative/)
* Clone the repo: `git clone https://github.com/BlackrockDigital/startbootstrap-creative.git`
* Fork the repo

### Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/BlackrockDigital/startbootstrap-creative/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](http://startbootstrap.com/template-overviews/creative/).

### Creator

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

### Copyright and License

Copyright 2013-2016 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-creative/blob/gh-pages/LICENSE) license.