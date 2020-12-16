import io from "socket.io-client"

export const connect = () => {
  const socket = io(process.env.REACT_APP_SOCKET_API)

  return new Promise((resolve) => {
    socket.on("connect", () => {
      resolve(socket)
    })
  })
}

export const disconnect = socket => {
  socket.close()
}
