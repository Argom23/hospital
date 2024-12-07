import {fetchDepartamentos, fetchDoctoresInfoById, fetchHospitales} from "@/app/lib/data";
import {editDoctor, setId} from "@/app/lib/actions";



export async function EditForm({id}:{id:number}) {
    const doctor = await fetchDoctoresInfoById(id);
    const hospitals = await fetchHospitales();
    const departments = await fetchDepartamentos();
    setId(id);

 return (<form action= {editDoctor} method="POST" className="space-y-4">
     <div>
         <label id="id" className="block text-sm font-medium text-gray-700">{id}</label>
         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
         <input
             type="text"
             id="name"
             name="name"
             defaultValue={doctor[0].NOMBRE_DOCTOR}
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
         />
     </div>

     <div>
         <label htmlFor="especialization" className="block text-sm font-medium text-gray-700">Especialización</label>
            <input
                type="text"
                id="especialization"
                name="especialization"
                defaultValue={doctor[0].ESPECIALIZACION}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Departamento</label>
            <select
                id="department"
                name="department"
                defaultValue={doctor[0].DEPARTAMENTO}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                {departments.map((dept: any) => (
                    <option key={dept.ID_DEPARTAMENTO} value={dept.ID_DEPARTAMENTO}>
                        {dept.NOMBRE_DEPARTAMENTO}
                    </option>
                ))}
            </select>
        </div>

        <div>
            <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">Hospital</label>
            <select
                id="hospital"
                name="hospital"
                defaultValue={doctor[0].HOSPITAL}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                {hospitals.map((hospital: any) => (
                    <option key={hospital.ID_HOSPITAL} value={hospital.ID_HOSPITAL}>
                        {hospital.NOMBRE_HOSPITAL}
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
    </form>);
}