//Name:Gustavo
//Title:Flip-AID
//Hours: 16
//Twist: Flip the char from the top and bottom to avoid object

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: [ Title, Run, Credits],
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
        }
    }
}

const game = new Phaser.Game(config)
const tileSize = 32
let keyENTER, keyUp, keyDOWN, keyRESET, keyESC
let {width, height} = game.config