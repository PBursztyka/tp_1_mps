
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

    function Drawing () {
        this.shapeArray = new Map()

    }

    function Shape (initX, initY, thickness, color) {
        this.initX = initX;
        this.initY = initY;
        this.thickness = thickness;
        this.color = color;

    }

    function Rectangle (initX, initY, thickness, width, height, color) {
        Shape.call(this, initX, initY, thickness, color)
        this.height = height;
        this.width = width;

    }

    Rectangle.prototype = new Shape();

    function Line (initX, initY, thickness, finalX, finalY, color) {
        Shape.call(this, initX, initY, thickness, color)
        this.finalX = finalX;
        this.finalY = finalY;
    }

    Line.prototype = new Shape();