/** @type {HTMLCanvasElement} */
//initial JavaScript setup for canvas animation and Game Development *****START*****
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
//initial JavaScript setup for canvas animation and Game Development *****END*****
const numberOfEnemies = 100;
const enemiesArray = [];

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
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4 - 2; //<<<rand number between -2 and +2 => where * 4 is range | and -2 is starting number
    }
    update() {
        this.x += this.speed;
        this.y += this.speed;
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

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
    })
    //enemy1.update();
    //enemy1.draw();
    //tx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate);
}

animate();
