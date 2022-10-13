import {Position, Velocity} from "./Player.js"

class Game{
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.player = new Player(new Position(canvas.height - 50, canvas.width / 2))
    }
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
