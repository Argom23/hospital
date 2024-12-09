import Link from "next/link";
import {PlusIcon, TrashIcon} from "@heroicons/react/24/outline";
import {DeleteCirugia, DeleteCita} from "@/app/lib/actions";

//TODO HACER EL PUTO BORRAR JAJAJAJA
export function CrearCirugia(){
    return (
        <Link
            href="/dashboard/cirugia/create"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            <span className="hidden md:block">Añadir Cirugia</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}
export function DetailsCirugia({id}:{id:number}){
    return <Link href={`/dashboard/cirugia/${id}/details`} className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}

export function BorrarCirugia({id}:{id:number}) {
    const deleteCirugia = DeleteCirugia.bind(null, id);
    return (
        <form action={deleteCirugia}>
            <button className="rounded-md border p-2 hover:bg-gray-100" type={"submit"}>
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5"/>
            </button>
        </form>
    );
}
export function EditarCirugia({id}:{id:number}) {
    return(
    <Link href={`/dashboard/cirugia/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100"> Editar</Link>
    );
}