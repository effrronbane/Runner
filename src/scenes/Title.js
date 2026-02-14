class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }
    
    preload() {
        this.load.image('Wtest', './assets/W.png')
        this.load.image('logo', './assets/ex-aid logo.png')

    }

    create() {
        let menuconfig = {
            //fontfamily: ,
            fontsize: '28px',
            color: '#007b36',
            padding: {
                top: 5,
                bottom: 5
            }
        }

        this.add.image(width/2, height/3, 'logo').setScale(1.8)
        //add start and how to play

        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        

    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.scene.start('runScene')
        }

        
    }
}