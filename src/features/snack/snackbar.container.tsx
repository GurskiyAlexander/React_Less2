import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'

import { $snackList, updateSnackList } from './snackbar-store'

export const SnackBarContainer = () => {
  const snackList = useStore($snackList)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (snackList.length != 0) {
      setIsVisible(true)
      const snack = snackList[0]
      const timeout = setTimeout(() => {
        updateSnackList()
        setIsVisible(false)
      }, snack.duration)
      return () => clearTimeout(timeout)
    }
  }, [snackList])

  const pressedClose = () => {
    updateSnackList()
    setIsVisible(false)
  }

  return { pressedClose, isVisible }
}
