let myID = "S1"
radio.setGroup(23)
basic.forever(function on_forever() {
    let parts: string[];
    let command: string;
    let msg = radio.receiveString()
    //  Check that msg is not empty and if it starts with myID + ":"
    if (msg && msg.substr(0, myID.length + 1) == myID + ":") {
        parts = _py.py_string_split(msg, ":")
        if (parts.length > 1) {
            command = parts[1]
            if (command == "FEED") {
                basic.showString("F")
            } else if (command == "LOVE") {
                basic.showIcon(IconNames.Heart)
            } else if (command == "ENERGY") {
                basic.showString("E")
            } else {
                basic.showString("?")
            }
            
            basic.pause(1000)
            basic.clearScreen()
        }
        
    }
    
})
