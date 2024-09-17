//Pages for render
import { Home } from "../pages/Home";

//View Public
export const PublicRoutes = [
  {
    path: "/",
    element: <Home/>,
    children: [],
  },
];

//View Admin
export const PrivateRoutes = [
    { path: "/admin/", element: <Home/> },
];
