import Link from "next/link";

export function DetailsHospital({id}:{id:number}){
    return <Link href={`/dashboard/hospitales/${id}/details`} className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}
