import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Start } from "./pages/Start";
import { Animals } from "./pages/Animals";
import { MyAnimals } from "./pages/MyAnimals";
import { AnimalDetail } from "./pages/AnilalDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
      {
        path: "/myanimals",
        element: <MyAnimals />,
      },
    ],
  },
]);
