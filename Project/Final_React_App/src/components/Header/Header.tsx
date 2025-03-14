import logo from "/logo.png"
import { Link } from "react-router-dom"
import { Modal } from "../Modal"
import { useModal } from "../../hooks/useModal"
import "./Header.css"
import { HeaderAccount } from "./HeaderAccountButton"
import { AuthForm } from "../AuthForm"
import { HeaderSearch } from "./Search/HeaderSearch"
import { useMediaQuery } from "react-responsive"
import { SvgGenres } from "../../assets"

export const Header = () => {
  const { isClose, modalHandler } = useModal()
  const isMobile = useMediaQuery({ maxWidth: 576 })

  return (
    <header className="header-app">
      <Link className="header-logo" to={"/"}>
        <img src={logo} alt="Лого маруси" />
      </Link>
      <nav className="header-nav">
        <Link to={"/"} className="header-nav__link">
          <span className="header-nav__main">Главная</span>
        </Link>
        <Link to={"/genres"} className="header-nav__link">
          <span className="header-nav__genres">
            Жанры
            {isMobile ? <SvgGenres /> : ""}
          </span>
        </Link>
        <HeaderSearch />
        <HeaderAccount />

        {modalHandler && <Modal children={<AuthForm />} closeModal={isClose} />}
      </nav>
    </header>
  )
}
