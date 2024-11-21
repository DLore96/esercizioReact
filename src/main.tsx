import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContextProvider } from './context/AuthContextProvider.tsx';
import './index.css';
import { routesEsercitazione } from './routes/routes-esercitazione.tsx';

const router = createBrowserRouter(routesEsercitazione);

const notify = () => toast("This is a toast notification!");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
)
