class Runner extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        

        this.body.setSize(this.width/2, this.height)
        this.body.setCollideWorldBounds(true)

        this.runVel = 1

        this.coll = false

        scene.runnerFSM = new StateMachine('run', {
            run: new RunState(),
            invrun: new invRunState(),
            flipUp: new FlipUpState(),
            flipDown: new FlipDownState()
        }, [scene, this])
    }
}


class RunState extends State {
    enter(scene, runner) {
        runner.anims.play('walkNor')
    }

    execute(scene, runner) {
        const { up } = scene.keys


        if(Phaser.Input.Keyboard.JustDown(up)) {
            this.stateMachine.transition('flipUp')
            //if()
                return
            //}
        }
    }
}

class invRunState extends State {
    enter(scene, runner) {
        runner.anims.play('walkInv')
    }

    execute(scene, runner) {
        if(Phaser.Input.Keyboard.JustDown(down)) {
            this.stateMachine.transition('flipDown')
            return
        }
    }
}

class FlipUpState extends State {
    execute(scene, runner) {
        runner.anims.play('FLUP', true)
        runner.setVelocity(70, -250)

        //go to inv walk


    }
}


//add a time to stop and return

class FlipDownState extends State {
    execute(scene, runner) {
        runner.anims.play('FLDOWN', true)
        runner.setVelocity(70, 250)

        //go to nor walk
    }
}