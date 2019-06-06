// JavaScript Document
var Practice = function(){
	this.load = function(){
		this.pic = new Framework.Sprite(define.imagePath + '1.png');
		this.pic.position = {
			x:1500,
			y:30
		};
		this.pic.rotation = 0;
		/*this.position = {
			x:100,
			y:100
		};
		this.rotation = 0;*/
	};
	this.initialize = function(){
	};
	this.update = function(){
		/*this.position = {
			x:this.position.x +1,
			y:this.position.y 
		}
		this.rotation +=1;
		this.pic.position = this.position;
		this.pic.rotation = this.rotation;*/
	};
	this.click = function(e){
		alert(1);
		if(e.x >= this.pic.position.x - 106 && e.x <= this.pic.position.x + 106){
			if(e.y >= this.pic.position.y - 36 && e.y <= this.pic.position.y + 36){
				console.log("ok");
			}
		}
	};
	this.draw = function(ctx){
		this.pic.draw(ctx);
	};
}