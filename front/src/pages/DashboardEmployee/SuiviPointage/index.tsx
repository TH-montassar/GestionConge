export const SuiviPointage = ()=>{

    return(
        <div>
             <div className=" w-[60%] h-14 bg-gray-200 p-4 rounded-[30px] mt-4">
        <h2 className="text-black ml-4 " style={{ fontWeight: "bold" }}>
        Suivi Pointage
        </h2>
      </div>
      <div className="overflow-x-auto mt-24">

  <table className="min-w-full">
    <thead>
      <tr>
        <th className="px-4 py-2"></th>
        <th className="px-4 py-2">Lundi</th>
        <th className="px-4 py-2">Mardi</th>
        <th className="px-4 py-2">Mercredi</th>
        <th className="px-4 py-2">Jeudi</th>
        <th className="px-4 py-2">Vendredi</th>
        <th className="px-4 py-2">Samedi</th>
        <th className="px-4 py-2">Dimanche</th>
      </tr>
      </thead>
    <tbody>
      <tr>
      <th className="px-4 py-2">Badgé</th>
      
        <td className="px-4 py-2">8-----
        <br />-------8 <br />------2</td>
        <td className="px-4 py-2">Row 1, Cell 3</td>
        <td className="px-4 py-2">Row 1, Cell 4</td>
        <td className="px-4 py-2">Row 1, Cell 5</td>
        <td className="px-4 py-2">Row 1, Cell 6</td>
        <td className="px-4 py-2 bg-gray-400"></td>
        <td className="px-4 py-2 bg-gray-400"></td>
      </tr>

      <tr>
      <th className="px-4 py-2">Demandes</th>
        <td className="px-4 py-2">Row 2, Cell 2</td>
        <td className="px-4 py-2">Row 2, Cell 3</td>
        <td className="px-4 py-2">Row 2, Cell 4</td>
        <td className="px-4 py-2">Row 2, Cell 5</td>
        <td className="px-4 py-2">Row 2, Cell 6</td>
        <td className="px-4 py-2 bg-gray-400"></td>
        <td className="px-4 py-2 bg-gray-400"></td>
      </tr>
      <tr>
      <th className="px-4 py-2">Congées</th>
        <td className="px-4 py-2">Row 3, Cell 2</td>
        <td className="px-4 py-2">Row 3, Cell 3</td>
        <td className="px-4 py-2">Row 3, Cell 4</td>
        <td className="px-4 py-2">Row 3, Cell 5</td>
        <td className="px-4 py-2">Row 3, Cell 6</td>
        <td className="px-4 py-2 bg-gray-400"></td>
        <td className="px-4 py-2 bg-gray-400"></td>
      </tr>
      <tr>
      <th className="px-4 py-2">C/D du jour</th>
        <td className="px-4 py-2">Row 4, Cell 2</td>
        <td className="px-4 py-2">Row 4, Cell 3</td>
        <td className="px-4 py-2">Row 4, Cell 4</td>
        <td className="px-4 py-2">Row 4, Cell 5</td>
        <td className="px-4 py-2">Row 4, Cell 6</td>
        <td className="px-4 py-2 bg-gray-400"></td>
        <td className="px-4 py-2 bg-gray-400"></td>
      </tr>
    </tbody>
  </table>
</div>


      
        </div>
    )
}