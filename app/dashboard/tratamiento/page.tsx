import Breadcrumbs from "@/app/ui/breadcrumbs";
import {Suspense} from "react";
import { TratamientosTable } from "@/app/ui/tratamiento/table";
import {CrearTratamiento} from "@/app/ui/tratamiento/buttons"


export default async function Page() {
    return (
        <main>
            <div className="text-2xl font-bold">
                <Breadcrumbs breadcrumbs={[
                    {label: "Tratamientos", href: "/dashboard/tratamientos", active: true},
                ]}/>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <CrearTratamiento/>
            </div>
            <div>
                <Suspense fallback={null}>
                    <TratamientosTable/>
                </Suspense>
            </div>
        </main>


    );
}