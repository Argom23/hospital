import {fetchHospitalesById} from "@/app/lib/data";
import Link from "next/link";

export default async function Page(props : {params: Promise<{id : number}>}){

    const params = await props.params;
    const id = params.id;
    const data = await fetchHospitalesById(id);



    return(
        <main>
            <h1 className={'text-4xl  font-bold mb-4'}>Hospital {data[0].NOMBRE_HOSPITAL}</h1>
            <div className=" p-3 bg-gray-100 rounded-xl text-2xl">
                <div className="mb-1 text-xl">
                    <label className={'mt-1'}>Dirección: {data[0].DIRECCION}</label>
                </div>
                <div className="mb-1 text-xl">
                    <label className={'mt-1'}>Telefono: {data[0].TELEFONO}</label>
                </div>
            </div>
            <div className=" mt-4 flex  gap-4 ">
                <Link href="/dashboard/hospitales"
                      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-base font-medium text-white transition-colors hover:bg-blue-400 duration-300">
                    Volver
                </Link>
            </div>
        </main>
    );
}