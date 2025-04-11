myID = "S1"
radio.set_group(23)

def on_forever():
    msg = radio.receive_string()
    # Check that msg is not empty and if it starts with myID + ":"
    if msg and msg.substr(0, len(myID) + 1) == myID + ":":
        parts = msg.split(":")
        if len(parts) > 1:
            command = parts[1]
            if command == "FEED":
                basic.show_string("F")
            elif command == "LOVE":
                basic.show_icon(IconNames.HEART)
            elif command == "ENERGY":
                basic.show_string("E")
            else:
                basic.show_string("?")
            basic.pause(1000)
            basic.clear_screen()
basic.forever(on_forever)
