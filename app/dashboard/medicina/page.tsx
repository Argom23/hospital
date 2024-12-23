import Breadcrumbs from "@/app/ui/breadcrumbs";
import {lusitana} from "@/app/ui/fonts";
import MedicinaTable from "@/app/ui/medicina/table";
import {CrearMedicina} from "@/app/ui/medicina/buttons";


export default function Page(){
    return (
        <main>
            <div>
                <Breadcrumbs breadcrumbs={
                    [
                        {label: "Dashboard", href: '/dashboard/'},
                        {label: "Medicina", href: '/dashboard/medicina', active: true}
                    ]
                }></Breadcrumbs>
            </div>

            <div>
                <label className={`${lusitana.className}text-white font-medium text-2xl`}> Inventario de
                    farmaceuticos</label>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <CrearMedicina/>
            </div>
            <div>
                <MedicinaTable/>
            </div>
        </main>

    );
}