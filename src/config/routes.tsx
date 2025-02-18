import { RouteObject } from "react-router-dom";
import Home from "../domain/home/view/home";
import About from "../domain/about_us/view/about";
import Causes from "../domain/causes/view/causes";
import Details from "../domain/causes/components/details/view/detail.view";
import Donate from "../domain/home/components/donate.comp";
import MainLayout from "../layout/mainLayout";


export default function appRouter(): RouteObject[] {
  return [
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/causes",
          element: <Causes />,
        },
        {
          path: "/donate",
          element: <Donate />,
        },
        {
          path: "/causes/detail",
          element: <Details />,
        },
      ]
    }

  ];
}
