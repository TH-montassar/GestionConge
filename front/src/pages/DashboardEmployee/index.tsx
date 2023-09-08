import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebare } from "./SideBare";
export const DashboardEmployee = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="flex w-full">
        <div className="w-[20%]">
          <Sidebare />
        </div>
        <main className=" mt-2 w-[80%] ml-[6rem]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
