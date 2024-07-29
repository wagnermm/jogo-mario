const mario = document.querySelector('.mario');
const fireball = document.querySelector('.fireball');
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

fireball.style.display = 'none';
const start = function() {
    instructions.style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    fireball.style.display = 'block';

    loop = setInterval(function() {
        const fireballPosition = fireball.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (fireballPosition <= 100 && fireballPosition > 0 && marioPosition < 70) {
            fireball.style.animation = 'none';
            fireball.style.left = `${fireballPosition}px`;
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = './image/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            gameOver.style.visibility = "visible";
            document.querySelector('.game-over span').innerText = points;
            clearInterval(loop);
        } else if (fireballPosition <= 100 && fireballPosition > 0 && marioPosition >= 70) {
            points += 10;
            pointsElement.innerText = points;

            if (points >= 1000) {
                container.style.background = 'url(image/background2.png)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundRepeat = 'no-repeat';
                container.style.backgroundPosition = 'center center';
                fireball.style.animation='fireball-animation 2.5s infinite easy-out';
            }
            if (points >= 2000) {
                container.style.background = 'url(image/background3.jpg)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundRepeat = 'no-repeat';
                container.style.backgroundPosition = 'center center';
                fireball.style.animation='fireball-animation 2s infinite linear';
            }
            if (points >= 3000) {
                container.style.background = 'url(image/background4.png)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundRepeat = 'no-repeat';
                container.style.backgroundPosition = 'center center';
                fireball.style.animation='fireball-animation 1.5s infinite linear';
            }
            if (points >= 4000) {
                container.style.background = 'url(image/background5.jpg)';
                container.style.backgroundSize = 'cover';
                container.style.backgroundRepeat = 'no-repeat';
                container.style.backgroundPosition = 'center center';
                fireball.style.animation='none';
                mario.src = './image/mario-win.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '500px';
                mario.style.bottom='0';
                fireball.style.display = 'none';
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