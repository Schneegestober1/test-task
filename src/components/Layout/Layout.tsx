import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import Header from '../Header/Header'
import { Footer } from '../Footer/Footer'

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout
