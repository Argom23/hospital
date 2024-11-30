import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
    CustomersTableType,
    FormattedDoctoresTable,
} from '@/app/lib/definitions';

export default async function DoctoresTable( {doctores }: { doctores: FormattedDoctoresTable[];}) {
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Doctores
            </h1>
            <Search placeholder="Buscar Doctores" />
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                            <div className="md:hidden">
                                {doctores?.map((doctores) => (
                                    <div
                                        key={doctores.id}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <div className="flex items-center gap-3">
                                                        <p>{doctores.nombre}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {doctores.idEspecializacion}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between border-b py-5">
                                            <div className="flex w-1/2 flex-col">
                                                <p className="text-xs">Departamento</p>
                                                <p className="font-medium">{doctores.idDepartamento}</p>
                                            </div>
                                            <div className="flex w-1/2 flex-col">
                                                <p className="text-xs">Hospital</p>
                                                <p className="font-medium">{doctores.idHospital}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <table className="hidden min-w-full rounded-md text-gray-900 md:table">

                                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Especializacion
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Departamento
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Hospital
                                    </th>
                                </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 text-gray-900">
                                {doctores.map((doctores) => (
                                    <tr key={doctores.id} className="group">
                                        <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                            <div className="flex items-center gap-3">
                                                <p>{doctores.nombre}</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                            {doctores.idEspecializacion}
                                        </td>
                                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                            {doctores.idDepartamento}
                                        </td>
                                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                            {doctores.idHospital}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
