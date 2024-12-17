import {FacturasTable} from "@/app/ui/facturas/table";
import {Suspense} from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import {lusitana} from "@/app/ui/fonts";

export default async function Page( ) {
    return (
        <main>
            <div>
                <Breadcrumbs breadcrumbs={
                    [
                        {label: "Dashboard", href: '/dashboard/'},
                        {label: "Facturas", href: '/dashboard/facturas', active: true}
                    ]
                }></Breadcrumbs>
            </div>

            <div>
                <label className={`${lusitana.className}text-white font-medium text-2xl`}>Facturas</label>
            </div>
            <div>
                <Suspense>
                    <FacturasTable/>
                </Suspense>
            </div>
            <div>
                {/*TODO HACERLAPAGINACION*/}
            </div>


        </main>
    );
}