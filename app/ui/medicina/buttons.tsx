import Link from "next/link";
import {PlusIcon, TrashIcon} from "@heroicons/react/24/outline";
import {DeleteMedicina} from "@/app/lib/actions";

export function CrearMedicina(){
    return (
        <Link
            href="/dashboard/medicina/create"
            className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            <span className="hidden md:block">Añadir Medicina</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function DetailsMedicina({id}:{id:number}){
    return <Link href={`/dashboard/medicina/${id}/details`} className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}

export function EditMedicina({id}:{id:number}){
    return <Link href={`/dashboard/medicina/${id}/edit`} className={"rounded-md border p-2 hover:bg-gray-100"}>Edit</Link>
}

export function BorrarMedicina({id}:{id:number}){
    const deleteMedicina = DeleteMedicina.bind(null, id);
    return (
        <form action={deleteMedicina}>
            <button className="rounded-md border p-2 hover:bg-gray-100" type={"submit"}>
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5"/>
            </button>
        </form>
    );
}