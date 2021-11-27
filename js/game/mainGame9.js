function MainGame9()
{
	const gameCanvas = new GameCanvas();
	const snake = new Snake();
	const food1 = new Food();
	const food2 = new Food();
	const score = new Score();
	const gameSound = new GameSound();
	this.tileSize = 20;
	let animationID;
	const canvas = gameCanvas.getCanvas();
	let portal = null;
	
	this.init = function() {
		snake.init();
		gameSound.init();
		food1.update();
		food1.draw();
		food2.update();
		food2.draw();
		
		this.initEventListeners();
		document.querySelector("canvas").style.border = "20px solid red";
		
		animationID = window.setInterval(this.gameLoop.bind(this), 100);
		gameSound.play("bgSound");
	}
	
	
	this.initEventListeners = function() {
		
		// key events
		document.addEventListener("keydown", function(e) {
			switch(e.key)
			{
				case "ArrowRight": if(snake.direction[0] == 0) snake.updateVelocity(1,0); break;
				case "ArrowLeft": if(snake.direction[0] == 0) snake.updateVelocity(-1,0); break;
				case "ArrowDown": if(snake.direction[1] == 0) snake.updateVelocity(0,1); break;
				case "ArrowUp": if(snake.direction[1] == 0) snake.updateVelocity(0,-1); break;
			}
		});
		
		// touch events
		let startingX, startingY, movingX, movingY,dist=40;
		canvas.addEventListener("touchstart", (e)=>{
			e.preventDefault();
			startingX = e.touches[0].clientX;
			startingY = e.touches[0].clientY;
		}, {passive: false});
		
		canvas.addEventListener("touchmove", (e)=>{
			e.preventDefault();
			movingX = e.touches[0].clientX;
			movingY = e.touches[0].clientY;
		}, {passive: false})
		
		canvas.addEventListener("touchend", (e)=>{
			e.preventDefault();
			if(movingX - startingX > dist) {
				if(snake.direction[0] == 0) snake.updateVelocity(1,0);
			}
			else if(movingX - startingX < -dist) {
				if(snake.direction[0] == 0) snake.updateVelocity(-1,0);
			}
			else if(movingY - startingY > dist) {
				if(snake.direction[1] == 0) snake.updateVelocity(0,1);
			}
			else if(movingY - startingY < -dist) {
				if(snake.direction[1] == 0) snake.updateVelocity(0,-1);
			}
		}, {passive: false})
		
	}
	
	
	this.gameLoop = function() {
		if(snake.len == 0)
		{
			this.pauseGame();
			this.gameOver();
			return;
		}
		
		gameCanvas.clearCanvas();
		
		if(portal != null)
		{
			snake.cells.pop();
			let ob = {x:portal.x, y:portal.y};
			snake.cells.unshift(ob);
			snake.x = snake.cells[0].x;
			snake.y = snake.cells[0].y;
			food1.update();
			food1.draw();
			food2.update();
			food2.draw();
			snake.draw();
			portal = null;
			
		}
		else if(this.checkSnakeWallCollision()) {
			
			snake.shrink();
			snake.draw();
			food1.draw();
			food2.draw();
			
			score.totalScore -= 50;
			score.lengthScore--;
			score.updateScoreOnScreen();
			gameSound.play("wallHit");
			
		}
		else if(this.checkSnakeSnakeCollision()) {
			this.pauseGame();
			this.gameOver();
		}
		else if(this.checkSnakeFoodCollision(food1)) {
			portal = food2;
			snake.grow();
			snake.draw();
			
			score.totalScore += 100;
			score.lengthScore++;
			score.foodScore++;
			score.updateScoreOnScreen();
			gameSound.play("foodEat");
		}
		else if(this.checkSnakeFoodCollision(food2)) {
			portal = food1;
			snake.grow();
			snake.draw();
			
			score.totalScore += 100;
			score.lengthScore++;
			score.foodScore++;
			score.updateScoreOnScreen();
			gameSound.play("foodEat");
		}
		else {
			snake.move();
			snake.draw();
			food1.draw();
			food2.draw();
		}
		
		
	}
	
	
	this.checkSnakeWallCollision = function() {
		const x = snake.x+snake.velX, y = snake.y+snake.velY;
		const w = gameCanvas.getWidth(), h = gameCanvas.getHeight();
		if(x<0 || x>=w || y<0 || y>=h)
			return true;
		return false;
	}
	
	this.checkSnakeSnakeCollision = function() {
		const x = snake.x, y = snake.y;
		for(let i=1; i<snake.len; i++)
		{
			const cell = snake.cells[i];
			if(Math.abs(x - cell.x) < this.tileSize && Math.abs(y - cell.y) < this.tileSize)
				return true;
		}
		return false;
	}
	
	this.checkSnakeFoodCollision = function(food) {
		const x = snake.x+snake.velX, y = snake.y+snake.velY;
		if(Math.abs(x - food.x) < this.tileSize && Math.abs(y - food.y) < this.tileSize)
			return true;
		return false;
	}
	
	this.pauseGame = function() {
		window.clearInterval(animationID);
	}
	
	this.gameOver = function() {
		gameCanvas.writeText("Game Over");
	}
	
	
}


