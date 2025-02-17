import { createBrowserRouter } from "react-router";
import App from "../App";
import Tasks from "../components/tasks";
import Login from "../components/pages/login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default routes;
