class Run extends Phaser.Scene {
    constructor() {
        super('runScene')
    }

    create() {
        //add music, 
        this.back = this.add.tileSprite(width/2,height/2, 0, 0, 'BG')
        this.over = false

        //controls
        this.keys = this.input.keyboard.createCursorKeys()
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)

        

        this.botGround = this.add.group() 
        for(let i = 0; i < width; i += tileSize) {
            let groundtile = this.physics.add.sprite(i, width - tileSize, 'GR').setOrigin(0)
            groundtile.body.immovable = true
            this.botGround.add(groundtile)
        }

        this.topGround = this.add.group() 
        for(let i = 0; i < width; i += tileSize) {
            let groundtile = this.physics.add.sprite(i, height/300, 'GR').setOrigin(0)
            groundtile.body.immovable = true
            this.topGround.add(groundtile)
        }
        
        this.player = new Runner(this, width/2, height/2, 'Wnor', 0)
        
        this.physics.add.collider(this.player, this.topGround)
        this.physics.add.collider(this.player, this.botGround)
        
        

        this.time.addEvent ({
            delay: 2500,
            callback: spawn,
            callbackScope: this,
            loop: true
        })

        function spawn() {
            const obj = ['SP', 'wallSP']
            const sen = Phaser.Math.RND.pick(obj)
            const hei = Phaser.Math.RND.between(tileSize, this.cameras.main.height - tileSize)
            this.spike = new Evil(this, width, hei, sen)
        }
    }

    update() {
        this.back.tilePositionX -= 3.5
        this.runnerFSM.step()
        if (this.player.body.blocked.up) {
            this.runnerFSM.setState("invrun")
        }
        if (this.player.body.blocked.down) {
            this.runnerFSM.setState("run")
        }
        if(this.over && Phaser.Input.Keyboard.JustDown(keyRESET)) {
            this.scene.restart()
        }
        
        

    }

    end() {
        if(this.over) return
        this.over = false
        let textconfig = {
            fontFamily: 'KR',
            fontSize: '28px',
            padding: {
                top: 5,
                bottom: 5
            }
        }

        //add text for game over
    }

}


