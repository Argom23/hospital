import {
    fetchCantones, fetchDepartamentos,
    fetchDistritos,
    fetchPaises,
    fetchPersonalById,
    fetchProvincias
} from "@/app/lib/data";
import {editPersonal, setId} from "@/app/lib/actions";



export async function EditForm({id}:{id:number}) {
    const personal = await fetchPersonalById(id);
    const paises = await fetchPaises();
    const provincias = await fetchProvincias();
    const cantones = await fetchCantones();
    const distritos = await fetchDistritos();
    const departamentos = await fetchDepartamentos();
    setId(id);

 return (
     <form action={editPersonal} className="space-y-4">
         <div className="space-y-4">
             <label id="id" className="block text-sm font-medium text-gray-700">{id}</label>
         </div>
         <div>
             <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
             <input
                 type="text"
                 id="nombre"
                 name="nombre"
                 defaultValue={personal[0].NOMBRE_COMPLETO}
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             />
         </div>
         <div>
             <label htmlFor="priApellido" className="block text-sm font-medium text-gray-700">Primer Apellido</label>
             <input
                 type="text"
                 id="priApellido"
                 name="priApellido"
                 defaultValue={personal[0].NOMBRE_COMPLETO}
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             />
         </div>
         <div>
             <label htmlFor="segApellido" className="block text-sm font-medium text-gray-700">Segundo
                 Apellido</label>
             <input
                 type="text"
                 id="segApellido"
                 name="segApellido"
                 defaultValue={personal[0].NOMBRE_COMPLETO}
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             />
         </div>
         <div>
             <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Telefono</label>
             <input
                 type="number"
                 id="telefono"
                 name="telefono"
                 defaultValue={personal[0].NUMERO_PERSONAL}
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             />
         </div>
         <div>
             <label htmlFor="pais" className="block text-sm font-medium text-gray-700">Pais</label>
             <select
                 id="pais"
                 name="pais"
                 defaultValue='1'
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             >
                 {paises.map((pais: any) => (
                     <option key={pais.ID_PAIS} value={pais.ID_PAIS}>
                         {pais.NOMBRE_PAIS}
                     </option>
                 ))}
             </select>
         </div>
         <div>
             <label htmlFor="provincia" className="block text-sm font-medium text-gray-700">Provincia</label>
             <select
                 id="provincia"
                 name="provincia"
                 defaultValue='1'
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             >
                 {provincias.map((provincia: any) => (
                     <option key={provincia.ID_PROVINCIA} value={provincia.ID_PROVINCIA}>
                         {provincia.NOMBRE_PROVINCIA}
                     </option>
                 ))}
             </select>
         </div>
         <div>
             <label htmlFor="canton" className="block text-sm font-medium text-gray-700">Canton</label>
             <select
                 id="canton"
                 name="canton"
                 defaultValue='1'
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             >
                 {cantones.map((canton: any) => (
                     <option key={canton.ID_CANTON} value={canton.ID_CANTON}>
                         {canton.NOMBRE_CANTON}
                     </option>
                 ))}
             </select>
         </div>
         <div>
             <label htmlFor="distrito" className="block text-sm font-medium text-gray-700">Distrito</label>
             <select
                 id="distrito"
                 name="distrito"
                 defaultValue='1'
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             >
                 {distritos.map((distrito: any) => (
                     <option key={distrito.ID_DISTRITO} value={distrito.ID_DISTRITO}>
                         {distrito.NOMBRE_DISTRITOS}
                     </option>
                 ))}
             </select>
         </div>
         <div>
             <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
             <input
                 type="email"
                 id="correo"
                 name="correo"
                 required
                 defaultValue={personal[0].CORREO_PERSONAL}
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             />
         </div>
         <div>
             <label htmlFor="departamento" className="block text-sm font-medium text-gray-700">Departamentos</label>
             <select
                 id="departamento"
                 name="departamento"
                 defaultValue='1'
                 required
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             >
                 {departamentos.map((departamento: any) => (
                     <option key={departamento.ID_DEPARTAMENTO} value={departamento.ID_DEPARTAMENTO}>
                         {departamento.NOMBRE_DEPARTAMENTO}
                     </option>
                 ))}
             </select>
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