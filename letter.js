
var letter = function(let){
	this.character = let;
	this.show = false;
	this.letterRender = function(){
		return !(this.show) ? "_" : this.character;
	};
};

module.exports = letter;