import {fetchCitas, fetchDoctoresInfo, fetchPacientes} from "@/app/lib/data";

export async function NumeroPacientes(){
    const data = await fetchPacientes();
    const last = () => {
        const sorted = data.sort((a:any, b:any) => b.ID_PACIENTE - a.ID_PACIENTE);
        return sorted[0].ID_PACIENTE;
    }
    return last()
}

export async function NumeroDoctores(){
    const data = await fetchDoctoresInfo();
    const last = () => {
        const sorted = data.sort((a:any, b:any) => b.ID_DOCTOR - a.ID_DOCTOR);
        return sorted[0].ID_DOCTOR;
    }
    return last()
}

export async function NumeroCitas(){
    const data = await fetchCitas();
    const last = () => {
        const sorted = data.sort((a:any, b:any) => b.ID_CITA - a.ID_CITA);
        return sorted[0].ID_CITA;
    }
    return last()
}


export default async function Page() {
    const pacientes = await NumeroPacientes();
    const doctores = await NumeroDoctores();
    const citas = await NumeroCitas();

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <header className="bg-blue-600 text-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Hospital Dashboard</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
                {/* Welcome Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Bienvenido al Dashboard</h2>
                    <p className="text-gray-600">Gestiona las operaciones de tu hospital de manera eficiente.</p>
                </section>

                {/* Statistics Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        {label: 'Pacientes Activos', value: pacientes},
                        {label: 'Doctores Disponibles', value: doctores},
                        {label: 'Citas Programadas', value: citas},
                    ].map((stat, index) => (
                        <div
                            key={index} // Aquí index es suficiente como clave porque la lista es estática.
                            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
                        >
                            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                            <p className="text-gray-600 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Hospital Dashboard. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}