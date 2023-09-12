import { Outlet } from "react-router-dom";
import { HeaderRH } from "./Header";
import { SidebarRH } from "./SideBare";

export const DashboardRH = () => {
  return (
    <div className="w-screen  ">
      <HeaderRH />
      <div className="flex  ">
        <div className="w-[12.2%]  ml-24 h-[35rem]">
          <SidebarRH />
        </div>
        <main className=" mt-2   flex-grow ml-4 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};