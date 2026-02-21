class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }
    
    preload() {
        this.load.font('KR', './assets/KRfont.ttf')
        this.load.path = './assets/'
        this.load.audio('RN', 'carrun.mp3')
        this.load.audio('click', 'click.mp3')
        this.load.audio('KRM', 'JUSTICE.mp3')
        this.load.image('BG', 'BG.PNG')
        this.load.image('SP', 'spike-1.png')
        this.load.image('wallSP', 'wallspike.png')
        this.load.image('logo', 'logo.PNG')
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
        this.cl = this.sound.add('click')
        let textconfig = {
            fontFamily: 'KR',
            fontSize: '28px',
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
        this.add.text(width/2, height/1.5, 'Use ↑ and ↓ to FLIP gravity, survive.', textconfig).setOrigin(0.5)
        this.add.text(width/2, height/1.3, 'Press ENTER to START', textconfig).setOrigin(0.5)
        this.add.text(width/2, height/1.15, 'Press ESC for credits', textconfig).setOrigin(0.5)

        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        

    }
    //add text to say to go to credits and make credits
    update() {
        //start game
        if(Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.cl.play()
            this.scene.start('runScene')
        }
        //go to credits 
        if(Phaser.Input.Keyboard.JustDown(keyESC)) {
            this.cl.play()
            this.scene.start('creditsScene')
        }
    }
}