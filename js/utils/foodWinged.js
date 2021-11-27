function FoodWinged()
{
	const gameCanvas = new GameCanvas();
	this.x;
	this.y;
	this.velX;
	this.velY;
	this.tileSize = 20;
	let img = new Image();
	img.src = "images/apple.png";
	
	this.init = function() {
		let {x,y} = this.getRandomPoint();
		this.x = x;
		this.y = y;
		console.log(gameCanvas.getWidth());
		this.velX = 5;
		this.velY = 5;
	}
	
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
	
	this.moveBounced = function() {
		
		let x = this.x + this.velX;
		let y = this.y + this.velY;
		
		const w = gameCanvas.getWidth();
		const h = gameCanvas.getHeight();
		
		if(x+this.tileSize>w || x<0)
			this.velX = -this.velX;
		if(y+this.tileSize>h || y<0)
			this.velY = -this.velY;
		
		this.x = this.x + this.velX;
		this.y = this.y + this.velY;
	}
	
	this.draw = function() {
		gameCanvas.drawImage(img,0,0,img.width,img.height,this.x,this.y,this.tileSize,this.tileSize)
	}
	
}