import {
    fetchCantones, fetchDistritos,
    fetchPacientes, fetchPaises, fetchProvincias

} from "@/app/lib/data";
import {addPaciente, setId} from "@/app/lib/actions";



export async function AddPacienteForm() {
    const data = await fetchPacientes();
    const paises = await fetchPaises();
    const provincias = await fetchProvincias();
    const cantones = await fetchCantones();
    const distritos = await fetchDistritos();
    const last = () => {
        const sorted = data.sort((a:any, b:any) => b.ID_PACIENTE - a.ID_PACIENTE);
        return sorted[0].ID_PACIENTE;
    }
    const nextId = await last() + 1;
    await setId(nextId);

    return (<form action={addPaciente} className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
                type="text"
                id="NOMBRE_PACIENTE"
                name="NOMBRE_PACIENTE"
                className="mt-1 mr-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
                type="text"
                id="PRIAPELLIDO_PACIENTE"
                name="PRIAPELLIDO_PACIENTE"
                className="mt-1  mr-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
                type="text"
                id="SEGAPELLIDO_PACIENTE"
                name="SEGAPELLIDO_PACIENTE"
                className="mt-1 mr-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Numero de telefono</label>
            <input
                type="number"
                id="NUMERO_PACIENTE"
                name="NUMERO_PACIENTE"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div>
            <label htmlFor="pais" className="block text-sm font-medium text-gray-700">Pais</label>
            <select
                id="ID_PAIS"
                name="ID_PAIS"
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
                id="ID_PROVINCIA"
                name="ID_PROVINCIA"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                {provincias.map((p: any) => (
                    <option key={p.ID_PROVINCIA} value={p.ID_PROVINCIA}>
                        {p.NOMBRE_PROVINCIA}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="canton" className="block text-sm font-medium text-gray-700">Canton</label>
            <select
                id="ID_CANTON"
                name="ID_CANTON"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                {cantones.map((p: any) => (
                    <option key={p.ID_CANTON} value={p.ID_CANTON}>
                        {p.NOMBRE_CANTON}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="distrito" className="block text-sm font-medium text-gray-700">Distrito</label>
            <select
                id="ID_DISTRITO"
                name="ID_DISTRITO"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                {distritos.map((p: any) => (
                    <option key={p.ID_DISTRITO} value={p.ID_DISTRITO}>
                        {p.NOMBRE_DISTRITOS}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Correo</label>
            <input
                type="text"
                id="CORREO_PACIENTE"
                name="CORREO_PACIENTE"
                className="mt-1 mr-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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