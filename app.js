/** @type {HTMLCanvasElement} */
//initial JavaScript setup for canvas animation and Game Development *****START*****
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
//initial JavaScript setup for canvas animation and Game Development *****END*****
const numberOfEnemies = 10;
const enemiesArray = [];
let gameFrame = 0;

/*
enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
};
*/

//creating a class or function factory for ENEMIES

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy1.png';
        //this.x = Math.random() * (canvas.width - this.width);
        //this.y = Math.random() * canvas.height;
        //this.speed = Math.random() * 4 - 2; //<<<rand number between -2 and +2 => where * 4 is range | and -2 is starting number
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update() {
        this.x += Math.random() * 15 - 7.5;
        this.y += Math.random() * 15 - 7.5;
        //animate enemies
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

//const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}

//basic animate function that will be used repeatedly to draw on and clear the screen
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    //enemy1.update();
    //enemy1.draw();
    //tx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate);
};

animate();
