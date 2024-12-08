import {fetchDepartamentos, fetchDoctoresInfo, fetchHospitales, fetchEspecializacion} from "@/app/lib/data";
import {addDoctor, setId} from "@/app/lib/actions";



export async function AddDoctorForm() {
    const doctor = await fetchDoctoresInfo();
    const lastDoctor = () => {
        const sortedDoctors = doctor.sort((a:any, b:any) => b.ID_DOCTOR - a.ID_DOCTOR);
        return sortedDoctors[0].ID_DOCTOR;
    }
    const nextId = await lastDoctor() + 1;

    const hospitals = await fetchHospitales();
    const departments = await fetchDepartamentos();
    const especialization = await fetchEspecializacion();
    await setId(nextId);

 return (<form action= {addDoctor} className="space-y-4">
     <div>
         <label id="id" className="block text-sm font-medium text-gray-700">{nextId}</label>
         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
         <input
             type="text"
             id="name"
             name="name"
             defaultValue='Nombre del doctor'
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
         />
     </div>

     <div>
         <label htmlFor="especialization" className="block text-sm font-medium text-gray-700">Especialización</label>
            <select
                id="especialization"
                name="especialization"
                defaultValue='1'
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                {especialization.map((esp: any) => (
                    <option key={esp.ID_ESPECIALIZACION} value={esp.ID_ESPECIALIZACION}>
                        {esp.NOMBRE_ESPECIALIZACION}
                    </option>
                ))}
            </select>

        </div>

        <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Departamento</label>
            <select
                id="department"
                name="department"
                defaultValue='1'
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
                defaultValue='1'
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
                Agregar
            </button>
        </div>
    </form>);
}