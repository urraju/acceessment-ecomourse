import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Details from "../Layout/Details";
import NotFound from "../Layout/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`/data.json/${params.id}`),
      },
    ],
  },
]);
export default router;
