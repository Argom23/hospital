import {fetchMedicinaById, fetchTratamientosById} from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Link from "next/link";

export default async function Page(props : {params: Promise<{id : number}>}){
    const params = await props.params;
    const id = params.id;
    const data = await fetchTratamientosById(id);
    const medicina = await fetchMedicinaById(data[0].ID_MEDICINA);
    return(
        <main>
            <div>
                <Breadcrumbs breadcrumbs={[
                    {label: "Tratamiento", href: "/dashboard/tratamiento"},
                    {label: `${data[0].NOMBRE_TRATAMIENTO}`, href: `/dashboard/tratamiento/${id}/details`, active:true},
                ]}/>
            </div>
            <h1 className={'text-4xl  font-bold mb-4'}>{data[0].NOMBRE_TRATAMIENTO}</h1>
            <div className=" p-3 bg-gray-100 rounded-xl text-xl mb-1">
                <div >
                    <label className={'mt-1'}>Medicina: {medicina[0].NOMBRE_MEDICINA}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Precio: {data[0].PRECIO}</label>
                </div>
            </div>
            <div className=" mt-4 flex  gap-4 ">
                <Link href="/dashboard/tratamiento"
                      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-base font-medium text-white transition-colors hover:bg-blue-400 duration-300">
                    Volver
                </Link>
            </div>
        </main>
    );
}