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
        this.angle = Math.atan2(mousePositionY, mousePositionX);
        this.color = "black";
    }

    draw() {

        // Draw Player
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(
            this.position.x, this.position.y,
            this.radius, 0, Math.PI * 2
        );
        ctx.fill();

        // Draw CrossHair
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(
            mousePositionX, mousePositionY,
            10, 0, Math.PI * 2
        );
        ctx.strokeStyle = "black";
        ctx.stroke();

        // Draw line between player-object and cursor
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
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
            x: player.position.x,
            y: player.position.y
        };
        this.velocity = {
            x: 0,
            y: 0
        };

        this.radius = 5;
        this.color = "black";

        let vectorX = mousePositionX - player.position.x;
        let vectorY = mousePositionY - player.position.y;

        let dist = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
        let deltaX = vectorX / dist;
        let deltaY = vectorY / dist;

    }

    draw(){
        ctx.beginPath();
        ctx.arc(player.position.x, player.position.y, this.radius, 10, 0, Math.PI() * 2);
        ctx.fillStyle = "green";
        ctx.fill();
    }

    update(){
        bullet.x += deltaX;
        bullet.y += deltaY;
        this.draw();
    }
}

const player = new Player();
let bullets = [];

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

    for (let i = 0; i < bullets; i++){
        bullets[i].update();
        console.log(bullets[i]);
    }

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
        bullet(player.position.x, player.position.y);
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

// OnMouseClick
window.addEventListener("click", (e) => {
    // bullet velocity = normalize(player position - mouse position) * magnitude
    let bullet = new Bullet();
    bullet.velocity = normalize(player.position.x - mousePositionX * player.position.y - mousePositionY);
    console.log("Mouse left-click")
})

// Onkey event
window.onkeydown = function(e) {

    e.preventDefault(); //Stops key from scrolling page

    //<---keybindings--->
    if(e.keyCode == 87){ // if key "w"
        keys.up.pressed = true;
        console.log("up");
    }
    if(e.keyCode == 83){ // else-if key "s"
        keys.down.pressed = true;
        console.log("down");
    }
    if(e.keyCode == 65){ // else-if key "a"
        keys.left.pressed = true;
        console.log("left");
    }
    if(e.keyCode == 68){ // else-if key "d"
        keys.right.pressed = true;
        console.log("right");
    }
}

window.onkeyup = function(e){
    e.preventDefault(); //Stops key from scrolling page

    if(e.keyCode == 87){ // if key "w"
        keys.up.pressed = false;
        console.log("up (release)");

    }
    if(e.keyCode == 83){ // else-if key "s"
        keys.down.pressed = false;
        console.log("down (release)");
    }
    if(e.keyCode == 65){ // else-if key "a"
        keys.left.pressed = false;
        console.log("left (release)");
    }
    if(e.keyCode == 68){ // else-if key "d"
        keys.right.pressed = false;
        console.log("right (release)");
    }
}

function getCursorPosition(e){
    mousePositionX = e.x;
    mousePositionY = e.y;
    // document.getElementById("mouseXSpan").textContent = "X: " + e.x;  // Prints coordinates to <span> if added in HTML
    // document.getElementById("mouseYSpan").textContent = "Y: " + e.y; // <span id="mouseXSpan"></span> <span id="mouseYSpan"></span>
}
requestAnimationFrame(game);