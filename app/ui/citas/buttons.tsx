import Link from "next/link";
import {PlusIcon} from "@heroicons/react/24/outline";
import {DeleteCitas} from "@/app/lib/actions";

//TODO HACER EL PUTO BORRAR
export function CrearCita(){
    return (
        <Link
            href="/dashboard/cita/create"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            <span className="hidden md:block">Añadir docctor</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}
export function DetailsCita({id}:{id:number}){
    return <Link href={`/dashboard/cita/${id}/details`} className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}

export async function BorrarCita({id}:{id:number}) {
    const deleteCitas =  DeleteCitas.bind(null, id);
    return(
    <button className={"rounded-md border p-2 hover:bg-gray-100"} onClick={deleteCitas}>Borrar</button>
    );
}
export function EditarCita({id}:{id:number}) {
    return(
    <Link href={`/dashboard/cita/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100"> Editar</Link>
    );
}