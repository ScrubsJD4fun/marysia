import { type FC } from 'react'
import './Account.css'
import type { AccInfo } from '../../Interfaces/Auth'
import { fetchLogout } from '../../api/fetchAuth'
import { Link } from 'react-router-dom'
import { logOut, unsetFirstLogin } from '../../state/userSlice'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../state/store'
import { queryClient } from '../../api/queryClient'



export const AccountInfo: FC<AccInfo> = ({accInfo}) => {
    const dispatch = useDispatch<AppDispatch>()

    const logoutHandler = () => {
        dispatch(unsetFirstLogin())
        dispatch(logOut());
        fetchLogout();
        // queryClient.invalidateQueries({queryKey: ['profile']})
        queryClient.resetQueries({queryKey: ['profile']})
    }

  return (
    <>
        <div className='acc-user'>
            <span className='acc-user__abbr'>{`${accInfo.data.name.charAt()[0]}${accInfo.data.surname.charAt()[0]}`}</span>
            <div>
                <p className='acc-user__descr'>Имя Фамилия</p>
                <p className='acc-user__name'>{`${accInfo.data.name} ${accInfo.data.surname}`}</p>
            </div>
        </div>
        <div className='acc-user'>
            <span className='acc-user__email'></span>
            <div>
                <p className='acc-user__descr'>Электронная почта</p>
                <p className='acc-user__name'>{accInfo.data.email}</p>
            </div>
        </div>
        <Link to={'/'}>
            <button className='btn-reset acc-dispatch' onClick={logoutHandler}>Выйти из аккаунта</button>
        </Link>
    </>
  )
}
