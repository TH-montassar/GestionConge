export const CreerCompteSalarie = () => {
  return (
    <div>
      <div className=" w-[60%] h-14 bg-gray-200 p-4 rounded-[30px] mt-4">
        <h2 className="text-black ml-4 " style={{ fontWeight: "bold" }}>
          Créer compte salariées
        </h2>
      </div>

      <div className="flex flex-col w-[80%] h-full m-auto mt-24">
        <div className="flex  ">
            <span>First Name</span>
          <input className="bg-gray-300 w-[16rem] ml-4 h-10 px-4 text-black" type="text" placeholder="First Name" />
          <span className="ml-12">Last Name</span>
          <input className="bg-gray-300 w-[16rem]  ml-4 h-10 px-4 text-black" type="text" placeholder="Last Name" />
        </div>

        <div className="flex  mt-12">
        <span>Email</span>
          <input className="bg-gray-300 w-[16rem] ml-14 h-10 px-4 text-black" type="email" placeholder="Email" />
          <span className="ml-12">Password</span>
          <input className="bg-gray-300 w-[16rem] ml-8 h-10 px-4 text-black" type="password"  placeholder="Password" />
        </div>
        <div className="flex mt-12">
        <span>Matricule</span>
          <input className="bg-gray-300 w-[16rem] ml-7 h-10 px-4 text-black" type="text"  placeholder="Matricule"/>
          <span className="ml-12">Specialty</span>
          <input className="bg-gray-300 w-[16rem] ml-8 h-10 px-4 text-black" type="text" placeholder="Specialty"/>
        </div>

        <button className="w-48 bg-primary h-14 text-black mt-12 ml-[20rem] ">Create account</button>
      </div>
    </div>
  );
};
