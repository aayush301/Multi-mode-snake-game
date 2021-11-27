function GameCanvas()
{
	const canvas = document.querySelector("canvas");
	const pen = canvas.getContext("2d");
	// let currColor = "#2cff2c";
	let currColor = "blue";
	
	this.setColor = function(color) {
		currColor = color;
	}
	
	this.getWidth = function() {
		return canvas.width;
	}

	this.getHeight = function() {
		return canvas.height;
	}
	
	this.getCanvas = function() {
		return canvas;
	}
	
	this.clearCanvas = function() {
		pen.clearRect(0, 0, canvas.width, canvas.height);
	}
	
	this.drawFillRect = function(x1,y1,x2,y2,color=currColor) {
		const width = x2-x1;
		const height = y2-y1;
		pen.beginPath();
		pen.fillStyle = color;
		pen.fillRect(x1,y1,width,height);
	}
	
	this.drawImage = function(image, sx, sy, width, height, x, y, width, height) {
		pen.drawImage(image, sx, sy, width, height, x, y, width, height);
	}
	
	this.writeText = function(text, x, y) {
		if(!x)
			x = canvas.width/2;
		if(!y)
			y = canvas.height/2;
		
		pen.beginPath();
		pen.font = "bold 30px Nunito";
		pen.fillStyle = "red";
		pen.textAlign = "center"
		pen.fillText(text,x,y);
	}
	
	
}