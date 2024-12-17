import {TablaCitas} from "@/app/ui/citas/table";
import Search from "@/app/ui/search";
import {CrearCita} from "@/app/ui/citas/buttons";

export default function page(){
    return (
        <main>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <CrearCita/>
            </div>
            <div>
                <TablaCitas/>
            </div>
        </main>);
}