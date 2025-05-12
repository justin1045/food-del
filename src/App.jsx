import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';
import MobileApp from './pages/MobileApp';
import First from './pages/First';
import NotFound from './pages/NotFound';
import Cart from "./pages/Cart";
import StoreContextProvider from './context/StoreContex';
import AuthProvider from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/mobileApp',
        element: <MobileApp />
      },
      {
        path: '/contactUs',
        element: (<ProtectedRoute>
          <ContactUs />
          </ProtectedRoute>)
      },
      {
        path: "/cart",
        element: (<ProtectedRoute>
          <Cart />
        </ProtectedRoute>)
      },
      {
        path: "/signup",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />

      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

function App() {
  return (
    <AuthProvider> 
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
    </AuthProvider>
  );
}

export default App;
