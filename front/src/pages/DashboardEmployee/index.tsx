import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebare } from "./SideBare";
export const DashboardEmployee = () => {
  return (
    <div className="w-screen  ">
      <Header />
      <div className="flex  ">
        <div className="w-[12.2%]  ml-24 h-[35rem]">
          <Sidebare />
        </div>
        <main className=" mt-2   flex-grow ml-4 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
