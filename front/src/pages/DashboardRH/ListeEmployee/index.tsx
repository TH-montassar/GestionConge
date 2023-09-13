export const ListeEmployee = () => {
  return (
    <div>
      <div className=" w-[60%] h-14 bg-gray-200 p-4 rounded-[30px] mt-4">
        <h2 className="text-black ml-4 " style={{ fontWeight: "bold" }}>
          Lise Employee
        </h2>
      </div>

      <section>
        <div className="w-[80%]   bg-white mt-12 ml-8 rounded shadow-md">
          <div className="overflow-x-auto ">
            <table className="w-[100%] divide-y  ">
              <thead>
                <tr>
                  <th className="px-6 py-3 rounded-tl-[30px] rounded-bl-[30px] bg-[#7BAD77] text-left  text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77]  text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77] text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    Speciality
                  </th>
                  <th className="px-2 py-3 bg-[#7BAD77]  rounded-tr-[30px] rounded-br-[30px] text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 rounded-tl-[30px] rounded-bl-[30px] whitespace-no-wrap bg-gray-100">
                    Hadil Hammami
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">
                    hadilhammami670@gmail.com
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">
                   Full Stack web developer
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap  rounded-tr-[30px] rounded-br-[30px] bg-gray-100">
                    ...
                  </td>

                </tr>

                <tr>
                  <td className="px-6 py-4 rounded-tl-[30px] rounded-bl-[30px] whitespace-no-wrap bg-gray-100">
                    Hadil Hammami
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">
                    hadilhammami670@gmail.com
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap bg-gray-100">
                   Full Stack web developer
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap  rounded-tr-[30px] rounded-br-[30px] bg-gray-100">
                    ...
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
