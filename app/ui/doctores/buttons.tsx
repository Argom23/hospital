import Link from "next/link";
import {PlusIcon, TrashIcon} from "@heroicons/react/24/outline";
import {DeleteDoctor} from "@/app/lib/actions";

//TODO HACER EL PUTO BORRAR
export function CrearDoctor() {
    return (
        <Link
            href="/dashboard/doctores/create"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            <span className="hidden md:block">Añadir doctor</span>{' '}
            <PlusIcon className="h-5 md:ml-4"/>
        </Link>
    );
}

export function DetailsDoctor({id}: { id: number }) {
    return <Link href={`/dashboard/doctores/${id}/details`}
                 className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}

export function BorrarDoctor({id}: { id: number }) {
    const deleteDoctor = DeleteDoctor.bind(null, id);
    return (
        <form action={deleteDoctor}>
            <button className="rounded-md border p-2 hover:bg-gray-100" type={"submit"}>
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5"/>
            </button>
        </form>
    );
}

export function EditarDoctor({id}: { id: number }) {
    return (
        <Link href={`/dashboard/doctores/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100"> Editar</Link>
    );
}