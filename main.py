def on_button_pressed_b():
    reromicro.move_forward(89)
    basic.pause(500)
input.on_button_pressed(Button.B, on_button_pressed_b)
