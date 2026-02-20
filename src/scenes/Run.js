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
        this.physics.add.collider(this.player, this.botGround, () => sets())
        function sets() {
            this.runnerFSM.setState('invrun')
        }

        this.time.addEvent ({
            delay: 2500,
            callback: spawn,
            callbackScope: this,
            loop: true
        })

        function spawn() {
            const obj = ['SP', 'wallSP']
        const test = Phaser.Math.RND.pick(obj)
        const hei = Phaser.Math.RND.between(tileSize, this.cameras.main.height - tileSize)
        new Evil(this, width, hei, test)
        }
    }

    update() {
        this.back.tilePositionX -= 3.5
        this.runnerFSM.step()
        
        

    }

}


