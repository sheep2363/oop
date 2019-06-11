// JavaScript Document
var Answer = function(){
	this.MW = 212;
	this.MH = 72;
    this.re = 0;
	this.position = {
		x:350,
		y:500
	};
	this.pos ={
		x:350,
		y:500
	};
	this.map = [0,0,0];
	this.pic = [0,0,0];
	this.load = function(){//load pic
		this.pic[0] = new Framework.Sprite(define.imagePath + 'nouns.png');
		this.pic[1] = new Framework.Sprite(define.imagePath + 'verb.png');
		this.pic[2] = new Framework.Sprite(define.imagePath + 'nouns2.png');
	};
	this.initialize = function(){
	};
	this.update = function(){
	};
    this.temp = -1;
	this.draw = function(ctx){
        if(this.re == 1){//如果有換關,重新載入圖片
            this.pic[0] = new Framework.Sprite(define.imagePath + 'nouns.png');
            this.pic[1] = new Framework.Sprite(define.imagePath + 'verb.png');
            this.pic[2] = new Framework.Sprite(define.imagePath + 'nouns2.png');
            this.re = 0; 
        }
		for(i =0;i<3;i++)//畫圖
		{
			var PicPosition = {
				x: this.pos.x + 350 * i,
				y: this.pos.y 
			};
            this.pic[i].position = PicPosition;
			this.pic[i].startPos = {x : PicPosition.x - 175, y: PicPosition.y - 36};
			this.pic[i].endPos = { x: PicPosition.x + 175, y: PicPosition.y + 36};
			this.pic[i].draw(ctx);
		}
	};
    this.isInside = function(x, y){//判斷圖片是否在答案的格子內
		for(i =0;i<3;i++)
		{
			console.log(i);
			console.log(this.pic);
			console.log(this.pic[i].position);
			console.log("end x:" + this.pic[i].endPos.x + " " + "y:" + this.pic[i].endPos.y);
			console.log("start x:" + this.pic[i].startPos.x + " " + "y:" + this.pic[i].startPos.y);
			
			console.log("e x:" + x + " " + "y:" + y);
			x1 = this.pic[i].startPos.x;
			y1 = this.pic[i].startPos.y;
			if (x1 + 212  > x &&
				x + 50  > x1 &&
				y1 + 72 > y &&
				y + 30 > y1
			)
			{
				console.log("isinside");
				return i;
			}
		}
		return -1;
	};
    this.checkans = [-1,-1,-1];
    this.redraw = function(a,sit){//更改答案的圖片
        if(this.temp == 0 && (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '1.png');
        }
        else if(this.temp == 1 && (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2.png');
        }
        else if(this.temp == 2&& (sit == 1)&& a== 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '3.png');
        }
        else if(this.temp == 3&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '4.png');
        }
        else if(this.temp == 4&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '5.png');
        }
        else if(this.temp == 5&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '6.png');
        }
        else if(this.temp == 6&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '7.png');
        }
        else if(this.temp == 7&& (sit == 1)&& a== 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '8.png');
        }
        else if(this.temp == 8&& (sit == 1)&& a== 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '9.png');
        }
        else if(this.temp == 9&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '10.png');
        }
        else if(this.temp == 10&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '11.png');
        }
        else if(this.temp == 11&& (sit == 1)&& a== 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '12.png');
        }
        else if(this.temp == 12&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '13.png');
        }
        else if(this.temp == 13&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '14.png');
        }
		
		//level2
		
		if(this.temp == 14 && (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-1.png');
        }
        else if(this.temp == 15 && (sit == 1)&& a== 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-2.png');
        }
       /* else if(this.temp == 16&& (sit == 1)&& a== 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-3.png');
        }*/
        else if(this.temp == 16&& (sit == 1)&& a== 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-4.png');
        }
        else if(this.temp == 17&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-5.png');
        }
        else if(this.temp == 18&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-6.png');
        }
        else if(this.temp == 19&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-7.png');
        }
        else if(this.temp == 20&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-8.png');
        }
        else if(this.temp == 21&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-9.png');
        }
        else if(this.temp == 22&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-10.png');
        }
        else if(this.temp == 23&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-11.png');
        }
        else if(this.temp == 24&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-13.png');
        }
        else if(this.temp == 25&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-14.png');
        }
        else if(this.temp == 26&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-15.png');
        }
        else if(this.temp == 27&& (sit == 0)&& a!= 1)
        {
            this.pic[a] = new Framework.Sprite(define.imagePath + '2-16.png');
        }
		var PicPosition = {
			x: this.pos.x + 350 * i,
			y: this.pos.y 
		};
        this.pic[a].position = PicPosition;
		this.pic[a].startPos = {x : PicPosition.x - 175, y: PicPosition.y - 36};
		this.pic[a].endPos = { x: PicPosition.x + 175, y: PicPosition.y + 36};
        this.pic[a].draw();
        this.checkans[a] = this.temp;
    };
};// JavaScript Document