/** @type {HTMLCanvasElement} */
//initial JavaScript setup for canvas animation and Game Development *****START*****
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
//initial JavaScript setup for canvas animation and Game Development *****END*****
const numberOfEnemies = 144;
const enemiesArray = [];
let gameFrame = 0;


//creating a class or function factory for ENEMIES

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy3.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;//Math.random() * 333;<<<enemies will show up randomly in trajectory path
        this.angleSpeed = Math.random() * 0.5 + 0.5;
        //this.curve = Math.random() * 200 + 50;
    }
    update() {
        this.x = canvas.width / 2 * Math.cos(this.angle * Math.PI / 200) + (canvas.width / 2 - this.width / 2);
        this.y = canvas.height / 2  * Math.sin(this.angle * Math.PI / 300) + (canvas.height / 2 - this.height / 2);
        //this.x -= this.speed;
        //this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        //this.y += Math.random() * 15 - 7.5;
        if (this.x + this.width < 0) this.x = canvas.width;
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
    requestAnimationFrame(animate);
};

animate();
//remember if you want to use this version of 'app3.js' you must change the body script src value to app2.js
//the above trig code for AI mvmnt is PRICELESS for coding animations particale effects...EVERYTHING ANIMATION!
/*
this.x = canvas.width / 2 * Math.cos(this.angle * Math.PI / 200) + (canvas.width / 2 - this.width / 2);
this.y = canvas.height / 2  * Math.sin(this.angle * Math.PI / 300) + (canvas.height / 2 - this.height / 2);
trying changing the meriad of values in these two update() method constructors to create figure 8 patterns a circle and more
*/
