import {AddTratamientoForm} from "@/app/ui/tratamiento/AddForm";
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";


export default function Page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div>
                <Breadcrumbs breadcrumbs={[{label:"Tratamiento",href:'/dashboard/tratamiento'},{label: "Agregar Tratamiento", href:"/dashboard/tratamiento/create",active:true}]}/>
            </div>
            <AddTratamientoForm />
        </div>
    );
}
