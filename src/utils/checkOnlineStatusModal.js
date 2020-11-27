import React, { useEffect, useState } from 'react'
import { useModal } from '../common/modal/default'
import { useIsFirstMount } from '../hooks/useIsFirstMount'
import { useNavigatorOnLine } from '../hooks/useNavigatorOnLine'

const CheckOnlineStatusModal = () => {
  const isFirstMount = useIsFirstMount()
  const isOnline = useNavigatorOnLine()
  const [message, setMessage] = useState()
  const { showModal, renderModal } = useModal()

  useEffect(() => {
    if (!isFirstMount) {
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

