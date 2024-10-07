input.onButtonPressed(Button.A, function () {
    speed += 1
    if (speed > 4) {
        speed = 1
    }
    basic.showNumber(speed)
})
let speed = 0
sb.setServoPosition(sb.servo(SBServo.ServoA), 50)
speed = 1
basic.showNumber(speed)
basic.forever(function () {
    sb.transitionServoPosition(sb.servo(SBServo.ServoA), 50, 1 / speed, sb.easing(SBEasing.Linear))
    sb.transitionServoPosition(sb.servo(SBServo.ServoA), 100, 1 / speed, sb.easing(SBEasing.Linear))
})
