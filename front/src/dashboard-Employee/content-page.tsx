import { Outlet } from 'react-router-dom';
import { Header } from '../dashboard-Employee/header';
import { Sidebare } from '../dashboard-Employee/sidebare';
export const ContentPage = () =>{

    return(
      <div>
         <Header />

         <div className="flex w-full">
            <div className='w-[20%]'>
        <Sidebare />
        </div>
        <main className=' mt-2 w-[80%] ml-[6rem]'  >       
            <Outlet />
        </main>
      </div>
      </div>
    );
    
}