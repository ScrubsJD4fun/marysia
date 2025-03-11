// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import { openSearch, closeSearch } from "../state/userSlice";

export function useModalSearch() {
    //глобальное состояние модального окна
    const searchHandler = useSelector((state: RootState) => state.userAuth.openSearch)
    //глобальное состояние авторизации
    const dispatch = useDispatch<AppDispatch>()
    
    const isOpenSearch = () => {
        dispatch(openSearch())
    }
    const isCloseSearch = () => {
        dispatch(closeSearch())
    }
    
    return {
        searchHandler,
        isOpenSearch,
        isCloseSearch,
    }
}