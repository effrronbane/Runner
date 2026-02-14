class Runner extends Phaser.Scene {
    constructor(scene, x, y, texture, frame, direction) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width/2, this.height)
        this.body.setCollideWorldBounds(true)

        this.runVel = 150

        scene.runnerFSM = new StateMachine('run', {
            run: new RunState(),
            flipUp: new FlipUpState(),
            flipDown: new FlipDownState()
        }, [scene, this])
    }
}


class Runstate extends State {
    enter(scene, runner) {
        runner.setVelocity(runVel)

        //run anim
    }

    execute(scene, runner) {
        const { up, down} = scene.keys


        if(Phaser.Input.Keyboard.JustDown(up)) {
            this.stateMachine.transition('flipUp')
            return
        }

        if(Phaser.Input.Keyboard.JustDown(down)) {
            this.stateMachine.transition('flipDown')
            return
        }
    }
}

class FlipUpState extends State {
    execute(scene, runner) {
        runner.setVelocity(50, 150)

    }
}


//add a time to stop and return

class FlipDownState extends State {
    execute(scene, runner) {
        runner.setVelocity(50, -150 )

    }
}