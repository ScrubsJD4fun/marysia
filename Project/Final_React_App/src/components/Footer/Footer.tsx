/* eslint-disable jsx-a11y/anchor-is-valid */
import vk from "/vk.png"
import youtube from "/youtube.png"
import ok from "/ok.png"
import tg from "/telegram.png"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <a className="footer-img" href="#">
        <img src={vk} alt="Ссылка на вк" />
      </a>
      <a className="footer-img" href="#">
        <img src={youtube} alt="Ссылка на ютуб" />
      </a>
      <a className="footer-img" href="#">
        <img src={ok} alt="Ссылка на одноклассники" />
      </a>
      <a className="footer-img" href="#">
        <img src={tg} alt="Ссылка на телеграмм" />
      </a>
    </footer>
  )
}
