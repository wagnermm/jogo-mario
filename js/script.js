const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const gameWin = document.querySelector('.game-win');
const refreshGame = document.querySelector('.refresh');
const instructions = document.querySelector('.instructions');
const startGame = document.querySelector('.start-game');
const pointsElement = document.getElementById('points');
const container = document.getElementById('container');
let loop;
let points = 0;

const jump = function() {
    if (mario.classList.contains('jump')) return;
    mario.classList.add('jump');
    setTimeout(function() {
        mario.classList.remove('jump');
    }, 600);
};

document.addEventListener('click', jump);

pipe.style.display = 'none';
const start = function() {
    instructions.style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    pipe.style.display = 'block';

    loop = setInterval(function() {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 70) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = './image/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            gameOver.style.visibility = "visible";
            document.querySelector('.game-over span').innerText = points;
            clearInterval(loop);
        } else if (pipePosition <= 100 && pipePosition > 0 && marioPosition >= 70) {
            points += 10;
            pointsElement.innerText = points;

            if (points >= 2000) {
                container.style.background = 'url(image/background2.png)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundRepeat = 'no-repeat';
                pipe.style.animation='pipe-animation 2.5s infinite linear';
            }
            if (points >= 4000) {
                container.style.background = 'url(image/background3.jpg)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundRepeat = 'no-repeat';
                pipe.style.animation='pipe-animation 2s infinite linear';
            }
            if (points >= 8000) {
                container.style.background = 'url(image/background4.png)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundRepeat = 'no-repeat';
                pipe.style.animation='pipe-animation 1.5s infinite linear';
            }
            if (points >= 12000) {
                container.style.background = 'url(image/background5.jpg)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundRepeat = 'no-repeat';
                pipe.style.animation='none';
                mario.src = './image/mario-win.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '500px';
                mario.style.bottom='0';
                pipe.style.display = 'none';
                gameOver.style.visibility = "visible";
                document.querySelector('.game-over span').innerText = points;
            }
        }
    }, 10);
};

startGame.addEventListener('click', start);

refreshGame.addEventListener('click', function() {
    location.reload();
});