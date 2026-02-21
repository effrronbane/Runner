class Run extends Phaser.Scene {
    constructor() {
        super('runScene')
    }

    create() {
        //music 
        let theme = this.sound.add('KRM')
        theme.play({
            loop:true,
            volume: .5
        })

        //sound effects
        this.cl = this.sound.add('click')
        this.running = this.sound.add('RN')

        //city backdrop and game over flag
        this.back = this.add.tileSprite(width/2,height/2, 0, 0, 'BG')
        this.over = false

        //controls
        this.keys = this.input.keyboard.createCursorKeys()
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        
        //ground
        this.botGround = this.add.group() 
        for(let i = 0; i < width; i += tileSize) {
            let groundtile = this.physics.add.sprite(i, width - tileSize, 'GR').setOrigin(0)
            groundtile.body.immovable = true
            this.botGround.add(groundtile)
        }

        //ceiling
        this.topGround = this.add.group() 
        for(let i = 0; i < width; i += tileSize) {
            let groundtile = this.physics.add.sprite(i, height/300, 'GR').setOrigin(0)
            groundtile.body.immovable = true
            this.topGround.add(groundtile)
        }
        
        //player char
        this.player = new Runner(this, -width, height-65, 'Wnor', 0)

        //collider for ground and ceiling
        this.physics.add.collider(this.player, this.topGround)
        this.physics.add.collider(this.player, this.botGround)
        
        //spwans spikes every 1.5 seconds
        this.time.addEvent ({
            delay: 1500,
            callback: spawn,
            callbackScope: this,
            loop: true
        })
        this.spikes = this.add.group()
        function spawn() {
            const obj = ['SP', 'wallSP']
            const sen = Phaser.Math.RND.pick(obj)
            const hei = Phaser.Math.RND.between(tileSize, this.cameras.main.height - tileSize)
            const spike = new Evil(this, width, hei, sen)
            this.spikes.add(spike)
            //check if spikes are in the ground or ceiling
            if(this.physics.overlap(spike, this.topGround)) {
                spike.destroy()
                return
            }
            if(this.physics.overlap(spike, this.botGround)) {
                spike.destroy()
                return
            }
        }

        //checks for player over spikes and gameover
        this.physics.add.overlap(this.player, this.spikes, () => this.end())

        //timer
        this.startT = this.time.now
        
    }

    update() {
        //move the backdrop and moves the state machine 
        this.back.tilePositionX -= 3.5
        this.runnerFSM.step()

        //checks if player is on the ground or ceiling and sets state machine 
        if (this.player.body.blocked.up) {
            this.running.play()
            this.runnerFSM.setState("invrun")
        }
        if (this.player.body.blocked.down) {
            this.running.play()
            this.runnerFSM.setState("run")
        }

        //checks game over flag to restart the game
        if(this.over && Phaser.Input.Keyboard.JustDown(keyRESET)) {
            this.cl.play()
            this.scene.restart()
        }
    }

    //game over function
    end() {
        //set player away from screen and no more up or down inputs
        this.sound.get('KRM').stop()
        this.sound.stopAll() 
        this.player.setCollideWorldBounds(false)
        this.player.setPosition(-100000000, -100000000000)
        this.keys.up.enabled = false
        this.keys.down.enabled = false

        this.over = true

        let textconfig = {
            fontFamily: 'KR',
            fontSize: '28px',
            backgroundColor: '#000000',
            padding: {
                top: 5,
                bottom: 5
            }
        }
        //time
        let final = ((this.time.now - this.startT )/1000).toFixed(1)

        //add text for game over
        const top = this.add.text(width/2, height/1.5, `You survived for ${final} seconds`, textconfig).setOrigin(0.5)
        const bot = this.add.text(width/2, height/1.3, 'Press R to retry', textconfig).setOrigin(0.5)
        top.setDepth(10000)
        bot.setDepth(10000)
    }
}


