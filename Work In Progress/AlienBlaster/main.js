let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth - 45;
canvas.height = window.innerHeight - 35;
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

class Player {
    constructor(){
        this.position = {
            x: winWidth / 2,
            y: winHeight -100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 50;
        this.width = 50;
    }

    draw(){
        context.beginPath();
        context.rect(player.position.x, player.position.y, player.width, player.height);
        context.fillStyle = "limegreen";
        context.fill();
    }

    update(){
        // Gravity player
        // this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        this.draw();
    }

}

class Enemy {
    constructor(){
        this.position = {
            x: Math.floor(Math.random(0) * window.innerWidth),
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 50;
        this.width = 50;
    }

    draw(){
        context.beginPath();
        context.rect(enemy.position.x, enemy.position.y, enemy.width, enemy.height);
        context.fillStyle = "orange";
        context.fill();
    }

    update(){
        // Gravity enemy
        enemy.position.y += enemy.velocity.y;
        enemy.draw();
    }
}

const player = new Player();
const enemy = new Enemy();
const keys = {
    left: { pressed: false },
    right: { pressed: false },
    space: { pressed: false }
}

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    let enemies = [];
    for (let i in enemies.length < 12){
        enemies[i].push(enemy);
    }

    for(let i in enemies){
        enemies[i].update();
    }

    player.update();

    // Movement
    if (keys.left.pressed){ // left key function
        player.velocity.x = -2;
        console.log("Left");
    } else if (keys.right.pressed){ // right key function
        player.velocity.x = 2;
        console.log("right");
    } else { player.velocity.x = 0}

    if (keys.space.pressed){ // space key function
        
    }
    console.log(enemies.length)
}
requestAnimationFrame(animate);

// Keydown event
document.addEventListener("keydown", function(e){
    console.log(e.keyCode);

    if(e.keyCode === 65){ // key "a" pressed
        keys.left.pressed = true;

    }

    if(e.keyCode === 68){ // key "d" pressed
        keys.right.pressed = true;
    }

    if(e.keyCode === 32){ // key "space" pressed
        keys.space.pressed = true;
    }
});

// Keyup event
document.addEventListener("keyup", function(e){
    if(e.keyCode == 65){ // key "a" released
        keys.left.pressed = false;
    }

    if(e.keyCode === 68){ // key "d" released
        keys.right.pressed = false;
    }

    if(e.keyCode === 32){ // key "space" released
        keys.space.pressed = false;
    }
});