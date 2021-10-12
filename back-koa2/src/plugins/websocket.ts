/*
 * @Author: zw
 * @Date: 2021-10-12 18:07:47
 * @LastEditors: zw
 * @LastEditTime: 2021-10-12 18:52:32
 * @Description: 
 */
import { Server } from 'socket.io'

type wsConfig={
  server:any
  onDisconnect?:any
  onMessage?:any
  onLeave?:any
}

export default class WebSocket {
    
    init(config:wsConfig){
        const server = new Server(config.server)

        server.on('connection', (socket) => {
            console.log('a user connected');

            socket.on('disconnect', () => {
                console.log('user disconnected');
                if(config.onDisconnect){
                  config.onDisconnect()
                }
            });

            //定义前端事件
            socket.on('message', (msg) => {
                console.log('message: ' + msg);
                if(config.onMessage){
                  config.onMessage()
                }
            });

            socket.on('close',function(){
              //do something when connection close
              if(config.onLeave){
                config.onLeave()
              }
            })
        });
    }
    
}




