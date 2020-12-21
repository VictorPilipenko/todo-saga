const cors = require('cors')
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const socket = require('socket.io')
const middlewares = jsonServer.defaults()
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const jwt = require('jsonwebtoken')
app.use(cors())

app.get('/profile', auth, (req, res, next) => {
  const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;
  if (token) {
    try {
      const data = jwt.verify(token, 'json-server-auth-123456')
      const { db } = req.app;
      let user = db.get('users').find({ email: data.email }).value();
      res.json(user)
    }
    catch (error) {
      res.status(500).json(error)
    }

  } else {
    res.status(404).json("User not authorized")
  }
});

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
