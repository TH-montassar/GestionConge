import { Link } from "react-router-dom";

export const Sidebare = () => {
  return (
    <div className=" fixed  mt-2 h-full  bg-gray-200 p-4 rounded-lg flex items-center">
      <ul className=" mt-[-10rem] ml-4">
        <li className="mb-8 hover:bg-[#7BAD77]  cursor-pointer  transition duration-300">
          <Link className="text-black hover:text-black " to="/">
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
  );
};
