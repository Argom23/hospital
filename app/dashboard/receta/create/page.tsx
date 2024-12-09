import {AddRecetaForm} from "@/app/ui/receta/AddForm";
import React from "react";


export default function Page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Agregar Receta</h1>
            <AddRecetaForm />
        </div>
    );
}
