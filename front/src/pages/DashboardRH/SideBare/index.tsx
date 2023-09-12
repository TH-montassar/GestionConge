import { Link } from "react-router-dom";

export const SidebarRH = () => {
  return (
    <div className=" mt-2 !h-full bg-gray-200 p-4 rounded-lg flex-shrink-0 flex flex-col ">
      <div className="flex flex-col h-full">
        <ul className=" ml-2 mt-24">
          <li className="mb-8 hover:bg-[#7BAD77]  cursor-pointer  transition duration-300">
            <Link className="text-black hover:text-black " to="/DashboardRH/CreerCompteSalarie">
              Créer Compte Salariée
            </Link>
          </li>
          <li className="mb-8 hover:bg-[#7BAD77] cursor-pointer transition duration-300">
            <Link
              className="text-black hover:text-black "
              to="/DashboardEmployee/listConge"
            >
              Liste Employés
            </Link>
          </li>
          <li className="mb-8 hover:bg-primary   cursor-pointer  transition duration-300">
            <Link
              className="text-black hover:text-black "
              to="/DashboardEmployee/demandeConge"
            >
             Liste Demandes des congées
            </Link>
          </li>
          <li className="mb-8  hover:bg-[#7BAD77]  cursor-pointer transition duration-300">
            <Link
              className="text-black hover:text-black "
              to="/DashboardEmployee/ConsulterComputer"
            >
              Consulter & computer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
