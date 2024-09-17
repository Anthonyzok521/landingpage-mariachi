import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Layouts
import { Error404 } from "./pages/error/Error404";
import { PrivateRoutes, PublicRoutes } from './routes';
import PublicLayout from './routes/PublicLayout';
import PrivateLayout from './routes/PrivateLayout';
import './global.css'

//Routes - PublicRoutes for all views
//       - PrivateRoutes only for administrador (upload files[jpg, png, mp4])
const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: PublicRoutes,
        errorElement: <Error404 />
    },
    {
        path: "/admin/",
        element: <PrivateLayout />,
        children: PrivateRoutes,
        errorElement: <Error404 />
    },
]);

//Root Element HTML
const root = document.querySelector('#root') as HTMLDivElement;
const classList: Array<string> = ['transition-all']; //Creating class css with tailwind - Responsive Design
root.classList.add(...classList) // Apply class

//Rending
createRoot(root!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
