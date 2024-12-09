import Link from "next/link";
import {PlusIcon, TrashIcon} from "@heroicons/react/24/outline";
import {DeleteCita} from "@/app/lib/actions";

//TODO HACER EL PUTO BORRAR
export function CrearCita(){
    return (
        <Link
            href="/dashboard/cita/create"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            <span className="hidden md:block">Añadir Cita</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}
export function DetailsCita({id}:{id:number}){
    return <Link href={`/dashboard/cita/${id}/details`} className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}

export async function BorrarCita({id}:{id:number}) {
    const deleteCita = DeleteCita.bind(null, id);
    return (
        <form action={deleteCita}>
            <button className="rounded-md border p-2 hover:bg-gray-100" type={"submit"}>
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5"/>
            </button>
        </form>
    );
}
export function EditarCita({id}:{id:number}) {
    return(
    <Link href={`/dashboard/cita/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100"> Editar</Link>
    );
}