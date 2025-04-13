import { Link } from "react-router-dom"
import CartIcon from "../../assets/icons/CartIcon"
import LikeIcon from "../../assets/icons/LikeIcon"
import styles from "../Header/header.module.scss"

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.title}>
				<h1>QPICK</h1>
			</Link>
			<nav className={styles.navBox}>
				<Link to={"/favorites"} className={styles.iconWrapper}>
					<LikeIcon width="22" height="20" aria-label="Любимые" />
					<div className={styles.badge}><span>2</span></div>
				</Link>
				<Link to={"/cart"}  className={styles.iconWrapper}>
					<CartIcon width="22" height="20" aria-label="Корзина"/>
					<div className={styles.badge}><span>1</span></div>
				</Link>
				
			</nav>
		</header>
	)
}

export default Header