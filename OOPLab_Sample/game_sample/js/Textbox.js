// JavaScript Document
var Textbox = function(){
	this.MW = 1447;
	this.MH = 415;
	this.position = {
		x:690,
		y:750
	};
    this.level = 0;
	this.map = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
	this.pic = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	this.nowpic = -1;
	this.load = function(){
		this.pic[0] = new Framework.Sprite(define.imagePath + 'bottom.png');
		this.pic[1] = new Framework.Sprite(define.imagePath + 'bottom1.png');
		this.pic[2] = new Framework.Sprite(define.imagePath + 'bottom2.png');
		this.pic[3] = new Framework.Sprite(define.imagePath + 'bottom3.png');
		this.pic[4] = new Framework.Sprite(define.imagePath + 'bottom4.png');
		this.pic[5] = new Framework.Sprite(define.imagePath + 'bottom5.png');
		this.pic[6] = new Framework.Sprite(define.imagePath + 'bottom6.png');
		this.pic[7] = new Framework.Sprite(define.imagePath + 'bottom7.png');
		this.pic[8] = new Framework.Sprite(define.imagePath + 'bottom8.png');
		this.pic[9] = new Framework.Sprite(define.imagePath + 'bottom9.png');
		this.pic[10] = new Framework.Sprite(define.imagePath + 'bottom10.png');
		this.pic[11] = new Framework.Sprite(define.imagePath + 'bottom11.png');
		this.pic[12] = new Framework.Sprite(define.imagePath + 'bottom12.png');
		this.pic[13] = new Framework.Sprite(define.imagePath + 'bottom13.png');
        this.pic[14] = new Framework.Sprite(define.imagePath + 'bottom2-1.png');
		this.pic[15] = new Framework.Sprite(define.imagePath + 'bottom2-2.png');
		this.pic[16] = new Framework.Sprite(define.imagePath + 'bottom2-3.png');
		this.pic[17] = new Framework.Sprite(define.imagePath + 'bottom2-4.png');
		this.pic[18] = new Framework.Sprite(define.imagePath + 'bottom2-5.png');
		this.pic[19] = new Framework.Sprite(define.imagePath + 'bottom2-6.png');
		this.pic[20] = new Framework.Sprite(define.imagePath + 'bottom2-7.png');
		this.pic[21] = new Framework.Sprite(define.imagePath + 'bottom2-8.png');
		this.pic[22] = new Framework.Sprite(define.imagePath + 'bottom2-9.png');
		this.pic[23] = new Framework.Sprite(define.imagePath + 'bottom2-10.png');
		this.pic[24] = new Framework.Sprite(define.imagePath + 'bottom2-11.png');
		this.pic[25] = new Framework.Sprite(define.imagePath + 'bottom2-12.png');
		this.pic[26] = new Framework.Sprite(define.imagePath + 'bottom2-13.png');
		this.pic[27] = new Framework.Sprite(define.imagePath + 'bottom2-14.png');
	};
	this.initialize = function(){
	};
	this.update = function(){
		this.draw();
	};
    this.newone=function(a1)
    {
        if(a1 == 0)
        {
            this.pic[1].position = this.position;
			this.pic[1].draw(ctx);
        }
     
    }
	this.draw = function(ctx){
		if(this.nowpic == 27){}
        else if(this.nowpic != -1){
			console.log(this.nowpic);
            console.log(this.level);
			this.pic[this.nowpic].position = this.position;
			this.pic[this.nowpic].draw();
		}
		else{
            if(this.level == 0)
            {
                this.pic[1].position = this.position;
			this.pic[1].draw(ctx);
            }
            else
            {
            this.pic[14].position = this.position;
			this.pic[14].draw(ctx);
            }
			
		}
	};
    this.ans = [
      {n1:0,v1:2 ,n2:1,bot:2},
      {n1:0,v1:8 ,n2:6,bot:3},
      {n1:0,v1:8 ,n2:4,bot:4},
      {n1:0,v1:8 ,n2:3,bot:5},
      {n1:0,v1:8 ,n2:5,bot:6},
      {n1:0,v1:2 ,n2:6,bot:7},
      {n1:0,v1:2 ,n2:4,bot:8},
      {n1:0,v1:2 ,n2:3,bot:9},
      {n1:0,v1:2 ,n2:5,bot:10},
      {n1:10,v1:11 ,n2:9,bot:11},
      {n1:9,v1:11 ,n2:10,bot:11},
      {n1:12,v1:7 ,n2:5,bot:12},
      {n1:13,v1:7 ,n2:6,bot:13},
      
      {n1:14,v1:15 ,n2:17,bot:15},
      
      {n1:14,v1:15 ,n2:18,bot:17},
	  
      {n1:14,v1:16,n2:19,bot:19},
      
      {n1:24,v1:16 ,n2:21,bot:21},
   
      {n1:25,v1:16 ,n2:20,bot:23},
    
      {n1:26,v1:16,n2:22,bot:25},

      {n1:27,v1:16 ,n2:23,bot:27}
    ];
    this.redraw = function(temp){
        for(let i = 0;i<this.ans.length;i++){
            console.log(this.ans[i].n1);
            console.log(this.ans[i].v1);
            console.log(this.ans[i].n2);
            if(temp[0] == this.ans[i].n1){
                if(temp[1] == this.ans[i].v1){
                    if(temp[2] == this.ans[i].n2){
                        this.pic[this.ans[i].bot].position = this.position;
						this.nowpic = this.ans[i].bot;
                        this.update();
                    }
                }
            }
        }
      
    }
    
};