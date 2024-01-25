import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { RestaurantList } from "../components/RestaurantList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RestaurantList />,
      },
      {
        path: "/category/:categoryId",
        element: <RestaurantList />,
      },
    ],
  },
]);
