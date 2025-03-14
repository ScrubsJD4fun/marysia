// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../state/store"
import { openTrailer, closeTrailer } from "../state/userSlice"

export function useModalTrailer() {
  //глобальное состояние модального окна
  const trailerHandler = useSelector(
    (state: RootState) => state.userAuth.openTrailer,
  )
  //глобальное состояние авторизации
  const dispatch = useDispatch<AppDispatch>()

  const isOpenTrailer = () => {
    dispatch(openTrailer())
  }
  const isCloseTrailer = () => {
    dispatch(closeTrailer())
  }

  return {
    trailerHandler,
    isOpenTrailer,
    isCloseTrailer,
  }
}
