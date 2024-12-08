import Breadcrumbs from "@/app/ui/breadcrumbs";
import {Suspense} from "react";
import { TratamientosTable } from "@/app/ui/tratamiento/table";


export default async function Page() {
    return (
        <>
            <div className="text-2xl font-bold">
                <Breadcrumbs breadcrumbs={[
                    {label: "Tratamientos", href: "/dashboard/tratamientos", active: true},
                ]}/>
            </div>
            <div>
                <Suspense fallback={null}>
                    <TratamientosTable />
                </Suspense>
            </div>
        </>



    );
}