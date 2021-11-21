import { Socket } from "./Socket";

export class UserSocket {

    static instance = null

    static getInstance() {
        if(this.instance == null) {
            this.instance = new UserSocket()
        }
        return this.instance
    }

    constructor(){
        this.socket = Socket.getInstance()
    }

    listenUserConnected(cb) {
        this.socket.listen('getUsers', cb);
    }

    emitUserConnected(data) {
        this.socket.emit('updateUser', data);
    }

    disconnect(){
        this.socket.disconnect();
    }
}