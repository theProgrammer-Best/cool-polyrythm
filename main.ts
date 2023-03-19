function rainbowConvert (num: number) {
    if (num < 1) {
        return 2
    } else if (num < 2) {
        return 4
    } else if (num < 3) {
        return 5
    } else if (num < 4) {
        return 7
    } else if (num < 5) {
        return 8
    } else if (num < 6) {
        return 9
    } else {
        return 10
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    picture = 0
    music.stopAllSounds()
    num += 1
    for (let index = 0; index <= 159; index++) {
        for (let index2 = 0; index2 <= 119; index2++) {
            scene.backgroundImage().setPixel(index - 1, index2, scene.backgroundImage().getPixel(index, index2))
            scene.backgroundImage().setPixel(index, index2, 0)
        }
    }
    for (let value of primeList) {
        if (num % value == 0) {
            scene.backgroundImage().setPixel(159, primeList.indexOf(value), rainbowConvert(num % 7))
            music.play(music.createSoundEffect(
            WaveShape.Square,
            2000 / value,
            2000 / value,
            255,
            255,
            100000,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
            picture += 1
        }
    }
    primeList.push(num)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    menuToggle = !(menuToggle)
})
let menuToggle = false
let num = 0
let picture = 0
let primeList: number[] = []
primeList = []
forever(function () {
    if (controller.B.isPressed() || menuToggle) {
        picture = 0
        music.stopAllSounds()
        num += 1
        for (let index = 0; index <= 159; index++) {
            for (let index2 = 0; index2 <= 119; index2++) {
                scene.backgroundImage().setPixel(index - 1, index2, scene.backgroundImage().getPixel(index, index2))
                scene.backgroundImage().setPixel(index, index2, 0)
            }
        }
        if (menuToggle) {
            for (let value of primeList) {
                if (num % value == 0) {
                    scene.backgroundImage().setPixel(159, primeList.indexOf(value), rainbowConvert(num % 7))
                    music.play(music.createSoundEffect(
                    WaveShape.Square,
                    2000 / value,
                    2000 / value,
                    255,
                    255,
                    110,
                    SoundExpressionEffect.None,
                    InterpolationCurve.Linear
                    ), music.PlaybackMode.InBackground)
                    picture += 1
                }
            }
        } else {
            for (let value of primeList) {
                if (num % value == 0) {
                    scene.backgroundImage().setPixel(159, primeList.indexOf(value), rainbowConvert(num % 7))
                    music.play(music.createSoundEffect(
                    WaveShape.Square,
                    2000 / value,
                    2000 / value,
                    255,
                    255,
                    primeList.length ** 2 * (Math.min(10, Math.sqrt(num)) * 2),
                    SoundExpressionEffect.None,
                    InterpolationCurve.Linear
                    ), music.PlaybackMode.InBackground)
                    picture += 1
                }
            }
        }
        primeList.push(num)
        if (menuToggle) {
            pause(100)
        } else {
            pause(picture ** 2 * (Math.min(10, Math.sqrt(num)) * 2))
        }
    }
})
