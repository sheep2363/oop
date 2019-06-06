//立即執行函式, 並封裝所有變數避免衝突
var loadFrameworkEnd;
(function(){
    //動態依序載入JS
    //ref: http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/01/15/4061.aspx
    var  importJS = function(jsConf, src, lookFor) {
        var headID = document.getElementsByTagName("head")[0]; 
        var newJs = document.createElement('script');
        newJs.type = 'text/javascript';
        newJs.src= jsConf[0].src;
        headID.appendChild(newJs);
        wait_for_script_load(jsConf, function() {
            jsConf.splice(0, 1);
            if(jsConf.length > 0) {
                importJS(jsConf, lookFor);
            }else
            {
                loadFrameworkEnd = true;
            }
        });
    }

    var wait_for_script_load = function(jsConf, callback) {
        var interval = setInterval(function() {
            if (typeof jsConf[0].lookFor === 'undefined') {
                jsConf[0].lookFor = '';
            }

            if (jsConf[0].lookFor === '') {
                clearInterval(interval);
                callback();
            } else if (eval("typeof " + jsConf[0].lookFor) !== 'undefined') {
                    clearInterval(interval);
                    callback();      
                }
            }, 50);
    }

    //陣列和載入JS檔的順序相同, lookFor為在要載入的檔案中, 
    //有用到的全域變數, importJS這個function, 會在找到lookFor的變數後
    //才會繼續loading下一個檔案, 如果沒有需要lookFor, 則以空字串代表
    var frameworklistScript = 
    [
        { src: 'game_sample/lib/config.js'},
        { src: 'game_sample/lib/Record.js'},
        { src: 'game_sample/lib/Replay.js'},
        { src: 'game_sample/lib/EqualCondition.js'},
        { src: 'game_sample/lib/Util.js'},
        { src: 'game_sample/lib/core.js'},
        { src: 'game_sample/lib/DebugInfo.js'},
        { src: 'game_sample/lib/FpsAnalysis.js'},
        { src: 'game_sample/lib/Point.js'},
        { src: 'game_sample/lib/GameObject.js'},
        { src: 'game_sample/lib/Sprite.js'},
        { src: 'game_sample/lib/animationSprite.js'},
        { src: 'game_sample/lib/Scene.js'},
        { src: 'game_sample/lib/ResourceManager.js'},
        { src: 'game_sample/lib/level.js'},
        { src: 'game_sample/lib/Game.js'},
        { src: 'game_sample/lib/MouseManager.js'},
        { src: 'game_sample/lib/KeyBoardManager.js'},
        { src: 'game_sample/lib/TouchManager.js'},
        { src: 'game_sample/lib/gameMainMenu.js'},
        { src: 'game_sample/lib/Audio.js'},
        { src: 'game_sample/lib/Box2dWeb-2.1.a.3.js'},
        { src: 'game_sample/lib/Box2D.js'},
        { src: 'game_sample/lib/circleComponent.js'},
        { src: 'game_sample/lib/polygonComponent.js'},
        { src: 'game_sample/lib/squareComponent.js'},
        { src: 'game_sample/lib/triangleComponent.js'},
        //{ src: 'game_sample/js/loadGame.js'},
    ]
    importJS(frameworklistScript);
    
})();


    
