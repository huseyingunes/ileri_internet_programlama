const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('Sunucu çalışıyor');
});

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('Bir tarayıcı bağlandı');

  socket.on('sendMessage', (message) => {
    console.log(message);
  });
});

server.listen(3000, () => {
  console.log('Sunucu 3000 portunu dinliyor');
});
