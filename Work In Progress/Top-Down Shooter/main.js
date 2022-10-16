let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

let mousePositionX = winWidth / 2;
let mousePositionY = winHeight / 2;

// set canvas size to window
canvas.width = winWidth;
canvas.height = winHeight;

class Player {
    constructor() {
        this.position = {
            x: winWidth / 2,
            y: winHeight / 2
        };
        this.velocity = {
            x: 0,
            y: 0
        };

        this.radius = 30;
        this.angle = 0;
        this.color = "black";
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(
            this.position.x, this.position.y,
            this.radius, 0, Math.PI * 2
        );
        ctx.fill();

        // CrossHair
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(
            mousePositionX, mousePositionY,
            this.radius, 0, Math.PI * 2
        );
        ctx.strokeStyle = "black";
        ctx.stroke();


        let pX = this.position.x;
        let pY = this.position.y;

        // Draw line between player-object and cursor
        ctx.beginPath();
        ctx.moveTo(pX, pY);
        ctx.lineTo(mousePositionX, mousePositionY);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }

    update() {
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        this.draw();
    }
}


class Bullet{
    constructor() {
        this.position = {
            x: mousePositionX,
            y: mousepositionY
        };
        this.velocity = {
            x: 0,
            y: 0
        };

        this.radius = 5;
        this.color = "black";
    }

    calcDir() {
        let velocity = 10;
        let vectorX = mousePositionX - player.Position.x;
        let vectorY = mousePositionY - player.Position.y;

        let dist = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
        let deltaX = vectorX / dist;
        let deltaY = vectorY / dist;
    }
}

const player = new Player();
const keys = {
    right: { pressed: false },
    left: { pressed: false },
    up: { pressed: false },
    down: { pressed: false },

    leftMouse: {pressed: false }
}

function animate() {
    requestAnimationFrame(animate);
    player.update();

    if (keys.right.pressed){
        player.velocity.x = 2;
    } else if (keys.left.pressed){
        player.velocity.x = -2;
    }else { player.velocity.x = 0}

    if (keys.up.pressed){
        player.velocity.y = -2;
    }else if (keys.down.pressed){
        player.velocity.y = +2;
    }else { player.velocity.y = 0;}

    // shoot bullet on mouse-click
    if (keys.leftMouse.pressed){
        let bullet = new Bullet;
        bullet.calcDir();
        console.log("mouse Click");
    } else { return }

}
animate();

function game(){
    requestAnimationFrame(game);
    //Window
    ctx.beginPath();
    ctx.fillStyle = "wheat"; //<--- Canvas Color
    ctx.fillRect(0, 0, winWidth, winHeight);

    //Player
    player.draw();

    ctx.rotate(player.Angle);
    ctx.fillRect(player.x, player.y, player.width, player.height); //Player movement

}

// Onkey event
window.onkeydown = function(e) {

    e.preventDefault(); //Stops key from scrolling pagedd

    //<---keybindings--->
    if(e.keyCode == 87){ // if key "w"
        // player.velocity.y -= 1;
        keys.up.pressed = true;
        console.log("up");
    }
    if(e.keyCode == 83){ // else-if key "s"
        // player.velocity.y += 1;
        keys.down.pressed = true;
        console.log("down");
    }
    if(e.keyCode == 65){ // else-if key "a"
        // player.velocity.x -= 1;
        keys.left.pressed = true;
        console.log("left");
    }
    if(e.keyCode == 68){ // else-if key "d"
        // player.velocity.x += 1;
        keys.right.pressed = true;
        console.log("right");
    }
}

window.onkeyup = function(e){
    e.preventDefault(); //Stops key from scrolling page

    if(e.keyCode == 87){ // if key "w"
        // player.velocity.y -= 1;
        keys.up.pressed = false;
        console.log("up (release)");

    }
    if(e.keyCode == 83){ // else-if key "s"
        // player.velocity.y += 1;
        keys.down.pressed = false;
        console.log("down (release)");
    }
    if(e.keyCode == 65){ // else-if key "a"
        // player.velocity.x -= 1;
        keys.left.pressed = false;
        console.log("left (release)");
    }
    if(e.keyCode == 68){ // else-if key "d"
        // player.velocity.x += 1;
        keys.right.pressed = false;
        console.log("right (release)");
    }
}

function getCursorPosition(e){
    mousePositionX = e.x;
    mousePositionY = e.y;
    // document.getElementById("mouseXSpan").textContent = e.x;
    // document.getElementById("mouseYSpan").textContent = e.y;
}
requestAnimationFrame(game);