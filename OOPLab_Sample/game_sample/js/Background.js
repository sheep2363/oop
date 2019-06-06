var Background = function(){
	this.MW = 212;
	this.MH = 72;
	this.pos = {
		x:900,
		y:400
	};
    this.returnposition = {
        x:100,
        y:520
    }
    this.succpos = {
        x:150,
        y:300
    } 
    this.back = 0;
    this.level = 0;
    this.success = 0;
    this.load = function(){
        this.pic1 = new Framework.Sprite(define.imagePath + 'room1.png');
        this.pic2 = new Framework.Sprite(define.imagePath + 'room2.png');
        this.pic3 = new Framework.Sprite(define.imagePath + 'return.png');
        this.pic4 = new Framework.Sprite(define.imagePath + 'about.png');
    }
    this.initialize = function(){
	};
    this.update = function(){
		
	};
   
	this.draw = function(ctx){
        var PicPosition = {
			x: this.pos.x,
			y: this.pos.y 
			};
        var returnpos = 
        {
            x:this.returnposition.x,
            y:this.returnposition.y
        };
        var suc = 
        {
            x:this.succpos.x,
            y:this.succpos.y
        }
        if(this.success == 1)
        {
            this.pic4.position = PicPosition;
		    this.pic4.draw(ctx);
        }
        else
        {
            if(this.level == 0)
            {
                this.pic1.position = PicPosition;
                this.pic1.draw(ctx);
            }
            else 
            {
               this.pic2.position = PicPosition;
               this.pic2.draw(ctx); 
            }
           
        }
         this.pic3.position = returnpos;
         this.pic3.draw(ctx);
	     
	};
}