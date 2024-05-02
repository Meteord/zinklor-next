import React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import LandingPage from "./pages/landing.page";
import GamePage from "./pages/game.page";
import ZinklorAppBar from "./components/appbar.component";
import ErrorPage from "./pages/error.page";
import UltimatePage from "./pages/ultimate.page";
import AdminPage from "./pages/admin.page";

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <ZinklorAppBar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <LandingPage />, errorElement: <ErrorPage /> },
        { index: true, element: <GamePage />, path: "/game" },
        { index: true, element: <UltimatePage />, path: "/ultimatives" },
        { index: true, element: <AdminPage />, path: "/admin" },
      ],
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);

  return <div>{element}</div>;
}
