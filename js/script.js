
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameOvoer = document.querySelector('.game-over')
const refreshGame = document.querySelector('.refresh')


const jump = function() {
    mario.classList.add('jump')
    setTimeout(function() {
        mario.classList.remove('jump')
    },600)
}
document.addEventListener('click', jump)

const loop = setInterval(function(){
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 70) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './image/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        gameOvoer.style.visibility = "visible"
        clearInterval(loop)
    }
},10)
refreshGame.addEventListener('click', function(){location.reload()})