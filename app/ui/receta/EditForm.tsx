import {fetchRecetasById, fetchMedicina, fetchPacientes} from "@/app/lib/data";
import {editReceta, setId} from "@/app/lib/actions";



export async function EditForm({id}:{id:number}) {
    const receta = await fetchRecetasById(id);
    const pacientes = await fetchPacientes();
    const medicinas = await fetchMedicina();
    setId(id);

 return (
     <form action={editReceta} className="space-y-4">
         <div className="space-y-4">
             <label id="id" className="block text-sm font-medium text-gray-700">{id}</label>
         </div>
         <div>
             <label htmlFor="paciente" className="block text-sm font-medium text-gray-700">Paciente</label>
             <select
                 id="paciente"
                 name="paciente"
                 defaultValue='1'
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             >
                 {pacientes.map((p: any) => (
                     <option key={p.ID_PACIENTE} value={p.ID_PACIENTE}>
                         {p.NOMBRE_COMPLETO}
                     </option>
                 ))}
             </select>
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
             <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha Receta</label>
             <input
                 type="date"
                 id="fecha"
                 name="fecha"
                 defaultValue={receta[0].FECHA_RECETA}
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