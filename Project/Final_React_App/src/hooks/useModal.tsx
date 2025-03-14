// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../state/store"
import { openModal, closeModal } from "../state/userSlice"

export function useModal() {
  //глобальное состояние модального окна
  const modalHandler = useSelector(
    (state: RootState) => state.userAuth.openModal,
  )
  //глобальное состояние авторизации
  const userIsLogined = useSelector(
    (state: RootState) => state.userAuth.userIsLogined,
  )
  const firstLogin = useSelector(
    (state: RootState) => state.userAuth.firstLogin,
  )
  const dispatch = useDispatch<AppDispatch>()

  const isOpen = () => {
    dispatch(openModal())
  }
  const isClose = () => {
    dispatch(closeModal())
  }

  return {
    userIsLogined,
    modalHandler,
    firstLogin,
    isOpen,
    isClose,
  }
}
