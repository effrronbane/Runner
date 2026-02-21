class Evil extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setVelocityX(-250)
        this.setImmovable(true)
        if(texture === 'SP') {
            this.setBodySize(18,18)
        }
        if(texture === 'wallSP') {
            this.setBodySize(56,128)
        }

    }

    update() {
        if(this.x < 0) {
            this.destroy(true)
        }
    }
}