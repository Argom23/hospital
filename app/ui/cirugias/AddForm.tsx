import {
    fetchCirugias, fetchDoctoresInfo,
    fetchPacientes

} from "@/app/lib/data";
import {addCirugia, setId} from "@/app/lib/actions";



export async function AddCirugiaForm() {
    const data = await fetchCirugias()
    const pacientes = await fetchPacientes()
    const doctores = await fetchDoctoresInfo()
    const last = () => {
        const sorted = data.sort((a:any, b:any) => b.ID_CIRUGIA - a.ID_CIRUGIA);
        return sorted[0].ID_CIRUGIA;
    }
    const nextId = await last() + 1;
    await setId(nextId);
    return (<form action={addCirugia} className="space-y-4">
        <div>
            <label htmlFor="NOMBRE_CIRUGIA" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
                type="text"
                id="NOMBRE_CIRUGIA"
                name="NOMBRE_CIRUGIA"
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
                        {paciente.NOMBRE_PACIENTE}
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
            />
        </div>
        <div>
            <input
                type="number"
                id="COSTO_CIRUGIA"
                name="COSTO_CIRUGIA"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
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