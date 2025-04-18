import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import HomePage from './pages/Home/HomePage'
import { Provider } from './Provider'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import { CartProvider } from './components/Context/CartContext'
import styles from "../src/components/Cart/cart.module.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contacts",
        element: <h3 className={styles.pageTitle}>Контакты</h3>,
      },
      {
        path: "favorites",
        element: <h3 className={styles.pageTitle}>Избранное</h3>,
      },
      {
        path: "terms-of-service",
        element: <h3 className={styles.pageTitle}>Условия сервиса</h3>,
      },
    ],
  },
], {
  basename: "/test-task"
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider >
      <CartProvider>
        <RouterProvider router={router}  />
      </CartProvider>
    </Provider>
  </StrictMode>,
)
