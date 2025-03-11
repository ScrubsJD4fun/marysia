import { FetchAccountData } from "./fetchAccountData"
import './Account.css'
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

export const Account = () => {
    const[ tabs, setTabs ] = useState(true)
    const isMobile = useMediaQuery({ maxWidth: 576 });
    const handleTabs = () => {
        setTabs(!tabs)
    }
    return (
        <div>
            <h1 className="acc-title">Мой аккаунт</h1>
            <div className="acc-tabs">
                {isMobile 
                ? <button className="btn-reset acc-tabs__settings" onClick={handleTabs}>Настройки</button> 
                : <button className="btn-reset acc-tabs__settings" onClick={handleTabs}>Настройка аккаунта</button>}
                {isMobile 
                ? <button className="btn-reset acc-tabs__films" onClick={handleTabs}>Избранное</button> 
                : <button className="btn-reset acc-tabs__films" onClick={handleTabs}>Избранные фильмы</button>}
            </div>
            <FetchAccountData tab={tabs} />
        </div>
    )
}
