input.onButtonPressed(Button.B, function () {
    sleep += -50
    sleep = Math.max(0, sleep)
})
input.onButtonPressed(Button.A, function () {
    sleep += 50
})
let sleep = 0
let pixel2 = game.createSprite(1, 1)
let pixel = game.createSprite(0, 0)
pixel2.turn(Direction.Right, 90)
let counter = 0
sleep = 500
while (true) {
    basic.pause(sleep)
    pixel2.move(1)
    pixel.move(1)
    counter += 1
    if (counter % 4 == 0) {
        pixel.turn(Direction.Right, 90)
    }
    if (counter % 2 == 0) {
        pixel2.turn(Direction.Left, 90)
    }
}
basic.forever(function () {
	
})
