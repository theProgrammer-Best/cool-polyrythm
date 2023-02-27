let num = 0
let primeList: number[] = []
forever(function () {
    num += 1
    for (let value of primeList) {
        if (num % value == 0) {
            scene.backgroundImage().setPixel(159, primeList.indexOf(value), 1)
            music.play(music.createSoundEffect(
            WaveShape.Square,
            2000 / value,
            2000 / value,
            255,
            255,
            200,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
        }
    }
    for (let index = 0; index <= 159; index++) {
        for (let index2 = 0; index2 <= 119; index2++) {
            scene.backgroundImage().setPixel(index - 1, index2, scene.backgroundImage().getPixel(index, index2))
            scene.backgroundImage().setPixel(index, index2, 0)
        }
    }
    primeList.push(num)
    pause(100)
    music.stopAllSounds()
})
