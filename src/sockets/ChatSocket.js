import { Socket } from "./Socket";

export class ChatSocket {

    static instance = null

    static getInstance() {
        if(this.instance == null) {
            this.instance = new ChatSocket()
        }
        return this.instance
    }

    constructor(){
        this.socket = Socket.getInstance();
    }

    listenMessage(cb) {
        this.socket.listen('message', cb);
    }

    emitMessage(data) {
        this.socket.emit('message', data);
    }

    disconnect(){
        this.socket.disconnect();
    }
}