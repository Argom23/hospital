import {AddCitaForm} from "@/app/ui/citas/AddForm";
import React from "react";


export default function CreatePage(){
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Agregar Cita</h1>
            <AddCitaForm />
        </div>
    );
}