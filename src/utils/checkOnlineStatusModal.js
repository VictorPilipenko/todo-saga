import React, { useEffect, useState } from 'react'
import { useModal } from '../common/modal/default'
import { useIsMount } from '../hooks/useIsMount'
import { useNavigatorOnLine } from '../hooks/useNavigatorOnLine'

const CheckOnlineStatusModal = () => {
  const isMount = useIsMount()
  const isOnline = useNavigatorOnLine()
  const [message, setMessage] = useState()
  const { showModal, renderModal } = useModal()

  useEffect(() => {
    if (!isMount) {
      if (isOnline) {
        setMessage('доступ к сети восстановлен')
      }
      else {
        setMessage('отсутствует доступ к сети')
      }
      showModal()
    }
  }, [isOnline])

  return renderModal({ message })
}

export default CheckOnlineStatusModal

