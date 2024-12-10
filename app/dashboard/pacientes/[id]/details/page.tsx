
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Link from "next/link";
import {fetchPacientesById, fetchPersonalById} from "@/app/lib/data";

export default async function Page(props : {params: Promise<{id : number}>}){
    const params = await props.params;
    const id = params.id;
    const data = await fetchPacientesById(id);
    return(
        <main>
            <div>
                <Breadcrumbs breadcrumbs={[
                    {label: "Pacientes", href: "/dashboard/pacientes"},
                    {label: ` ${data[0].NOMBRE_COMPLETO}`, href: `/dashboard/pacientes/${id}/details`, active:true},
                ]}/>
            </div>
            <div className=" p-3 bg-gray-100 rounded-xl text-xl mb-1">

                <div>
                    <label className={'mt-1'}>Numero: {data[0].NUMERO_PACIENTE}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Correo: {data[0].CORREO_PACIENTE}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Direccion: {data[0].DIRECCION}</label>
                </div>

            </div>
            <div className=" mt-4 flex  gap-4 ">
                <Link href="/dashboard/personal"
                      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-base font-medium text-white transition-colors hover:bg-blue-400 duration-300">
                    Volver
                </Link>
            </div>
        </main>
    );
}