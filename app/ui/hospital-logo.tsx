import { lusitana } from "@/app/ui/fonts";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";

export default function HospitalLogo() {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
        >
            <BuildingOffice2Icon className="h-12 w-12 text-white-500" />
            <p className="text-[22px] ml-2">Hospital Eduardo Vargas</p>
        </div>
    );
}
