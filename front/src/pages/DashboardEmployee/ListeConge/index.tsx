export const ListConge = () => {
  return (
    <div>
      <div className=" w-[60%] h-14 bg-gray-200 p-4 rounded-[30px] mt-4">
        <h2 className="text-black ml-4 " style={{ fontWeight: "bold" }}>
          Lise des congées
        </h2>
      </div>

      <section>
        <div className="flex justify-end  mr-12">
          <select
            name=""
            id=""
            className="w-[10rem] h-[2rem] mt-8 pl-12 bg-gray-200 font-bold border none rounded-[8px] "
          >
            <option value="">All</option>
            <option value="">Accepted</option>
            <option value="">En attend</option>
            <option value="">Rejected</option>
          </select>
        </div>

        <div className="w-[80%]   bg-white mt-4 rounded shadow-md">
          <div className="overflow-x-auto ">
            <table className="w-[100%] divide-y  ">
              <thead >
                <tr >
                  <th className="px-6 py-3 rounded-tl-[30px] rounded-bl-[30px] bg-[#7BAD77] text-left  text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    Motif
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77]  text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    Valoris
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77] text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    Start
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77] text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    End
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77] text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    duration
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77] text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    date creation
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77] rounded-tr-[30px] rounded-br-[30px]  text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 rounded-tl-[30px] rounded-bl-[30px] whitespace-no-wrap bg-gray-100">formation</td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">jour</td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">20/29/2009 </td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">20/29/2009 </td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">3j</td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">20/29/2009 </td>
                  

                  <td className="px-6 py-4 rounded-tr-[30px] rounded-br-[30px]  whitespace-no-wrap bg-gray-100">Accepté</td>
                </tr>

                <tr>
                  <td className="px-2 py-4 rounded-tl-[30px] rounded-bl-[30px] whitespace-no-wrap bg-gray-100">formation</td>
                  <td className="px-2 py-4 whitespace-no-wrap bg-gray-100">jour</td>
                  <td className="px-2 py-4 whitespace-no-wrap bg-gray-100">20/29/2009 </td>
                  <td className="px-2 py-4 whitespace-no-wrap bg-gray-100">20/29/2009 </td>
                  <td className="px-2 py-4 whitespace-no-wrap bg-gray-100">3j</td>
                  <td className="px-2 py-4 whitespace-no-wrap bg-gray-100">20/29/2009 </td>
                  

                  <td className="px-2 py-4 rounded-tr-[30px] rounded-br-[30px] whitespace-no-wrap bg-gray-100">Accepté</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
