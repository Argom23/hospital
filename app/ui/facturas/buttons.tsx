import Link from "next/link";
import {PlusIcon} from "@heroicons/react/24/outline";

//TODO HACER EL PUTO BORRAR JAJAJAJA
export function CrearFacturas(){
    return (
        <Link
            href="/dashboard/facturas/create"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            <span className="hidden md:block">Añadir Pedido</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function DetailsFacturas({id}:{id:number}){
    return <Link href={`/dashboard/facturas/${id}/details`} className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}
