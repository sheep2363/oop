var About = function(){
	this.MW = 1447;
	this.MH = 415;
	this.pos = {
		x:350,
		y:500
	}
    this.load = function()//load pic
    {
        this.pic = new Framework.Sprite(define.imagePath + 'about.png');
    }
    this.initialize = function(){
	};
    this.update = function(){
	};
	this.draw = function(ctx){//畫圖
        var PicPosition = {
			x: this.pos.x,
			y: this.pos.y 
			};
        
        
        this.pic.position = PicPosition;
        this.pic.draw(ctx);
	  
	};
}