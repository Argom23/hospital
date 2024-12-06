import {fetchMedicinaById} from "@/app/lib/data";
import Link from "next/link";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function DetailsPage(props : {params: Promise<{id : number}>}){

    const params = await props.params;
    const id = params.id;
    //const data = await fetchMedicinaById(id);

    return(
        <main>
            <div className={'text-4xl'}><Breadcrumbs breadcrumbs={[
                {label: 'Medicinas', href: '/dashboard/medicina'},
                {label: 'KaisoCida', href: '/dashboard/medicina/id/details, active : true'},
            ]}/></div>
            <h1 className={'text-4xl  font-bold mb-4'}>Detalles KaisoCida</h1>
            <div className=" p-3 bg-gray-100 rounded-xl text-2xl">
                <div    >
                    <label >Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam non sem et quam mollis pellentesque.</label>
                </div>
                <div>
                    <label className={'mt-1'}>Cantidad: 21</label>
                </div>
            </div>
            <div className=" mt-4 flex  gap-4 justify-end">
                <Link href="/dashboard/medicina"
                      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-xl font-medium text-white transition-colors hover:bg-blue-400 duration-300">
                    Volver
                </Link>

            </div>
        </main>
    );

}