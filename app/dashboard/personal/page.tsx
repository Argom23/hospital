import PersonalTable from "@/app/ui/personal/table";
import {Suspense} from "react";
import Search from "@/app/ui/search";
import {CrearPersonal} from "@/app/ui/personal/buttons.";

export default async function Page( ) {
    return (
        <main>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {<Search placeholder="Search invoices..."/>}
                <CrearPersonal/>
            </div>
            <div>
                <Suspense>
                    <PersonalTable />
                </Suspense>
            </div>
            <div>
                {/*TODO HACERLAPAGINACION*/}
            </div>


        </main>
    );
}