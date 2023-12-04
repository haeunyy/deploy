

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use("/",function(req, res) {
    res.sendfile(__dirname + '/main.html');
});

app.listen(5000);


const { WebSocketServer }  = require('ws');

const socket = new WebSocketServer({
    port: 8003
});


socket.on('connection', (ws, req) => {
    ws.on('message', (msg) => {
        console.log('서버에서 온 메세지 : ' + msg);
        // console.log('클라이언트에게 보내는 메세지 : ' + data);
        // ws.send('서버에서 보내는 메세지 : ' + data);
    });
    // ws.send('보낸다 경로로 서버에서 : ' + req.socket.remoteAddress)
});

