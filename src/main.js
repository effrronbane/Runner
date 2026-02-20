//Name:Gustavo
//Title:Flip-AID
//Hours:
//Twist:

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: [ Title, Run],
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
}

const game = new Phaser.Game(config)
const tileSize = 32
let keyENTER, keyUp, keyDOWN, keyRESET
let {width, height} = game.config