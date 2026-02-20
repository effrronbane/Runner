class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }
    
    preload() {
        this.load.font('KR', './assets/KRfont.ttf')
        this.load.path = './assets/'
        this.load.image('BG', 'BG.PNG')
        this.load.image('SP', 'spike-1.png')
        this.load.image('wallSP', 'wallspike.png')
        this.load.image('logo', 'logo.png')
        this.load.image('GR', 'EX-GR.png')
        this.load.spritesheet('Wnor', 'Wnor.png', {
            frameWidth: 64,
            frameHeight: 64
        })
        this.load.spritesheet('Winv', 'Winv.png', {
            frameWidth: 64,
            frameHeight: 64
        })
        this.load.spritesheet('Fup', 'Fup.png', {
            frameWidth: 64,
            frameHeight: 64
        })
        this.load.spritesheet('Fdown', 'Fdown.png', {
            frameWidth: 64,
            frameHeight: 64
        })


    }

    create() {
        let menuconfig = {
            fontFamily: 'KR',
            fontSize: '28px',
            //color: '#007b36',
            padding: {
                top: 5,
                bottom: 5
            }
        }

        //char animations
        this.anims.create({
            key: 'walkNor',
            frameRate: 18, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Wnor', { start: 0, end: 7})
        })

        this.anims.create({
            key: 'walkInv',
            frameRate: 18, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Winv', { start: 0, end: 7})
        })

        this.anims.create({
            key: 'FLUP',
            frameRate: 18, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Fup', { start: 0, end: 5})
        })

        this.anims.create({
            key: 'FLDOWN',
            frameRate: 18, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Fdown', { start: 0, end: 5})
        })

  
        //logo
        this.add.image(width/2, height/3, 'logo').setScale(1.4)

        //start and how to play
        this.add.text(width/2, height/1.5, 'Use ↑ and ↓ to FLIP gravity, survive.', menuconfig).setOrigin(0.5)
        this.add.text(width/2, height/1.3, 'Press ENTER to START', menuconfig).setOrigin(0.5)

        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        

    }

    update() {
        //start game
        //if(Phaser.Input.Keyboard.JustDown(keyENTER)) {
            //this.scene.start('runScene')
        //}

        this.scene.start('runScene')

        
    }
}