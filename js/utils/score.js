function Score()
{
	this.totalScore=0;
	this.lengthScore=4;
	this.foodScore=0;
	
	this.updateScoreOnScreen = function() {
		document.querySelector("#total-score").innerHTML = this.totalScore;
		document.querySelector("#length-score").innerHTML = this.lengthScore;
		document.querySelector("#food-score").innerHTML = this.foodScore;
	}
	
}