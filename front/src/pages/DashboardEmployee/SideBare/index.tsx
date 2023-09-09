import { Link } from "react-router-dom";

export const Sidebare = () => {
  return (
    <div className=" mt-2 h-[100%] bg-gray-200 p-4 rounded-lg flex-shrink-0 flex flex-col">
      <div className="flex flex-col h-full">
      <ul className=" ml-2">
        <li className="mb-8 hover:bg-[#7BAD77]  cursor-pointer  transition duration-300">
          <Link className="text-black hover:text-black " to="suiviPointage">
            Suivi pointage
          </Link>
        </li>
        <li className="mb-8 hover:bg-[#7BAD77] cursor-pointer transition duration-300">
          <Link
            className="text-black hover:text-black "
            to="/DashboardEmployee/listConge"
          >
            Liste des congées
          </Link>
        </li>
        <li className="mb-8 hover:bg-[#7BAD77] cursor-pointer  transition duration-300">
          <Link
            className="text-black hover:text-black "
            to="/DashboardEmployee/demandeConge"
          >
            Demande de congée
          </Link>
        </li>
        <li className="mb-8  hover:bg-[#7BAD77]  cursor-pointer transition duration-300">
          <Link className="text-black hover:text-black " to="/">
            Consulter & computer
          </Link>
        </li>
       </ul>
      </div>
    </div>
  );
};
