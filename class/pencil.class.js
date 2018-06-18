'use strict';

var Pencil = function()
{

  this.size = 1;
  this.color = 'black';
}

// *********** SETTERS *************

Pencil.prototype.setSize = function(size)
{
    this.size = size;
    console.log(size);
}

Pencil.prototype.setColor = function(color)
{
    this.color = color;
    console.log(color);
}

// *********** METHODE *************

// FAIRE METHODE POUR AFFECTER COULEUR ET TAILLE AU CONTEXTE DU CANVAS (VOIR OBJ SLATE)

// strokeStyle = Sets or returns the color, gradient, or pattern used for strokes
// lineWidth = Sets or returns the current line width
