class ChatRoom {
    logMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} [${sender}]: ${message}`)
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatroom.logMessage(this,message);
    }
}

const chatroom=new ChatRoom();
const chloe = new User('chloe',chatroom);
const gijin = new User('gijin',chatroom);

chloe.send('hihi');
gijin.send('byebye')