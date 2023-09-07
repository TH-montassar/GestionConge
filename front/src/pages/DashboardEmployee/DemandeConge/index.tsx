export const DemandeConge = ()=>{

    return(
        <div>
            <div className=" w-[60rem] h-14 bg-gray-200 p-4 rounded-[30px] mt-4"
            >
                <h2 className="text-black ml-4 " style={{fontWeight:'bold'}}>Demande de congée</h2>
            </div>
            
            <div className=" mt-8">
                <form >
                    <select name="" id="" className="w-[10rem] h-[2rem] font-bold pl-6 bg-gray-200 border none rounded-[8px] ">
                        <option value="">Maladie</option>
                        <option value="">Maternite</option>
                        <option value="">autre</option>
                    </select>
                </form>
            </div>
        </div>
    );
}