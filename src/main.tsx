import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import HomePage from './pages/Home/HomePage';
import { Provider } from './Provider';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';

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
        element: <div style={{ color: "green" }}>Contacts</div>,
      },
      {
        path: "favorites",
        element: <div style={{ color: "blue" }}>Favorites</div>,
      },
      {
        path: "terms-of-service",
        element: <div style={{ color: "orange" }}>Terms Of Service</div>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
