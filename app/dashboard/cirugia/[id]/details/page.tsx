import {fetchCirugiasById} from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Link from "next/link";

export default async function Page(props : {params: Promise<{id : number}>}){
    const params = await props.params;
    const id = params.id;
    const data = await fetchCirugiasById(id);
    return (
        <main>
            <div>
                <Breadcrumbs breadcrumbs={[
                    {label: "Cirugías", href: "/dashboard/cirugia"},
                    {label: `${data[0].NOMBRE_CIRUGIA}`, href: `/dashboard/cirugia/${id}/details`, active: true},
                ]}/>
            </div>
            <h1 className={'text-4xl  font-bold mb-4'}>{data[0].NOMBRE_CIRUGIA}</h1>
            <div className=" p-3 bg-gray-100 rounded-xl text-xl mb-1">
                <div>
                    <label className={'mt-1'}>Paciente: {data[0].PACIENTE}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Doctor: {data[0].DOCTOR}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Fecha de la Cirugía: {data[0].FECHA_CIRUGIA}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Hora de la Cirugía: {data[0].HORA_CIRUGIA}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Costo de la Cirugía: {data[0].COSTO_CIRUGIA}</label>
                </div>
            </div>
            <div className=" mt-4 flex  gap-4 ">
                <Link href="/dashboard/cirugia"
                      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-base font-medium text-white transition-colors hover:bg-blue-400 duration-300">
                    Volver
                </Link>
            </div>
        </main>
    );
}