'use strict';

var Program = function()
{
  // On initialise un objet représentant le crayon
  this.pencil = new Pencil();

  // On initialise un objet représentant le canvas (action sur le canvas : mouse click, down , up)
  // On lui passe la propriété pencil car il aura besoin de manipuler cet objet pour dessiner sur le canvas
  this.canvas = new Slate(this.pencil);
}

// La taille du crayon
Program.prototype.clickPencil = function(e)
{
  this.pencil.setSize(e.currentTarget.dataset.size);
}

// La couleur du crayon
Program.prototype.clickColor = function(e)
{
  this.pencil.setColor(e.currentTarget.dataset.color); 
}

// La gomme
Program.prototype.clickEraser = function(e)
{
  this.canvas    = document.getElementById('canvas');
  this.ctx       = this.canvas.getContext('2d');
  this.ctx.clearRect();
}
// Tout effacer
Program.prototype.clickEraseAll = function(e)
{
  this.canvas    = document.getElementById('canvas');
  this.ctx       = this.canvas.getContext('2d');
  this.ctx.clearRect(0,0, canvas.width, canvas.height);
}


// Listeners 
Program.prototype.start = function()
{
  // Click pour changement de taille de crayon
  $('.pencil').on('click',this.clickPencil.bind(this));

  // Click pour changement de couleur
  $('.dot').on('click',this.clickColor.bind(this));

  // Click pour effacer
  $('#erase').on('click', this.clickEraser.bind(this));

  // Click pour tout effacer
  $('#eraseAll').on('click', this.clickEraseAll.bind(this));

}