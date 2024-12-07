import TratamientoTable from "@/app/ui/tratamiento/table";
import {Suspense} from "react";
import Search from "@/app/ui/search";
import {CrearTratamiento} from "@/app/ui/tratamiento/buttons.";

export default async function Page( ) {
    return (
        <main>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {<Search placeholder="Search invoices..."/>}
                <CrearTratamiento/>
            </div>
            <div>
                <Suspense>
                    <TratamientoTable />
                </Suspense>
            </div>
            <div>
                {/*TODO HACERLAPAGINACION*/}
            </div>


        </main>
    );
}