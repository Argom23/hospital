import { fetchTratamiento, fetchMedicina } from "@/app/lib/data";
import {addTratamiento, setId} from "@/app/lib/actions";



export async function AddTratamientoForm() {
    const data = await fetchTratamiento();
    const lastId = () => {
        const sortedData = data.sort((a:any, b:any) => b.ID_TRATAMIENTO - a.ID_TRATAMIENTO);
        return sortedData[0].ID_TRATAMIENTO;
    }
    const nextId = await lastId() + 1;

    const medicinas = await fetchMedicina();
    await setId(nextId);
 return (<form action={addTratamiento} className="space-y-4">
     <div className="space-y-4">
         <label id="id" className="block text-sm font-medium text-gray-700">{nextId}</label>
     </div>
     <div>
         <label htmlFor="medicina" className="block text-sm font-medium text-gray-700">Medicina</label>
         <select
             id="medicina"
             name="medicina"
             defaultValue='1'
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
         >
             {medicinas.map((med: any) => (
                 <option key={med.ID_MEDICINA} value={med.ID_MEDICINA}>
                     {med.NOMBRE_MEDICINA}
                 </option>
             ))}
         </select>
     </div>
     <div>
         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Tratamiento</label>
         <input
             type="text"
             id="name"
             name="name"
             defaultValue='Nombre del tratamiento'
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
         />
     </div>
     <div>
         <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
         <input
             type="number"
             id="price"
             name="price"
             defaultValue='Precio del tratamiento'
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
         />
     </div>
     <div>
         <button
             type="submit"
             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
         >
             Agregar
         </button>
     </div>
 </form>);
}