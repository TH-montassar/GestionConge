import { DashboardEmployee } from "../pages/DashboardEmployee";
import { About } from "../pages/About";
import { Loading } from "../pages/Loading";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DemandeConge } from "../pages/DashboardEmployee/DemandeConge";
import { ListConge } from "../pages/DashboardEmployee/ListeConge";

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
