
import React from "react";
import {AddMedicinaForm} from "@/app/ui/medicina/AddForm";

export default async function page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Agregar Medicina</h1>
            <AddMedicinaForm/>
        </div>
    );
}