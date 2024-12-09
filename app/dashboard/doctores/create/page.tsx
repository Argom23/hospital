
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import {AddDoctorForm} from "@/app/ui/doctores/AddForm";

export default async function page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <Breadcrumbs breadcrumbs={[{label:"Cirugia",href:'/dashboard/cirugia'},{label: "Agendar Cirugia", href:"/dashboard/cirugia/create",active:true}]}/>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Agregar Cirugia</h1>
            <AddDoctorForm/>
        </div>
    );
}