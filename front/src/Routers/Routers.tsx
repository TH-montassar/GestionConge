import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  DashboardEmployee,
  DemandeConge,
  ListConge,
  Loading,
} from "../pages";

const Routers = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <Loading /> },
    { path: "/about", element: <About /> },
    {
      path: "/DashboardEmployee",
      element: <DashboardEmployee />,
      children: [
        { path: "DemandeConge", element: <DemandeConge /> },
        { path: "listConge", element: <ListConge /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Routers;
