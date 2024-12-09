
import {Suspense} from "react";
import {RecetaTable} from "@/app/ui/receta/table";
import {CrearReceta} from "@/app/ui/receta/buttons";

export default async function Page( ) {
    return (
        <main>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <CrearReceta/>
            </div>
            <div>
                <Suspense>
                    <RecetaTable />
                </Suspense>
            </div>
            <div>
                {/*TODO HACERLAPAGINACION*/}
            </div>


        </main>
    );
}