
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import {AddDoctorForm} from "@/app/ui/doctores/AddForm";

export default async function page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <Breadcrumbs breadcrumbs={[
                {label:"Doctores",href:'/dashboard/docotores'},
                {label: "Agregar Doctor", href:"/dashboard/doctores/create",active:true}
            ]}/>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Agregar Doctor</h1>
            <AddDoctorForm/>
        </div>
    );
}