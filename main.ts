for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # . . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
music.play(music.stringPlayable("- E D D G G B - ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
