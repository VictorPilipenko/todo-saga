import io from 'socket.io-client'

export const connect = () => {
  const socket = io(process.env.REACT_APP_SOCKET_API, {
    reconnectionDelayMax: 10000,
    reconnectionAttempts: 3,
  })

  return new Promise((resolve, reject) => {
    socket.on('disconnect', () => {
      socket.close()
    })
    socket.io.on('error', (error) => {
      socket.close()
      reject(error)
    })
    socket.on('connect', () => {
      resolve(socket)
    })
  })
}

export const disconnect = (socket) => {
  socket.close()
}
