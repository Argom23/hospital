import {BorrarCirugia, DetailsCirugia, EditarCirugia} from "@/app/ui/cirugias/buttons";
import {fetchCirugias} from "@/app/lib/data";

export async function CirugiasTable() {
    const cirugias = await fetchCirugias();
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {cirugias?.map((cirugia:any) => (
                            <div
                                key={cirugia.ID_CIRUGIA}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{cirugia.NOMBRE_CIRUGIA}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{cirugia.PACIENTE}</p>
                                        <p className="text-sm text-gray-500">{cirugia.DOCTOR}</p>
                                        <p className={"text-sm text-gray-500"}>{cirugia.FECHA_CIRUGIA}</p>
                                        <p className={"text-sm text-gray-500"}>{cirugia.HORA_CIRUGIA}</p>
                                        <p className={"text-sm text-gray-500"}>{cirugia.COSTO_CIRUGIA}</p>
                                    </div>

                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className="flex justify-end gap-2">
                                        <DetailsCirugia id={cirugia.ID_CIRUGIA}/>
                                        <EditarCirugia id={cirugia.ID_CIRUGIA}/>
                                        <BorrarCirugia id={cirugia.ID_CIRUGIA}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden w-100 text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Nombre de Cirugía
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
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
                            <th scope="col" className="px-3 py-5 font-medium">
                                Costo
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {cirugias?.map((cirugia:any) => (
                            <tr
                                key={cirugia.ID_CIRUGIA}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">

                                        <p>{cirugia.NOMBRE_CIRUGIA}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {cirugia.PACIENTE}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {cirugia.DOCTOR}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {cirugia.FECHA_CIRUGIA}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {cirugia.HORA_CIRUGIA}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {cirugia.COSTO_CIRUGIA}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <DetailsCirugia id={cirugia.ID_CIRUGIA}/>
                                        <EditarCirugia id={cirugia.ID_CIRUGIA}/>
                                        <BorrarCirugia id={cirugia.ID_CIRUGIA}/>
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
