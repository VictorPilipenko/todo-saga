const app = require('express')()
const socket = require('socket.io')
const port = 5000
const server = app.listen(port, () => console.log(`listening on port ${port}`))
const io = socket(server, {
  cors: {
    origin: '*',
  }
})

io.on('connection', socket => {
  console.log(`connect: ${socket.id}`)
  socket.on('disconnect', () => {
    console.log(`disconnect: ${socket.id}`)
  })
})

setInterval(() => {
  io.emit('date+fresh', new Date().toISOString())
}, 1000)
