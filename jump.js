score = 0;
document.onkeydown = function(e){
    console.log("key code is: " + e.keyCode);
    // from consolw we get 38 for up arrow key
    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    else if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox + 120 + 'px';
    }
    else if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinox -120) + 'px';
    }
    
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    // diansausor x & y are the value 
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    // obstacle values
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    //Calculate the shortest distance between two objects
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    //console.log(offsetX,offsetY);
    if(offsetX < 95 && offsetY < 95){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleMamu');
    }
    else {
        score+=1;
        updateScore(score);
        
    }
}, 100);

function updateScore(score) {
    scoreCount.innerHTML = "Score : " + score
}
