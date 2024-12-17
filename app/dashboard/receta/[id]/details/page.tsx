import {fetchMedicina, fetchMedicinaById, fetchPacientesById, fetchRecetasById} from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Link from "next/link";

export default async function Page(props : {params: Promise<{id : number}>}){
    const params = await props.params;
    const id = params.id;
    const data = await fetchRecetasById(id);
    const medicina = await fetchMedicinaById(data[0].ID_MEDICINA);
    const paciente = await fetchPacientesById(data[0].ID_PACIENTE);
    return(
        <main>
            <div>
                <Breadcrumbs breadcrumbs={[
                    {label: "Recetas", href: "/dashboard/receta"},
                    {label: `Receta Número: ${data[0].ID_RECETA}`, href: `/dashboard/receta/${id}/details`, active:true},
                ]}/>
            </div>
            <div className=" p-3 bg-gray-100 rounded-xl text-xl mb-1">
                <div>
                    <label className={'mt-1'}>Paciente: {paciente[0].PACIENTE}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Medicamento: {medicina[0].MEDICINA}</label>
                </div>
                <div>
                    <label className={'mt-1'}>Fecha: {data[0].FECHA_RECETA}</label>
                </div>
            </div>
            <div className=" mt-4 flex  gap-4 ">
                <Link href="/dashboard/receta"
                      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-base font-medium text-white transition-colors hover:bg-blue-400 duration-300">
                    Volver
                </Link>
            </div>
        </main>
    );
}