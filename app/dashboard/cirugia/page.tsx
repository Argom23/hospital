import CirugiasTable from "@/app/ui/cirugias/table";
import {Suspense} from "react";
import Search from "@/app/ui/search";
import {CrearCirugia} from "@/app/ui/cirugias/buttons";

export default async function Page( ) {
    return (
        <main>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {<Search placeholder="Search invoices..."/>}
                <CrearCirugia/>
            </div>
            <div>
                <Suspense>
                    <CirugiasTable />
                </Suspense>
            </div>
            <div>
                {/*TODO HACERLAPAGINACION*/}
            </div>


        </main>
    );
}