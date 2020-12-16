import socket from 'socket.io-client'
import { useState, useEffect } from 'react'

export const useSocket = ({ event }) => {
  const [data, setData] = useState("")
  const [isConnected, setConnected] = useState(false)

  useEffect(() => {
    const client = socket.connect(process.env.REACT_APP_SOCKET_API)
    client.on("connect", () => setConnected(true))
    client.on("disconnect", () => setConnected(false))
    client.on(event, (data) => {
      setData(data)
    })
    return () => {
      client.off('connect')
      client.off('disconnect')
      client.off(event)
    }
  }, [event, isConnected])

  return { data, isConnected }
}
