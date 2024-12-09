import {fetchMedicinaById} from "@/app/lib/data";
import {editMedicina, setId} from "@/app/lib/actions";



export async function EditForm({id}:{id:number}) {
    const data = await fetchMedicinaById(id);
    setId(id);
 return (
     <form action={editMedicina} className="space-y-4">
         <div className="space-y-4">
             <label id="id" className="block text-sm font-medium text-gray-700">{id}</label>
         </div>
         <div>
             <label htmlFor="NOMBRE_MEDICINA" className="block text-sm font-medium text-gray-700">Nombre Medicina</label>
             <input
                 type="text"
                 id="NOMBRE_MEDICINA"
                 name="NOMBRE_MEDICINA"
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             />
         </div>
         <div>
             <label htmlFor="CANTIDAD" className="block text-sm font-medium text-gray-700">Cantidad</label>
             <input
                 type="number"
                 id="CANTIDAD"
                 name="CANTIDAD"
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             />
         </div>
         <div>
             <button
                 type="submit"
                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             >
                 Editar
             </button>
         </div>
     </form>
 );
}