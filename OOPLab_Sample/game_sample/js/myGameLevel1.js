var drag = false;
var K;
var Kx,Ky;
var x0,y0;
var level = 0;
var MyGame = Framework.Class(Framework.Level , {
	load: function(){
		
	    /*var characterPosition;

        this.isStop = false;
        this.isPlayed = false;
		*/
		/*
        this.clock = new Framework.Sprite(define.imagePath + 'text.png');
        this.clock.scale = 0.3;
        this.clock.position = {
            x: 0,
            y: 0
        };
		
		/*this.pic = new Framework.Sprite(define.imagePath + '169.bmp');
        this.pic.position = {
            x: 100,
            y: 100
        };
		this.position ={
			x:100,
			y:100
		}
		this.rotation = 0;
		*/
		
		/*this.practice = new Practice();
		this.practice.load();
		this.rootScene.attach(this.practice.pic);*/
		
        /*this.about = new About();
        this.about.load();
        this.rootScene.attach(this.about);
		*/
		//load所需物件
        this.background = new Background();
        this.background.load();
        this.rootScene.attach(this.background);
        
        
        
        this.textbox = new Textbox();
		this.textbox.load();
		this.rootScene.attach(this.textbox);
        
		this.gameMap = new GameMap();
		this.gameMap.load();
		this.rootScene.attach(this.gameMap);
		
      
		
		this.answer = new Answer();
		this.answer.load();
		this.rootScene.attach(this.answer);
		
        
        
        
		/*
		
        characterPosition = {x: 0, y: -1138 * this.clock.scale};
        this.secondHand = new Framework.Sprite(define.imagePath + 'secondHand.jpg'); 
        this.firen = new Character(define.imagePath + 'firen.png', {position: characterPosition, run: {from: 20, to: 22}, beHit: {from:30, to: 35}, hit: {from: 10, to: 13}}); 
        this.freeze = new Character(define.imagePath + 'freeze.png', {position: characterPosition, scale: 1, run: {from: 29, to: 27}, beHit: {from:39, to: 35}, hit: {from: 19, to: 16}});

        this.clockCenter = new Framework.Scene();
        this.clockCenter.position = {
            x: -10.5 * this.clock.scale,
            y: 51 * this.clock.scale
        };

        this.clockCenterNeg = new Framework.Scene();
        this.clockCenterNeg.position = {
            x: -10.5 * this.clock.scale,
            y: 51 * this.clock.scale
        };

        this.secondHand.position = {
            x: 0,
            y: -100
        };

        this.wholeClock = new Framework.Scene();
        this.wholeClock.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };


        this.secondHandRotationRate = 0.3;
        this.wholeClock.attach(this.clock);
        this.clockCenter.attach(this.secondHand);
        this.clockCenter.attach(this.firen.sprite);
        this.clockCenterNeg.attach(this.freeze.sprite);
        this.wholeClock.attach(this.clockCenterNeg); 
        this.wholeClock.attach(this.clockCenter);                    
        this.rootScene.attach(this.wholeClock);

        //繪製Sprite的boundry (Debug用)
        this.firen.sprite.isDrawBoundry = true;
        this.clock.isDrawBoundry = true;*/

        //載入要被播放的音樂清單
        //資料夾內只提供mp3檔案, 其餘的音樂檔案, 請自行轉檔測試
        this.audio = new Framework.Audio({
            /*kick: {
                mp3: define.musicPath + 'Hot_Heat.mp3',
                //ogg: define.musicPath + 'kick2.ogg',
                //wav: define.musicPath + 'kick2.wav'
            }, song1:{
                mp3: define.musicPath + 'NTUT_classic.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            },*/ song2:{
                mp3: define.musicPath + 'new.mp3',
                //ogg: define.musicPath + 'The_Messenger.ogg',
                //wav: define.musicPath + 'The_Messenger.wav'
            }
        });

        //播放時, 需要給name, 其餘參數可參考W3C
        this.audio.play({name: 'song2', loop: true});

        this.rectPosition = { 
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            y: Framework.Game.getCanvasHeight() / 2 - 90
        };
		
		this.position = {
			x: 100,
			y: 100
		}
		this.rotation = 0;
	},

    initialize: function() {
        
                           
    },

    update: function() {
		
        var game = this;
        //this.rootScene.update(); 
		//this.position.x --;
		//this.rotation++;
		//this.pic.position = this.position;
		//this.pic.rotation = this.rotation;
		//this.practice.update();
		
        //以下為當被攻擊時會停下來, 並且當被攻擊的動畫播放完時便繼續跑的Scenario
        /*if(this.firen.collide(this.freeze) && !this.isStop && !this.isPlayed) {
            this.isStop = true;
            this.isPlayed = true;
            //當碰攻擊時, 播放音效(可一次播放多首音樂)
            this.audio.play({name: 'kick'});
            this.firen.hit(function() {
                game.freeze.beHit(function() {
                    game.isStop = false;
                    game.freeze.run();
                });
                game.firen.run();
            });
            
        }
        else if(!this.firen.collide(this.freeze)){
            this.isPlayed = false;
            this.clockCenter.rotation += this.secondHandRotationRate;
            this.clockCenterNeg.rotation = -this.clockCenter.rotation;
        }
        else if(this.firen.collide(this.freeze) && !this.isStop)
        {
            this.clockCenter.rotation += this.secondHandRotationRate;
            this.clockCenterNeg.rotation = -this.clockCenter.rotation;
        }*/
        //以上為當被攻擊時會停下來, 並且當被撞到的動畫播放完時便繼續跑的Scenario


        //this.isPlayHit = this.firen.collide(this.freeze)                               
    },

    draw:function(parentCtx){
        /*//this.rootScene.draw();
		//this.pic.draw();
        //可支援畫各種單純的圖形和字
        parentCtx.fillStyle = (this.secondHandRotationRate > 0)?'green':'red'; 
        parentCtx.fillRect(this.rectPosition.x , this.rectPosition.y, 260, 90);  
        parentCtx.font = '65pt bold';
        parentCtx.fillStyle = 'white';
        parentCtx.textBaseline = 'top';
        parentCtx.textAlign = 'center';
        parentCtx.fillText('Click Me', this.rectPosition.x + 130, this.rectPosition.y, 260);*/
         
        
    },

    keydown:function(e, list){
		
        /*Framework.DebugInfo.Log.warning(e.key);
		this.practice.keydown(e,list);
        if(e.key === 'Numpad +' || e.key === '=') {
            this.secondHandRotationRate += 0.05;
        }

        if(e.key === 'Numpad -' || e.key === '-') {
            this.secondHandRotationRate -= 0.05;
        }

        if(e.key === 'Pause/Break') {
            //AnimationSprite支援停止正在播放的圖片
            this.firen.sprite.stop();
        }

        if(e.key === 'F5') {
            //AnimationSprite可以恢復暫停正在播放的圖片
            this.firen.sprite.resume();
        }

        if(e.key === 'Enter') {
            if(!this.isFullScreen) {
                Framework.Game.fullScreen();
                this.isFullScreen = true;
            } else {
                Framework.Game.exitFullScreen();
                this.isFullScreen = false;
            }
            
        }*/
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        //this.click({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    },
	
    mouseup: function(e) {
        drag = false;//拖拉用
		console.log("mouseup  drag = "+drag);
		this.gameMap.tempi = -1;
		//e.preventDefault();
    },

    mousedown: function(e) {
        //console.log為Browser提供的function, 可以在debugger的console內看到被印出的訊息                    
        if (e) {
            console.log(e.x, e.y);
        }
        drag = true;//拖拉用
    },

    mousemove: function(e) {
	  if(drag)//拖拉時去判斷是否在選項內,並讓選項跟著移動
	  {
		 console.log(this.gameMap.isInside(e.x,e.y));
		 if(this.gameMap.isInside(e.x,e.y) != -1){
			this.gameMap.move(e.x, e.y,this.gameMap.isInside(e.x,e.y));
		 }
	  }
	},
	
    click: function (e) {
		console.log("click  drag = " + drag);
		if(e){
		let x = e.x;
		let y = e.y;
		//1
	    console.log(1);
		if(this.gameMap.isInside(x,y) != -1){//讀取現在移動的選項並傳送到answer
            this.answer.temp = this.gameMap.isInside(x,y);
        }
		else{
			this.answer.temp = -1;
		}
		
        //console.log(this.gameMap.sit[this.answer.temp]);
		//2
		console.log(2);
		if(this.answer.isInside(x,y) != -1){//判斷選項及答案的格子是否有碰在一起
			//3
			console.log(3);
            console.log(this.textbox.nowpic);
			this.answer.redraw(this.answer.isInside(x,y),this.gameMap.sit[this.answer.temp]);
			var check = 0;
			for(let i = 0 ; i < 3 ; i ++){
				if(this.answer.checkans[i] == -1 ){
                    console.log(4);
					break;
				}
				if( i == 2){
                    console.log(5);
					check =1;
				}
		     }
		}
         console.log(46);
        
        if(x < 180 && x + 30 > 100 && y < 536 && y+30 > 500)//返回鍵
        {
            this.background.back = 1;
            console.log("return");
            if(this.background.back == 1)
            {
                Framework.Game.goToPreviousLevel();
                this.background.back = 0;
            }
            
        }
        if(check == 1){//如果三個答案格子內都有選項了
            this.textbox.redraw(this.answer.checkans);//檢查答案
			console.log(e.x  + " " + e.y);
			console.log("nowpic: "+this.textbox.nowpic);
			if(this.textbox.nowpic == 2){//有答對的就換劇情及顯示新選項
                
				this.gameMap.visible[3] =1;
				this.gameMap.visible[4] =1;
				this.gameMap.visible[5] =1;
				this.gameMap.visible[6] =1;
				this.gameMap.visible[7] =1;
				this.gameMap.visible[8] =1;
				this.gameMap.draw();
				
			}
			else if(this.textbox.nowpic == 9)
			{
				this.gameMap.visible[9] =1;
				this.gameMap.visible[11] =1;
				this.gameMap.draw();
			}
			else if(this.textbox.nowpic == 8)
			{
				this.gameMap.visible[10] =1;
				this.gameMap.visible[11] =1;
				this.gameMap.draw();
			}
			else if(this.textbox.nowpic == 11)
			{
				this.gameMap.visible[12] =1;
				this.gameMap.draw();
			}
			else if(this.textbox.nowpic == 12)
			{
				this.gameMap.visible[13] =1;
				this.gameMap.draw();
			}
			else if(this.textbox.nowpic == 13)//破第一關時換關卡
			{
                this.gameMap.picsvisible =1;
              
                this.textbox.nowpic = 14;
				level = 1;
				this.gameMap.level = 1;
                this.background.level = 1;
                this.background.draw();
                this.gameMap.newone(level);
               
				this.gameMap.tempi = -1;
                //this.textbox.level = 1;
                
                this.textbox.draw();
				this.gameMap.draw();
                this.answer.re = 1;
                this.answer.draw();
			}

            else if(this.textbox.nowpic == 15)
			{
               this.gameMap.visible[18] =1;
               this.gameMap.visible[19] =1;
               this.gameMap.visible[20] =1;
               this.gameMap.visible[21] =1;
               this.gameMap.visible[22] =1;
               this.gameMap.visible[23] =1;
				this.gameMap.draw();
			}
            else if(this.textbox.nowpic == 19)
			{
               this.gameMap.visible[24] =1;
               
				this.gameMap.draw();
			}
             else if(this.textbox.nowpic == 21)
			{
               this.gameMap.visible[25] =1;
               
				this.gameMap.draw();
			}
            else if(this.textbox.nowpic == 23)
			{
               this.gameMap.visible[26] =1;
               
				this.gameMap.draw();
			}
             else if(this.textbox.nowpic == 25)
			{
               this.gameMap.visible[27] =1;
               
				this.gameMap.draw();
			}
            else if(this.textbox.nowpic == 27)//結束時顯示成功畫面及關於我們的資訊
			{
                console.log("27-");
				
                this.gameMap.draw();
				
				level = 0;
				this.gameMap.level = 0;
                this.background.level = 0;
                this.background.draw();
                this.gameMap.newone(level);
               
				this.gameMap.tempi = -1;
                //this.textbox.level = 1;
                
                this.textbox.draw();
				this.gameMap.draw();
                this.answer.re = 1;
                this.answer.draw();
				
				this.gameMap.v();
			
				console.log("v=0 and draw");
				this.gameMap.update();
				console.log(this.gameMap.isInside(x,y) + " " +this.gameMap.visible[this.gameMap.isInside(x,y)]);
				this.background.success = 1;
				this.background.draw();
			}
			//console.log(this.gameMap.visible);
        }
		}
        /*if (!this.rectPosition) {
            return;
        }  */
        
        if(e.x >= this.rectPosition.x && e.x <= this.rectPosition.x + 260 && e.y >= this.rectPosition.y && e.y <= this.rectPosition.y + 90) {
            if(!this.isClockStop) {
                this.secondHandRotationRate = 0;
                this.isClockStop = true;
                //Audio可以一次暫停所有的音樂
               // this.audio.pauseAll();
            } else {
                this.isClockStop = false;
                this.secondHandRotationRate = 0.3;
                //Audio也可以針對一首歌進行操作(繼續播放)
                this.audio.resume('song2');
            }
        } /*else if(e.x >= this.clock.upperLeft.x && e.x <= this.clock.lowerRight.x && e.y >= this.clock.upperLeft.y && e.y <= this.clock.lowerRight.y) {
            //由於Click Me在太小的螢幕的情況下會蓋到Clock, 導致點擊Click Me時, 會回到前一個Level,
            //故使用else if, 並優先選擇Click Me會觸發的條件
           // this.audio.stopAll();
            Framework.Game.goToPreviousLevel();            
            return;
        }*/
    },
});