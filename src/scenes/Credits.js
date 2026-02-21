class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    create() {

    this.cl = this.sound.add('click')

    keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
    this.back = this.add.tileSprite(width/2,height/2, 0, 0, 'BG')
    let textconfig = {
            fontFamily: 'KR',
            fontSize: '28px',
            backgroundColor: '#000000',
            padding: {
                top: 5,
                bottom: 5
            }
        }
    this.add.text(width/2, height/1.7, 'Thank you for playing!!!', textconfig).setOrigin(0.5)
    this.add.text(width/2, height/1.5, 'Assets: Gustavo Gutierrez', textconfig).setOrigin(0.5)
    this.add.text(width/2, height/1.33, `Music: Justice from Kamen Rider Ex-Aid `, textconfig).setOrigin(0.5)
    this.add.text(width/2, height/1.2, `Programmer: Gustavo Gutierrez`, textconfig).setOrigin(0.5)
    this.add.text(width/2, height/1.1, `Return: ESC`, textconfig).setOrigin(0.5)
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyESC)) {
            this.cl.play()
            this.scene.start('titleScene')
        }
    }
}