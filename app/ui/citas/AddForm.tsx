import {fetchCitas, fetchPacientes, fetchDoctoresInfo} from "@/app/lib/data";
import {addCita, setId} from "@/app/lib/actions";


export async function AddCitaForm() {
    const citas = await fetchCitas();
    const lastId = () => {
        const sortedDates = citas.sort((a: any, b: any) => b.ID_CITA - a.ID_CITA);
        return sortedDates[0].ID_CITA;
    }
    const nextId = await lastId() + 1;

    const pacientes = await fetchPacientes();
    const doctores = await fetchDoctoresInfo();
    await setId(nextId);

    return (
        <form action={addCita} className="space-y-4">
            <div>
                <label id="id" className="block text-sm font-medium text-gray-700">{nextId}</label>
                <label htmlFor="paciente" className="block text-sm font-medium text-gray-700">Paciente</label>
                <select
                    id="paciente"
                    name="paciente"
                    defaultValue='1'
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {pacientes.map((paciente: any) => (
                        <option key={paciente.ID_PACIENTE} value={paciente.ID_PACIENTE}>
                            {paciente.NOMBRE_COMPLETO}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Doctor</label>
                <select
                    id="doctor"
                    name="doctor"
                    defaultValue='1'
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {doctores.map((doc: any) => (
                        <option key={doc.ID_DOCTOR} value={doc.ID_DOCTOR}>
                            {doc.NOMBRE_DOCTOR}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="fecha_cita" className="block text-sm font-medium text-gray-700">Fecha Cita</label>
                <input
                    id="fecha_cita"
                    name="fecha_cita"
                    type="date"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="hora_cita" className="block text-sm font-medium text-gray-700">Hora Cita</label>
                <input
                    id="hora_cita"
                    name="hora_cita"
                    type="text"
                    required
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
        </form>
    );
}