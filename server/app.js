const { Server } = require('socket.io')

let count = 10

const io = new Server({
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  socket.emit('progress', count)
})

io.listen(5000)
