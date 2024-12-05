import {fetchMedicinaById} from "@/app/lib/data";
import Link from "next/link";

export default async function DetailsPage(props : {params: Promise<{id : number}>}){

    const params = await props.params;
    const id = params.id;
    const data = await fetchMedicinaById(id);

    return(
        <main>
            <div className="mb-4 p-4 bg-gray-100 rounded-xl">
                <h1 className={'text-xl'}>Detalles ${data.NOMBRE_MEDICINA}</h1>
                <div>
                    <label className={'mt-1'}>Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non sem et quam mollis pellentesque.</label>
                </div>
                <div>
                    <label className={'mt-1'}>Cantidad: ${data.CANTIDAD}</label>
                </div>
            </div>
            <div className="mt-4 flex  gap-4 justify-end">
                <Link href="/dashboard/medicina" className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 duration-300">
                    Volver
                </Link>

            </div>
        </main>
    );

}