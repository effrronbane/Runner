class Run extends Phaser.Scene {
    constructor() {
        super('runScene')
    }

    create() {
        //add music, background, and runner
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

        this.physics.add.collider(this.player, this.botGround)
        this.physics.add.collider(this.player, this.topGround)

    }

    update() {
        this.runnerFSM.step()

    }
}