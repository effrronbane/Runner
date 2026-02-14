class Run extends Phaser.Scene {
    constructor() {
        super('runScene')
    }

    create() {
        //add music, background, and runner


        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)



    }

    update() {

    }
}