

import {DetailsFacturas} from "@/app/ui/facturas/buttons";
import {fetchFacturas} from "@/app/lib/data";

export async function FacturasTable() {
    const facturas = await fetchFacturas();
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {facturas?.map((factura:any) => (
                            <div
                                key={factura.ID_FACTURA}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{factura.TRATAMIENTO}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{factura.PACIENTE}</p>
                                        <p className="text-sm text-gray-500">{factura.DOCTOR}</p>
                                        <p className={"text-sm text-gray-500"}>{factura.FECHA_FACTURA}</p>
                                        <p className={"text-sm text-gray-500"}>{factura.COSTO}</p>
                                    </div>

                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className="flex justify-end gap-2">
                                        <DetailsFacturas id={factura.ID_FACTURA}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden w-100 text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Tratamiento
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
                                Costo
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {facturas?.map((factura:any) => (
                            <tr
                                key={factura.ID_FACTURA}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">

                                        <p>{factura.TRATAMIENTO}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {factura.PACIENTE}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {factura.DOCTOR}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {factura.FECHA_FACTURA}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {factura.COSTO}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <DetailsFacturas id={factura.ID_FACTURA}/>
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
