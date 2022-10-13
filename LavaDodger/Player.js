export class Player{
    constructor(position, velocity){
        this.position = position;
        this.velocity = velocity;
        this.radius = 20;
        this.color = "orange";
    }

    draw(player){
        player.context.beginPath();
        player.context.fillstyle = this.color;
        player.context.arc(
            this.position.x,
            this.position.y,
            this.radius, 0, Math.PI * 2
        );
        Gamepad.context.fill();
    }
}