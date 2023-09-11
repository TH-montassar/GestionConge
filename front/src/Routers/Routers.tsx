import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  DashboardEmployee,
  DemandeConge,
  ListConge,
  Loading,
  SuiviPointage,
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
        { path: "suiviPointage", element: <SuiviPointage /> },
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
