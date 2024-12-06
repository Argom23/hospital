import Link from "next/link";

export default function DetailsMedicina(id:number){
    return <Link href={`/dashboard/medicina/${id}/details`} className={"rounded-md border p-2 hover:bg-gray-100"}>Detalles</Link>
}