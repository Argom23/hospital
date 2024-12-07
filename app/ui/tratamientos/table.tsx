import { fetchTratamiento} from "@/app/lib/data";
import {DetailsTratamiento, BorrarTratamiento} from "@/app/ui/tratamientos/buttons";


export async function TratamientosTable() {
    const data = [{ID_PERSONAL : "1", NOMBRE_COMPLETO : "JAVIER"}]
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {data?.map((Tratamientos:any) => (
                            <div
                                key={Tratamientos.ID_PERSONAL}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{Tratamientos.NOMBRE_COMPLETO}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{Tratamientos.NUMERO_PERSONAL}</p>
                                        <p className="text-sm text-gray-500">{Tratamientos.DIRECCION}</p>
                                        <p className={"text-sm text-gray-500"}>{Tratamientos.CORREO_PERSONAL}</p>
                                        <p className={"text-sm text-gray-500"}>{Tratamientos.DEPARTAMENTO}</p>
                                    </div>

                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className="flex justify-end gap-2">
                                        <DetailsTratamiento id={Tratamientos.ID_PERSONAL}/>
                                        <BorrarTratamiento id={Tratamientos.ID_PERSONAL}/>
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
                        {data?.map((paciente:any) => (
                            <tr
                                key={paciente.ID_PERSONAL}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">

                                        <p>{paciente.NOMBRE_COMPLETO}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {paciente.NUMERO_PERSONAL}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {paciente.DIRECCION}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {paciente.CORREO_PERSONAL}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {paciente.DEPARTAMENTO}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <DetailsTratamiento id={paciente.ID_PERSONAL}/>
                                        <BorrarTratamiento id={paciente.ID_PERSONAL}/>
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
