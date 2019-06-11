// JavaScript Document
var GameMap = function(){
	this.MW = 212;
	this.MH = 72;
	this.tempi = -1;
	this.level = 0;
	this.levelx =[14,14];
    this.v = 0;
    this.endposit ={
		x:350,
		y:500
	};
	this.pos = {
		x:1500,
		y:30
	};
    this.picsvisible = 0;
    this.nextpos = {
        x:1000,
        y:250
    };
	this.position = {
		x:1500,
		y:30
	};
	this.load = function(){//load pic
			this.map = [0,1,2,3,4,5,6,7,8,9,10,11,12,13
						,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
			this.pic = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			
            this.visible = [1,1,1,0,0,0,0,0,0,0,0,0,0,0
							,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//顯示與否
			
			this.pic[0] = new Framework.Sprite(define.imagePath + '1.png');//我
			this.pic[1] = new Framework.Sprite(define.imagePath + '2.png');//密室
			this.pic[2] = new Framework.Sprite(define.imagePath + '3.png');//檢視
			this.pic[3] = new Framework.Sprite(define.imagePath + '4.png');//骷髏堆
			this.pic[4] = new Framework.Sprite(define.imagePath + '5.png');//石堆
			this.pic[5] = new Framework.Sprite(define.imagePath + '6.png');//牆壁
			this.pic[6] = new Framework.Sprite(define.imagePath + '7.png');//門
			this.pic[7] = new Framework.Sprite(define.imagePath + '8.png');//開啟
			this.pic[8] = new Framework.Sprite(define.imagePath + '9.png');//移動到
			this.pic[9] = new Framework.Sprite(define.imagePath + '10.png');//骨頭
			this.pic[10] = new Framework.Sprite(define.imagePath + '11.png');//石頭
			this.pic[11] = new Framework.Sprite(define.imagePath + '12.png');//組合
			this.pic[12] = new Framework.Sprite(define.imagePath + '13.png');//錐子
			this.pic[13] = new Framework.Sprite(define.imagePath + '14.png');//鑰匙
			//level2
			this.pic[14] = new Framework.Sprite(define.imagePath + '2-1.png');//我
			this.pic[15] = new Framework.Sprite(define.imagePath + '2-2.png');//檢視
			//this.pic[16] = new Framework.Sprite(define.imagePath + '2-3.png');//移動到
			this.pic[16] = new Framework.Sprite(define.imagePath + '2-4.png');//開啟
			this.pic[17] = new Framework.Sprite(define.imagePath + '2-5.png');//房間
			this.pic[18] = new Framework.Sprite(define.imagePath + '2-6.png');//辦公桌
			this.pic[19] = new Framework.Sprite(define.imagePath + '2-7.png');//盾牌
			this.pic[20] = new Framework.Sprite(define.imagePath + '2-8.png');//木門
			this.pic[21] = new Framework.Sprite(define.imagePath + '2-9.png');//鐵門
			this.pic[22] = new Framework.Sprite(define.imagePath + '2-10.png');//寶相
			this.pic[23] = new Framework.Sprite(define.imagePath + '2-11.png');//水溝蓋
			//this.pic[25] = new Framework.Sprite(define.imagePath + '2-12.png');//提示紙
			this.pic[24] = new Framework.Sprite(define.imagePath + '2-13.png');//小鑰匙
			this.pic[25] = new Framework.Sprite(define.imagePath + '2-14.png');//鐵球
			this.pic[26] = new Framework.Sprite(define.imagePath + '2-15.png');//寶劍
			this.pic[27] = new Framework.Sprite(define.imagePath + '2-16.png');//鐵鍬
			//this.pics = new Framework.Sprite(define.imagePath + 'blue.png');//
			this.sit = [0,0,1,0,0,0,0,1,1,0,0,1,0,0
						,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0];
		
	};
	this.initialize = function(){
	};
	this.update = function(){
		if(this.tempi != -1){
			this.pic[this.tempi].draw();
		}
	};
	this.move = function(newX, newY,a){ //讓選項跟著滑鼠一起移動
		
		var PicPosition = {
			x: newX,
			y: newY
		};
		this.position = PicPosition;
		this.pic[a].position = PicPosition;
		this.pic[a].startPos = {x : newX - 106, y: newY - 36};
		this.pic[a].endPos = { x: newX + 106, y: newY + 36};
		this.tempi = a;
		this.pic[this.tempi].update();
	}
    this.newone = function(a1) //更新關卡
    {
        if(a1 != 0){
			console.log(this.level);
			this.visible = [0,0,0,0,0,0,0,0,0,0,0,0,0,0
							,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
       
    }
	this.draw = function(ctx){
       
		var start = parseInt((this.level == 0)?0:this.levelx[0]);//關卡1時顯示關卡1的選項,關卡2時顯示關卡2的
		var end = this.levelx[this.level] + parseInt((this.level == 0)?0:this.levelx[1]);
		console.log("start:" + start + " end:" + end);
        console.log(this.level);
        /*if(this.v == 1){
            this.visible = [0,0,0,0,0,0,0,0,0,0,0,0,0,0
							,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
           
        }
        else
        {*/
            for(i =start ; i < end ; i++)
            {
                if(this.tempi != -1){//如果有在移動的選項
                    if(i == this.tempi){
                        var PicPosition = {
                        x: this.position.x,
                        y: this.position.y
                        };
                        this.pic[i].position = PicPosition;
                        this.pic[i].startPos = {x : PicPosition.x - 106, y: PicPosition.y - 36};
                        this.pic[i].endPos = { x: PicPosition.x + 106, y: PicPosition.y + 36};
                        if(this.visible[i] == 1){
                            this.pic[i].draw(ctx);
                        }
                    }
                    else{//其餘的選項
                        var PicPosition = {
                        x: this.pos.x,
                        y: this.pos.y + 60 * (i - parseInt((this.level == 0)?0:this.levelx[1]))
                        };
                        this.pic[i].position = PicPosition;
                        this.pic[i].startPos = {x : PicPosition.x - 106, y: PicPosition.y - 36};
                        this.pic[i].endPos = { x: PicPosition.x + 106, y: PicPosition.y + 36};
                        if(this.visible[i] == 1){
                            this.pic[i].draw(ctx);
                        }
                    }
                }
                else{//沒有任何在移動的選項
                    var PicPosition = {
                        x: this.pos.x,
                        y: this.pos.y + 60 * (i - parseInt((this.level == 0)?0:this.levelx[1]))
                    };
                    this.pic[i].position = PicPosition;
                    this.pic[i].startPos = {x : PicPosition.x - 106, y: PicPosition.y - 36};
                    this.pic[i].endPos = { x: PicPosition.x + 106, y: PicPosition.y + 36};
                    if(this.visible[i] == 1){
                        this.pic[i].draw(ctx);
                    }
                }
           // }
        }
        
		
        
	};
	this.v = function(){//test function
		//if(this.v == 1){
            this.visible = [0,0,0,0,0,0,0,0,0,0,0,0,0,0
							,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
           
        console.log("visible=0");
	};
	this.isInside = function(x, y){//判斷滑鼠是否在選項內
		var start = parseInt((this.level == 0)?0:this.levelx[0]);
		var end = this.levelx[this.level] + parseInt((this.level == 0)?0:this.levelx[1]);
		console.log(x + " " +y);
		for(i =start;i<end;i++)
		{
			console.log("pic "+i+" :"+this.pic[i] );
			if (this.pic[i].startPos.x + 212  > x &&
				x + 50  > this.pic[i].startPos.x &&
				this.pic[i].startPos.y + 72 > y &&
				y + 30 > y
			)
			{
				return i;
			}
		}
		return -1;
	}
};
