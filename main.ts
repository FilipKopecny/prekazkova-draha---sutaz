let vzdialenost = 0
let hluk = 0
Rover.MotorStopAll(MotorActions.Stop)
basic.forever(function () {
    hluk = input.soundLevel()
    vzdialenost = Rover.Ultrasonic()
    if (hluk > 150 && vzdialenost > 30) {
        Rover.MotorRunDual(-150, 150)
    } else {
        if (vzdialenost < 10) {
            Rover.MotorRunDual(-255, -255)
        } else {
            if (vzdialenost < 20) {
                Rover.MotorStopAll(MotorActions.Stop)
            } else {
                if (vzdialenost < 30) {
                    Rover.MotorRunDual(255, 255)
                } else {
                    Rover.MotorStopAll(MotorActions.Stop)
                }
            }
        }
    }
})
