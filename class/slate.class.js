'use strict';

var Slate = function(pencil)
{
	this.canvas    = document.getElementById('canvas');
	this.ctx       = this.canvas.getContext('2d');
	this.pencil    = pencil;
	this.statClick = false;

	this.rect = this.canvas.getBoundingClientRect();
	this.mouse = {x:0,y:0};

	this.canvas.addEventListener('mousedown', this.mouseDown.bind(this) );
    this.canvas.addEventListener('mouseup', this.mouseUp.bind(this));
    this.canvas.addEventListener('mousemove', this.mouseMove.bind(this));
}

// *********** SETTERS *************

Slate.prototype.mouseDown = function(e)
{
    console.log("je clique");
	
    this.mouse = {x:e.clientX-this.rect.left,y:e.clientY-this.rect.top};
    console.log(this.pencil);
    //capte position souris au mnt du click
    //affecte les couleurs et style pinceau au ctx
    this.ctx.strokeStyle=this.pencil.color;
    this.ctx.lineWidth=this.pencil.size;
    this.statClick = true;
}

Slate.prototype.mouseUp = function(e)
{
	console.log("je déclique");
	this.statClick = false;
}

Slate.prototype.mouseMove = function(e)
{
	if(this.statClick === true){
		//capte position souris actuelle

		var position = {x:e.clientX-this.rect.left,y:e.clientY-this.rect.top};

		this.ctx.beginPath();
		this.ctx.moveTo(this.mouse.x, this.mouse.y); //cx, cy
		this.ctx.lineTo(position.x, position.y); //x, y
		this.ctx.closePath();
		this.ctx.stroke();

		this.mouse = position;
	}

	console.log(this.statClick)
}
