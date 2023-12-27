import { createBrowserRouter } from "react-router-dom";
import Slider1 from "../Components/Slider1/Slider1";
import Slider2 from "../Components/Slider2/Slider2";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/slider1",
        element: <Slider1 />,
      },
      {
        path: "/slider2",
        element: <Slider2 />,
      }
    ],
  }
]);

export default router;