import Link from "next/link";
import {PlusIcon} from "@heroicons/react/24/outline";

//TODO HACER EL PUTO BORRAR JAJAJAJA
export function CrearReceta(){
    return (
        <Link
            href="/dashboard/receta/create"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            <span className="hidden md:block">Añadir Personal</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}
export function DetailsReceta({id}:{id:number}){
    return <Link href={`/dashboard/receta/${id}/details`} className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}

export function BorrarReceta({id}:{id:number}) {
    return(
    <Link href={`/dashboard/receta/${id}/borrar`} className={"rounded-md border p-2 hover:bg-gray-100"}>Borrar</Link>
    );
}
export function EditarReceta({id}:{id:number}) {
    return(
    <Link href={`/dashboard/receta/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100"> Editar</Link>
    );
}