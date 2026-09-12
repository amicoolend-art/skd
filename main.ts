let A = 0
let B = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(A / B)
})
input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A * B)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showArrow(ArrowNames.South)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    B = 0
    A = 0
    basic.clearScreen()
})
