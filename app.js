document.addEventListener('DOMContentLoaded',()=>{
	const bird = document.querySelector('.bird');
	const ground = document.querySelector('.ground');
	const game = document.querySelector('.game');
	
	let birdLeft = 120;
	let birdBottom = 400;
	let gravity = 2;
	let isgameOver =false;
	
	function startGame(){
		birdBottom = birdBottom - gravity
		bird.style.left=birdLeft+'px';
		bird.style.bottom=birdBottom+'px';
	}
	let timer = setInterval(startGame,10);
	function jump(){
		if(birdBottom < 500){
			birdBottom = birdBottom + 50;
		}
		bird.style.bottom = birdBottom+"px";
	}
	document.addEventListener('keyup',jump);
	
	function randomBlock(){
		let blockLeft = 500;
		let blockBottom = Math.random()*60;
		let block = document.createElement('div');
	if(isgameOver==false){
		block.classList.add
	}
		block.classList.add('block');
		game.appendChild(block);
		block.style.left = blockLeft+'px';
		block.style.bottom = blockBottom + 'px';
		function moveblock(){
			blockLeft = blockLeft - 2;
			block.style.left = blockLeft+'px';
			if(blockLeft == -6){
				clearInterval(timeBlock);
				game.removeChild(block);
			}
			if(birdBottom==0 || blockLeft>100 && blockLeft<180 && birdLeft==120 && birdBottom < blockBottom + 180){
				gameOver();	
				clearInterval(timeBlock);				
			}
		}		
		let timeBlock = setInterval(moveblock,7);
	}
	if(isgameOver==false){
		setInterval(randomBlock,2000);
	}
	function gameOver(){
		isgameOver = true;
		clearInterval(timer);
		document.removeEventListener('keyup',jump);
	}
});