

import {BorrarReceta, DetailsReceta, EditarReceta} from "@/app/ui/receta/buttons";
import {fetchReceta} from "@/app/lib/data";

export async function RecetaTable() {
    const recetas = await fetchReceta();
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {recetas?.map((receta:any) => (
                            <div
                                key={receta.ID_RECETA}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{receta.PACIENTE}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{receta.MEDICINA}</p>
                                        <p className="text-sm text-gray-500">{receta.FECHA_RECETA}</p>
                                    </div>

                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className="flex justify-end gap-2">
                                        <DetailsReceta id={receta.ID_RECETA}/>
                                        <EditarReceta id={receta.ID_RECETA}/>
                                        <BorrarReceta id={receta.ID_RECETA}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden w-100 text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Paciente
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Medicina
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Fecha
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {recetas?.map((receta:any) => (
                            <tr
                                key={receta.ID_RECETA}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">

                                        <p>{receta.PACIENTE}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {receta.MEDICINA}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {receta.FECHA_RECETA}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <DetailsReceta id={receta.ID_RECETA}/>
                                        <EditarReceta id={receta.ID_RECETA}/>
                                        <BorrarReceta id={receta.ID_RECETA}/>
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
