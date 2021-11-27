function Food()
{
	const gameCanvas = new GameCanvas();
	this.x;
	this.y;
	this.tileSize = 20;
	let img = new Image();
	img.src = "images/apple.png";
	
	this.getRandomPoint = function() {
		let cols = Math.floor(gameCanvas.getWidth() / this.tileSize);
		let rows = Math.floor(gameCanvas.getHeight() / this.tileSize);
		let x = Math.floor(Math.random()*cols) * this.tileSize;
		let y = Math.floor(Math.random()*rows) * this.tileSize;
		return {x,y};
	}
	
	this.update = function() {
		let {x,y} = this.getRandomPoint();
		this.x = x;
		this.y = y;
	}
	
	this.draw = function() {
		gameCanvas.drawImage(img,0,0,img.width,img.height,this.x,this.y,this.tileSize,this.tileSize)
	}
	
}