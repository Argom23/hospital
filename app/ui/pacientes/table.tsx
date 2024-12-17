

import {BorrarPaciente, DetailsPaciente, EditarPaciente} from "@/app/ui/pacientes/buttons";
import {fetchPacientes} from "@/app/lib/data";

export async function PacientesTable() {
    const pacientes = await fetchPacientes();
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {pacientes?.map((paciente:any) => (
                            <div
                                key={paciente.ID_PACIENTE}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{paciente.NOMBRE_COMPLETO}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{paciente.NUMERO_PACIENTE}</p>
                                        <p className="text-sm text-gray-500">{paciente.CORREO_PACIENTE}</p>
                                        <p className={"text-sm text-gray-500"}>{paciente.DIRECCION}</p>
                                    </div>

                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className="flex justify-end gap-2">
                                        <DetailsPaciente id={paciente.ID_PACIENTE}/>
                                        <EditarPaciente id={paciente.ID_PACIENTE}/>
                                        <BorrarPaciente id={paciente.ID_PACIENTE}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden w-100 text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Nombre
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Numero
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Correo
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Dirección
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {pacientes?.map((paciente:any) => (
                            <tr
                                key={paciente.ID_PACIENTE}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">

                                        <p>{paciente.NOMBRE_COMPLETO}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {paciente.NUMERO_PACIENTE}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {paciente.CORREO_PACIENTE}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {paciente.DIRECCION}
                                </td>

                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <DetailsPaciente id={paciente.ID_PACIENTE}/>
                                        <EditarPaciente id={paciente.ID_PACIENTE}/>
                                        <BorrarPaciente id={paciente.ID_PACIENTE}/>
                                    </div>
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
