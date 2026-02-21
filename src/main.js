//Name:Gustavo
//Title:Flip-AID
//Hours: 16
//Twist: Flip the char from the top and bottom to avoid object, it took me a while to figure out 
//collsion with the player and the ground and setting the state and I had to make a funciton inside the 
//state machine to be able to set a state, also finding out how to track time in my run scene to show how long 
//you survived without the time tracking in title and I really like how the spirtes turned out and the backdrop
//I think they add to each other only think would be my pixel art on the ground and spikes look a little
//bad because I'm not great at pixel art but I liked using kamen rider ex aid as my base for art and music 

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