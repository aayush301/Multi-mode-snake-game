function GameInit()
{	
	this.init = function() {
		
		document.querySelectorAll("[id|='start-game']").forEach(ele => {
			ele.addEventListener("click", ()=>{
				document.querySelector("#game-modes-wrapper").style.display = "none";
				document.querySelector("#game-wrapper").style.display = "block";
			})
		})
		
		document.querySelector("#start-game-1").addEventListener("click", ()=>{
			const game = new MainGame1();
			game.init();
		})
		
		document.querySelector("#start-game-2").addEventListener("click", ()=>{
			const game = new MainGame2();
			game.init();
		})

		document.querySelector("#start-game-3").addEventListener("click", ()=>{
			const game = new MainGame3();
			game.init();
		})
		
		document.querySelector("#start-game-4").addEventListener("click", ()=>{
			const game = new MainGame4();
			game.init();
		})
		
		document.querySelector("#start-game-5").addEventListener("click", ()=>{
			const game = new MainGame5();
			game.init();
		})
		
		document.querySelector("#start-game-6").addEventListener("click", ()=>{
			const game = new MainGame6();
			game.init();
		})
		
		document.querySelector("#start-game-7").addEventListener("click", ()=>{
			const game = new MainGame7();
			game.init();
		})
		
		document.querySelector("#start-game-8").addEventListener("click", ()=>{
			const game = new MainGame8();
			game.init();
		})
		
		document.querySelector("#start-game-9").addEventListener("click", ()=>{
			const game = new MainGame9();
			game.init();
		})
		
	}
}