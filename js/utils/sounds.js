function GameSound()
{
	let foodEat;
	this.init = function() {
		bgSound = new Audio("sounds/bg-sound.mp3")
		foodEat = new Audio('sounds/food-eat.wav');
		wallHit = new Audio('sounds/wall-hit.wav');
		bgSound.loop = true;
		bgSound.volume = 0.5;
	};
	
	this.play = function(type) {
		if(type == "bgSound")
		{
			bgSound.pause();
			bgSound.currentTime = 0;
			bgSound.play();
		}
		else if(type == "foodEat")
		{
			foodEat.pause();
			foodEat.currentTime = 0;
			foodEat.play();
		}
		else if(type == "wallHit")
		{
			wallHit.pause();
			wallHit.currentTime = 0;
			wallHit.play();
		}
	}
}
