export const ConsulteComputer = () => {
  return (
    <div>
      <div className=" w-[60%] h-14 bg-gray-200 p-4 rounded-[30px] mt-4">
        <h2 className="text-black ml-4 " style={{ fontWeight: "bold" }}>
          Consulter & Computer 
        </h2>
      </div>

      <h3 className="text-black ml-28  font-bold mt-12">Compteure previsionnels</h3>

      <div className=" px-auto flex ml-28  m-8">
        <div className="flex flex-col">
          <span >Solde CP</span>
          <div className="w-36 text-center py-2 font-bold mt-4 h-12 bg-gray-200">
            <p>10 days</p>
          </div>
        </div>

        <div className="flex flex-col ml-6">
          <span className="text-black  ">H.effectives ann</span>
          <div className="w-36 text-center py-2 font-bold mt-4 h-12 bg-gray-200">
            <p>3000h</p>
          </div>
        </div>

        <div className="flex flex-col ml-6">
          <span className="text-black ml-4 ">
            nombres des congés effectuées
          </span>
          <div className="w-36 text-center py-2 font-bold mt-4 h-12 bg-gray-200">
            <p>4</p>
          </div>
        </div>
      </div>


      <h3 className="text-black  ml-28 font-bold mt-12">Compture du  Vendredi 18 Aout</h3>
      <div className=" px-auto flex mt-8 ml-28">
        <div className="flex flex-col">
          <span >Solde CP</span>
          <div className="w-36 text-center py-2 font-bold mt-4 h-12 bg-gray-200">
            <p>10 </p>
          </div>
        </div>

        <div className="flex flex-col ml-6">
          <span className="text-black  ">C/D cummulé</span>
          <div className="w-36 text-center py-2 font-bold mt-4 h-12 bg-gray-200">
            <p>-24:00</p>
          </div>
        </div>

      
      </div>

    </div>
  );
};
