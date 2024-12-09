
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import {AddPacienteForm} from "@/app/ui/pacientes/AddForm";


export default async function page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div>
                <Breadcrumbs breadcrumbs={[{label:"Paciente",href:'/dashboard/paciente'},{label: "Agregar Paciente", href:"/dashboard/paciente/create",active:true}]}/>
            </div>
            <AddPacienteForm/>
        </div>
    );
}