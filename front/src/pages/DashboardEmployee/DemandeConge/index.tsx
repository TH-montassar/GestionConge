export const DemandeConge = () => {
  return (
    <div>
      <div className=" w-[60%] h-14 bg-gray-200 p-4 rounded-[30px] mt-4">
        <h2 className="text-black ml-4 " style={{ fontWeight: "bold" }}>
          Demande de congée
        </h2>
      </div>

      <div className=" mt-12">
        <form>
          <div className=" mt-8 flex">
            <select
              name=""
              id=""
              className="w-[10rem] h-[2rem] font-bold pl-6 bg-gray-200 border none rounded-[8px] "
            >
              <option value="">Maladie</option>
              <option value="">Maternite</option>
              <option value="">autre</option>
            </select>
            <span className="pl-6 text-black">Date de début</span>
            <input
              className="w-[10rem] ml-6 pl-4 text-black bg-gray-200 "
              type="date"
            />
            <span className="pl-4 text-black">Date de fin</span>
            <input
              className="w-[10rem] ml-6 pl-4 text-black bg-gray-200"
              type="date"
            />
          </div>
          <button className="bg-primary mt-12 w-40">Submit</button>
        </form>
      </div>
    </div>
  );
};
