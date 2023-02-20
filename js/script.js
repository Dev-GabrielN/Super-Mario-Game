document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 550);
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 145 && pipePosition > 0 && marioPosition <= 95) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`

            mario.src = './images/death.webp'
            mario.style.width = '95px';
            mario.style.marginLeft = '30px';

            clearInterval(loop);
        }
    }, 10)

    document.addEventListener("keydown", function (event) {
        switch (event.code) {
            case "KeyA":
                mario.style.left = mario.offsetLeft - 10 + "px";
                break;
            case "KeyD":
                mario.style.left = mario.offsetLeft + 10 + "px";
                break;
            case "KeyW":
                mario.style.top = mario.offsetTop - 10 + "px";
                break;
            case "KeyS":
                mario.style.top = mario.offsetTop + 10 + "px";
                break;
        }
    })

    document.addEventListener('keydown', jump);
});