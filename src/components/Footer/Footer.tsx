import { Link } from "react-router-dom";
import LangIcon from "../../assets/icons/LangIcon"
import TelegramIcon from "../../assets/icons/TelegramIcon"
import VKIcon from "../../assets/icons/VKIcon";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon"
import styles from "../Footer/footer.module.scss"

const footerLinks = [
  { id: 1, name: "Избранное", href: "/favorites" },
  { id: 2, name: "Корзина", href: "/cart" },
  { id: 3, name: "Контакты", href: "/contacts" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoBox}>
            <Link to={'/'}><h2 className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>QPICK</h2></Link>
          </div>

          <div className={styles.nav}>
            <nav>
              <ul className={styles.links}>
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <Link className={styles.link} to={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.links}>
              <Link className={styles.link} to="/terms-of-service">
                Условия сервиса
              </Link>

              <div className={styles.language}>
                <LangIcon />
                <span className={styles.active}>Рус</span>
                <span className={styles.inactive}>Eng</span>
              </div>
            </div>
          </div> 

          <div className={styles.social}>
            <Link
              className={styles.socialButton}
              to="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VK"
            >
            <VKIcon width={24} />
            </Link>
            <Link
              className={styles.socialButton}
              to="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
            <TelegramIcon width={24}/>
            </Link>
            <Link
              className={styles.socialButton}
              to="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
            <WhatsAppIcon width={24} />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};
