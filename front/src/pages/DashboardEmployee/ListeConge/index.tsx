export const ListConge = () => {
  return (
    <div>
      <div className=" w-[60rem] h-14 bg-gray-200 p-4 rounded-[30px] mt-4">
        <h2 className="text-black ml-4 " style={{ fontWeight: "bold" }}>
          Lise des congées
        </h2>
      </div>

      <section>
        <div className="flex justify-end  mr-12">
      <select name="" id="" className="w-[10rem] h-[2rem] mt-8 pl-12 bg-gray-200 font-bold border none rounded-[8px] ">
                        <option   value="">All</option>
                        <option value="">Accepted</option>
                        <option value="">En attend</option>
                        <option value="">Rejected</option>

                    </select></div>
        <div className="w-full mt-[6rem] h-[3rem] bg-[#7BAD77] pt-2 rounded-[16px]">
          <ul className="flex space-x-20 text-black ml-8  font-bold">
            <li>Motif</li>
            <li>Valoris</li>
            <li>Start</li>
            <li>End</li>
            <li>duration</li>
           
          </ul>
        </div>

        <div className="w-[100%] mt-2 h-[3rem] bg-gray-300 rounded-[16px]">
        <ul className="flex space-x-28 text-black ml-8 pt-2 ">
            <li>formation</li>
            <li>jour</li>
            <li>20/29/2009 </li>
            <li>20/29/2009 </li>
            <li>3j</li>
            
          </ul>
        </div>
        <div className="w-[100%] mt-2 h-[3rem] bg-gray-300 rounded-[16px]">
        <ul className="flex space-x-28 text-black ml-8 pt-2 ">
            <li>formation</li>
            <li>jour</li>
            <li>20/29/2009 </li>
            <li>20/29/2009 </li>
            <li>3j</li>
            
          </ul>
        </div>
      </section>
    </div>
  );
};
