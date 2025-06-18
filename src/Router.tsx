import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Start } from "./pages/Start";
import { Animals } from "./pages/Animals";
import { AnimalDetail } from "./pages/AnimalDetail";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Start />,
      },

      {
        path: "/animals",
        element: <Animals />,
      },

      {
        path: "/animal/:id",
        element: <AnimalDetail />,
      },
    ],
  },
]);
