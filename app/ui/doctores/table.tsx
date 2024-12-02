

import {BorrarDoctor, DetailsDoctor, EditarDoctor} from "@/app/ui/doctores/buttons.";
import {fetchDoctoresInfo} from "@/app/lib/data";

export default async function DoctoresTable() {
    const doctores = await fetchDoctoresInfo();
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {doctores?.map((doctores) => (
                            <div
                                key={doctores.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{doctores.nombre}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{doctores.idEspecializacion}</p>
                                        <p className="text-sm text-gray-500">{doctores.idDepartamento}</p>
                                        <p className={"text-sm text-gray-500"}>{doctores.idHospital}</p>
                                    </div>

                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className="flex justify-end gap-2">
                                        <DetailsDoctor id={doctores.id}/>
                                        <EditarDoctor id={doctores.id}/>
                                        <BorrarDoctor id={doctores.id}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Nombre
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Especialidad
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Departamento
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Hospital
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {doctores?.map((doctores) => (
                            <tr
                                key={doctores.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">

                                        <p>{doctores.nombre}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {doctores.idEspecializacion}.
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {doctores.idDepartamento}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {doctores.idHospital}
                                </td>

                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <DetailsDoctor id={doctores.id}/>
                                        <EditarDoctor id={doctores.id}/>
                                        <BorrarDoctor id={doctores.id}/>
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
