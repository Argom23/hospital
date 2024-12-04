import {fetchCitas} from "@/app/lib/data";
import {BorrarDoctor, DetailsDoctor, EditarDoctor} from "@/app/ui/doctores/buttons.";

export default async function TablaCitas(){
    const data = await fetchCitas();
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {data?.map((cita:any) => (
                            <div
                                key={cita.ID_PACIENTE}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{cita.NOMBRE_PACIENTE}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{cita.DOCTOR}</p>
                                        <p className="text-sm text-gray-500">{cita.FECHA_CITA}</p>
                                        <p className={"text-sm text-gray-500"}>{cita.HORA_CITA}</p>
                                    </div>
                                    <div className="flex w-full items-center justify-between pt-4">
                                        <div className="flex justify-end gap-2">
                                            <DetailsDoctor id={cita.ID_PACIENTE}/>
                                            <BorrarDoctor id={cita.ID_PACIENTE}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Paciente
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Doctor
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Fecha
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Hora
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {data?.map((cita:any) => (
                            <tr
                                key={cita.ID_PACIENTE}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">

                                        <p>{cita.DOCTOR}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {cita.FECHA_CITA}.
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {cita.HORA_CITA}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}