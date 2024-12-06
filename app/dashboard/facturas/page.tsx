import FacturasTable from "@/app/ui/facturas/table";
import {Suspense} from "react";
import Search from "@/app/ui/search";

export default async function Page( ) {
    return (
        <main>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {<Search placeholder="Search invoices..."/>}
            </div>
            <div>
                <Suspense>
                    <FacturasTable />
                </Suspense>
            </div>
            <div>
                {/*TODO HACERLAPAGINACION*/}
            </div>


        </main>
    );
}