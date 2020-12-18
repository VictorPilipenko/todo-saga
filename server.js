const jsonServer = require('json-server')
const auth = require('json-server-auth')
const socket = require('socket.io')
 
const middlewares = jsonServer.defaults()
const app = jsonServer.create()
const router = jsonServer.router('db.json')
 
// /!\ Bind the router db to the app
app.db = router.db
 
// You must apply the auth middleware before the router
app.use(middlewares)
app.use(auth)
app.use(router)

const port = 4000
const server = app.listen(port, () => console.log(`listening on port ${port}`))
const io = socket(server, {
  cors: {
    origin: '*',
  }
})

io.on('connection', socket => {
  console.log(`connect: ${socket.id}`)
  socket.on('disconnect', () => console.log(`disconnect: ${socket.id}`))
})

setInterval(() => {
  io.emit('date+fresh', new Date().toISOString())
}, 1000)
