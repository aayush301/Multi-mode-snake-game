function SnakeCheesy()
{
	const gameCanvas = new GameCanvas();
	
	this.x;
	this.y;
	this.velX;
	this.velY;
	this.len=4;
	this.direction;
	this.cells = [];		// head is at first position of cells array
	this.tileSize = 20;
	
	this.init = function() {
		this.len;
		this.x = 100;
		this.y = 40;
		this.velX = this.tileSize;
		this.velY = 0;
		this.direction = [1,0]
		
		for(let i=0; i<this.len; i++)
		{
			const cell = {
				x: this.x-this.tileSize*i,
				y: this.y
			};
			this.cells.push(cell);
		}
		
	}
	
	this.updateVelocity = function(dx,dy) {
		this.direction = [dx,dy];
		this.velX = dx*this.tileSize;
		this.velY = dy*this.tileSize;
	}
	
	this.move = function() {
		
		this.x = this.x + this.velX;
		this.y = this.y + this.velY;
		
		const cell = {
			x: this.x,
			y: this.y
		};
		this.cells.pop();
		this.cells.unshift(cell);
	}
	
	this.moveCircular = function() {
		
		const w = gameCanvas.getWidth();
		const h = gameCanvas.getHeight();
		this.x = (this.x + this.velX + w)%w;
		this.y = (this.y + this.velY + h)%h;
		
		const cell = {
			x: this.x,
			y: this.y
		};
		this.cells.pop();
		this.cells.unshift(cell);
	}
	
	this.draw = function(counter) {
		
		let cell = this.cells[0];
		gameCanvas.drawFillRect(cell.x, cell.y, cell.x+this.tileSize, cell.y+this.tileSize);
		
		let start;
		if(counter == 0)
			start = 2;
		else
			start = 1;
		for(let i=start; i<this.len; i+=2)
		{
			cell = this.cells[i];
			gameCanvas.drawFillRect(cell.x, cell.y, cell.x+this.tileSize, cell.y+this.tileSize);
		}
	}
	
	this.grow = function() {
		this.len++;
		this.x = this.x + this.velX;
		this.y = this.y + this.velY;
		const cell = {
			x: this.x,
			y: this.y
		};
		this.cells.unshift(cell);
	}
	
	this.shrink = function() {
		this.len--;
		this.cells.pop();
	}
	
	
}
