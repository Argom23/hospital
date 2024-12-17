
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import {AddPacienteForm} from "@/app/ui/pacientes/AddForm";



export default async function page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div>
                <Breadcrumbs breadcrumbs={[
                    {label:"Pacientes",href:'/dashboard/pacientes'},
                    {label: "Agregar Paciente", href:"/dashboard/pacientes/create",active:true}
                ]}/>
            </div>
            <AddPacienteForm/>
        </div>
    );
}