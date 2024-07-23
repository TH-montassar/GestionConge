import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  DashboardEmployee,
  DemandeConge,
  ListConge,
  Loading,
  SuiviPointage,
  ConsulteComputer,
  DashboardRH,
  CreerCompteSalarie,
  ListeEmployee,
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
        { path: "ConsulterComputer", element: <ConsulteComputer /> },
      ],
    },
    {
      path: "/DashboardRH",
      element: <DashboardRH />,
      children: [
        { path: "CreerCompteSalarie", element: <CreerCompteSalarie /> },
        { path: "ListeEmployee", element: <ListeEmployee /> },
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
