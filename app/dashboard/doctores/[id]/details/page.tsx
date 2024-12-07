import {fetchMedicinaById} from "@/app/lib/data";
import Link from "next/link";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page(props : {params: Promise<{id : number}>}){

    const params = await props.params;
    const id = params.id;
    const data = await fetchMedicinaById(id);
    return(
        <main>
            <div>
                <Breadcrumbs breadcrumbs={[
                {label: "Doctores", href: "/dashboard/doctores"},
                {label: `Doctor ${data[0].NOMBRE_DOCTOR}`, href: `/dashboard/doctores/${id}/details`, active:true},
            ]}/>
            </div>
            <h1 className={'text-4xl  font-bold mb-4'}>{data[0].NOMBRE_DOCTOR}</h1>
            <div className=" p-3 bg-gray-100 rounded-xl text-xl mb-1">
                <div >
                    <label className={'mt-1'}>Especializacion: {data[0].ESPECIALIZACION}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Departamento: {data[0].DEPARTAMENTO}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Hospital: {data[0].HOSPITAL}</label>
                </div>
            </div>
            <div className=" mt-4 flex  gap-4 ">
                <Link href="/dashboard/medicina"
                      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-base font-medium text-white transition-colors hover:bg-blue-400 duration-300">
                    Volver
                </Link>
            </div>
        </main>
    );

}