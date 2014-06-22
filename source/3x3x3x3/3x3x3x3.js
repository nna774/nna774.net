var Board = function(){

    this.str = function(i, j, pl) { return "<span onclick=\"board.click(" + i + ", " + j + ", " + pl + ")\">■</span>"; };

    this.set = function(_pl){

	var grid = new Array(9);
	for(var i = 0; i < 9; ++i){
	    var tmp = new Array(9);
	    for(var j = 0; j < 9; ++j){
		tmp[j] = this.str(i, j, _pl);
	    }
	    grid[i] = tmp;
	}
	return grid;
    };
    
    var grid = this.set("true");
    grid[3][3] = grid[3][4] = grid[3][5] = "　";
    grid[4][3] = grid[4][4] = grid[4][5] = "　";
    grid[5][3] = grid[5][4] = grid[5][5] = "　";

    this.initGrid = grid;
    this.map = function (grid){
	for(var i = 0; i < 9; ++i){
	    for(var j = 0; j < 9; ++j){
		document.getElementById("r" + (i % 3) + "_c" + (j % 3) + "_G" + Math.floor(i / 3) +  "_" + Math.floor(j / 3)).innerHTML = grid[i][j];
	    }
	}
    };
    this.click = function(i, j, pl){
	var grid = new Array(9);
	for(var k = 0; k < 9; ++k){
	    var tmp = new Array(9);
	    for(var l = 0; l < 9; ++l){
		var str = this.str(k, l, pl ? "false": "true");
		if(i % 3 != Math.floor(k / 3) || j % 3 != Math.floor(l / 3)) {
		    str = "　";
		}
		if(this._grid[k][l]) {
		    str = this._grid[k][l];
		}
		tmp[l] = str;
	    }
	    grid[k] = tmp;
	}

	grid[i][j] = this._grid[i][j] = pl ? "o" : "x";
	
	this.map(grid);
    };
    this._grid = new Array(9);

    this.win = function(grid){
	
    }
};

var board = new Board();

onload = function(){
    board.map(board.initGrid);
    for(var i=0; i < 9; ++i){
	var tmp = new Array(9);
	board._grid[i] = tmp;
    }
};
