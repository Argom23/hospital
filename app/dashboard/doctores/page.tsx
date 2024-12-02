
import DoctoresTable from "@/app/ui/doctores/table";
import {Suspense} from "react";
import Search from "@/app/ui/search";
import {CrearDoctor} from "@/app/ui/doctores/buttons.";


//TODO Doctores Skeleton,
export default async function Page( ) {
    return (
        <main>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..."/>
                <CrearDoctor/>
            </div>
            <div>
                <Suspense>
                    <DoctoresTable />
                </Suspense>
            </div>
            <div>
                {/*TODO HACERLAPAGINACION*/}
            </div>


        </main>
);
}