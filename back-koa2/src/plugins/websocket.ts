/*
 * @Author: zw
 * @Date: 2021-10-12 18:07:47
 * @LastEditors: zw
 * @LastEditTime: 2021-10-12 18:52:32
 * @Description: 
 */
import { Server } from 'socket.io'


export default class Websocket {
    
    init(_server){
        const server = new Server(_server)

        server.on('connection', (socket) => {
            console.log('a user connected');

            socket.on('disconnect', () => {
                console.log('user disconnected');
            });

            //定义前端事件
            socket.on('chat message', (msg) => {
                console.log('message: ' + msg);
            });
        });
    }
    
}




