import {
    fetchTratamientosById,
    fetchMedicina,
    fetchPacientes,
    fetchDoctoresInfo,
    fetchCirugias,
    fetchCirugiasById
} from "@/app/lib/data";
import {editCirugia, setId} from "@/app/lib/actions";



export async function EditForm({id}:{id:number}) {
    const cirugia = await fetchCirugiasById(id);
    const pacientes = await fetchPacientes()
    const doctores = await fetchDoctoresInfo()
    setId(id);

 return (
     <form action={editCirugia} className="space-y-4">
         <div className="space-y-4">
             <label id="id" className="block text-sm font-medium text-gray-700">{id}</label>
         </div>
         <div>
             <label htmlFor="NOMBRE_CIRUGIA" className="block text-sm font-medium text-gray-700">Nombre Cirugía</label>
             <input
                 type="text"
                 id="NOMBRE_CIRUGIA"
                 name="NOMBRE_CIRUGIA"
                 defaultValue={cirugia[0].NOMBRE_CIRUGIA}
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 required
             />
         </div>
         <div>
             <label htmlFor="paciente" className="block text-sm font-medium text-gray-700">Paciente</label>
             <select
                 id="ID_PACIENTE"
                 name="ID_PACIENTE"
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 required
             >
                 {pacientes.map((paciente: any) => (
                     <option key={paciente.ID_PACIENTE} value={paciente.ID_PACIENTE}>
                         {paciente.NOMBRE_COMPLETO}
                     </option>
                 ))}
             </select>
         </div>
         <div>
             <label htmlFor="Doctor" className="block text-sm font-medium text-gray-700">Doctor</label>
             <select
                 id="ID_DOCTOR"
                 name="ID_DOCTOR"
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 required
             >
                 {doctores.map((doctor: any) => (
                     <option key={doctor.ID_DOCTOR} value={doctor.ID_DOCTOR}>
                         {doctor.NOMBRE_DOCTOR}
                     </option>
                 ))}
             </select>
         </div>
         <div>
             <input
                 type="date"
                 id="FECHA_CIRUGIA"
                 name="FECHA_CIRUGIA"
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 required
             />
         </div>
         <div>
             <input
                 type="text"
                 id="HORA_CIRUGIA"
                 name="HORA_CIRUGIA"
                 defaultValue={cirugia[0].HORA_CIRUGIA}
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 required
             />
         </div>
         <div>
             <input
                 type="number"
                 id="COSTO_CIRUGIA"
                 name="COSTO_CIRUGIA"
                 defaultValue={cirugia[0].COSTO_CIRUGIA}
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 required
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