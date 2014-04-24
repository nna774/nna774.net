var lifepng = {
    'width': 12,
    'padWidth': 2
};

onload = function(){
    var dataURIPATH = "data:image/png;base64,";
    var width = lifepng.width;
    var padWidth = lifepng.padWidth;
    var canvas = document.getElementById('board');
    if (canvas.getContext('2d')) {
        var context = canvas.getContext('2d');
        var dead = new Image();
        dead.src = dataURIPATH + "iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAADklEQVQY02NgGAVDFQAAAbwAAS4U1UAAAAAASUVORK5CYII=";
        var alive = new Image();
        alive.src = dataURIPATH + "iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAQMAAABsu86kAAAABlBMVEUAAABnojfMcx8OAAAAH0lEQVQIW2Pk/8gon8ho38hYn8j4/yMC1YMFgVL8HwH74g4NhAvnhAAAAABJRU5ErkJggg==";
        var horizon = new Image();
        horizon.src = dataURIPATH + "iVBORw0KGgoAAAANSUhEUgAAAAwAAAACCAIAAADjHarAAAAAE0lEQVQI12Pcd9OWgRBgYiACAACE/wHYb+fiwwAAAABJRU5ErkJggg==";
        var vertical = new Image();
        vertical.src = dataURIPATH + "iVBORw0KGgoAAAANSUhEUgAAAAIAAAAMCAIAAADH3vsDAAAAFUlEQVQI12Pcd9OWgYGBiYGBgWoUAJqtAewHHgKkAAAAAElFTkSuQmCC";
        var padding = new Image();
        padding.src = dataURIPATH + "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAFklEQVQI12Pcd9OWgYGBiYGBgYGBAQAWmwHYaTE5PAAAAABJRU5ErkJggg==";
        var Loader = function(expectedCnt, callback){
            var cnt = 0;
            return function(){
                if(++cnt === expectedCnt){ callback(); }
            };
        };
        var loader = new Loader(5, function(){
            document.getElementById("status").innerText = "準備完了";
            document.getElementById("status").style.display="none";
        });
        dead.onload = loader;
        alive.onload = loader;
        horizon.onload = loader;
        vertical.onload = loader;
        padding.onload = loader;

        lifepng.draw = function (){
            var strs = document.getElementById("input").value.split("\n");
            var h = strs.length;
            var maxW = 0;
            var i = 0, j = 0;
            for(i=0; i < strs.length; ++i){
                maxW = Math.max(maxW, strs[i].length);
            }
            document.getElementById("board").width = maxW * width + (maxW-1) * padWidth;
            document.getElementById("board").height = h * width + (h-1) * padWidth;

            for(i=0; i < h; ++i){
                for(j=0; j < maxW; ++j){
                    if(strs[i][j] === "1"){
                        context.drawImage(alive, j * (width + padWidth), i * (width + padWidth));
                    }else{
                        context.drawImage(dead , j * (width + padWidth), i * (width + padWidth));
                    }
                    if(j < maxW - 1){
                        context.drawImage(vertical, (j+1) * width + j * padWidth, i * (width + padWidth));
                    }
                }
                if(i < h - 1){
                    for(j=0; j < maxW; ++j){
                        context.drawImage(horizon , j * (width + padWidth), (i + 1) * width + i * padWidth);
                        if(j < maxW - 1){
                            context.drawImage(padding, (j+1) * width + j * padWidth, (i + 1) * width + i * padWidth);
                        }
                    }
                }
            }
        };
    }
};

lifepng.next = function (){
    function sumMoore(map, i, j){
        var sum = 0;
        for(var k=i-1; k <= i+1; ++k){
            if(typeof map[k] !== "undefined"){
                if(map[k][j-1] === "1") { ++sum; }
                if(map[k][ j ] === "1" && k !== i) { ++sum; }
                if(map[k][j+1] === "1") { ++sum; }
            }
        }
        
        return sum;
    }
    
    var strs = document.getElementById("input").value.split("\n");
    var map = [];
    var h = strs.length;
    var maxW = 0;
    var i = 0, j = 0;
    for(i=0; i < strs.length; ++i) { maxW = Math.max(maxW, strs[i].length); }
    for(i=0; i < h; ++i) { map[i] = []; }

    for(i=0; i < h; ++i){
        for(j=0; j < maxW; ++j){
            var sum = sumMoore(strs, i, j);
            if(strs[i][j] === "1"){
                if(sum === 2 || sum === 3 ){ map[i][j] = '1'; }
                else { map[i][j] = '0'; }
            }
            else{
                if(sum === 3) { map[i][j] = '1'; }
                else { map[i][j] = '0'; }
            }
        }
    }
    for(i=0; i < h; ++i) { map[i] = map[i].join(""); }
    document.getElementById("input").value = map.join("\n");
    this.draw();
};

lifepng.randomize = function(){
    var strs = document.getElementById("input").value.split("\n");
    var map = [];
    var h = strs.length;
    var maxW = 0;
    var i = 0, j = 0;
    for(i=0; i < strs.length; ++i) { maxW = Math.max(maxW, strs[i].length); }
    for(i=0; i < h; ++i) { map[i] = []; }
    for(i=0; i < h; ++i){
        for(j=0; j < maxW; ++j) {
            map[i][j] = !(Math.random()+0.5|0)+0;
        }
    }
    for(i=0; i < h; ++i) { map[i] = map[i].join(""); }
    document.getElementById("input").value = map.join("\n");
    this.draw();
};
