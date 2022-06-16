let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P1, 2, NeoPixelMode.RGB)
    strip.setBrightness(255)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    strip.clear()
    basic.pause(500)
})
