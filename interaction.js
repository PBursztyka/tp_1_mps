
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

  function DnD(canvas, interactor) {

      // Définir ici les attributs de la 'classe'

    this.initX=0;
    this.initY=0;
    this.finalX=0;
    this.finalY=0;
    this.isclick=false;
    this.interactor=interactor;

    // Developper les 3 fonctions gérant les événements

    this.mouseclick = function(evt) {
      var pos=getMousePosition(canvas, evt);
      this.initX=pos.x;
      this.initY=pos.y;
      this.isclick=true;
      this.interactor.onInteractionStart(this);
      console.log(evt);
    }.bind(this);

    this.mousemove = function(evt) {
      var pos=getMousePosition(canvas, evt);
      this.finalX=pos.x;
      this.finalY=pos.y;
      this.isclick=true;
      this.interactor.onInteractionUpdate(this);
      console.log(evt);
    }.bind(this);

    this.mouserelease = function(evt) {
      var pos=getMousePosition(canvas, evt);
      this.finalX=pos.x;
      this.finalY=pos.y;
      this.isclick=false;
      this.interactor.onInteractionEnd(this);
      console.log(evt);
    }.bind(this);

      // Associer les fonctions précédentes aux évènements du canvas.

    canvas.addEventListener('mousedown', this.mouseclick, false);
    canvas.addEventListener('mousemove', this.mousemove, false);
    canvas.addEventListener('mouseup', this.mouserelease, false);

  };

// Place le point de l'événement evt relativement à la position du canvas.

  function getMousePosition (canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  };



