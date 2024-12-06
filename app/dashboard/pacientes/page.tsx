import PacientesTable from "@/app/ui/pacientes/table";
import {Suspense} from "react";
import Search from "@/app/ui/search";
import {CrearPaciente} from "@/app/ui/pacientes/buttons.";

export default async function Page( ) {
    return (
        <main>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {<Search placeholder="Search invoices..."/>}
                <CrearPaciente/>
            </div>
            <div>
                <Suspense>
                    <PacientesTable />
                </Suspense>
            </div>
            <div>
                {/*TODO HACERLAPAGINACION*/}
            </div>


        </main>
    );
}