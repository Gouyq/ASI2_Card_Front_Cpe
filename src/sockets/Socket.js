import socketIoClient from 'socket.io-client';
const ENDPOINT = "http://127.0.0.1:8080";

export class Socket {
    static instance = null

    static getInstance() {
        if(this.instance == null) {
            this.instance = new Socket()
        }
        return this.instance
    }

    constructor(){
        this.socket = socketIoClient(ENDPOINT);
        console.log('socket')
        this.connect();
    }

    connect(){
        this.socket.emit('connection');
    }

    listen(channel, cb){
        this.socket.on(channel, (data) => {
            cb(data);
        });
    }

    emit(channel, data){
        this.socket.emit(channel, data);
    }

    disconnect(){
        this.socket.disconnect();
    }
}
