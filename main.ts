basic.forever(function () {
    WSTouchPiano.TP_PlayPiano()
    WSTouchPiano.TP_PlayMusic(392, music.beat(BeatFraction.Whole))
    WSTouchPiano.TP_ShowRGB(
    49151,
    51265,
    51794,
    40000
    )
    WSTouchPiano.TP_PlayMusic(466, music.beat(BeatFraction.Whole))
    basic.showString("PACIL")
    WSTouchPiano.TP_ShowRGB(
    4228,
    40167,
    30000,
    20612
    )
    WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Half))
    WSTouchPiano.TP_PlayMusic(294, music.beat(BeatFraction.Half))
    WSTouchPiano.TP_ShowRGB(
    10000,
    20000,
    30000,
    40000
    )
    WSTouchPiano.TP_PlayMusic(392, music.beat(BeatFraction.Whole))
    WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Whole))
    WSTouchPiano.TP_ShowRGB(
    WSTouchPiano.TP_SetColor(RGB_COLOR.INDIGO),
    WSTouchPiano.TP_SetColor(RGB_COLOR.BLUE),
    WSTouchPiano.TP_SetColor(RGB_COLOR.PURPLE),
    WSTouchPiano.TP_SetColor(RGB_COLOR.YELLOW)
    )
    WSTouchPiano.TP_ShowRGB(
    WSTouchPiano.TP_SetColor(RGB_COLOR.RED),
    20000,
    WSTouchPiano.TP_SetColor(RGB_COLOR.BLUE),
    40000
    )
    WSTouchPiano.TP_PlayPiano()
})
