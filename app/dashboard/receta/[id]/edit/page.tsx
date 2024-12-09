import {EditForm }from "@/app/ui/receta/EditForm";
import React from "react";


export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const id = params.id;
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Editar Receta</h1>
            <EditForm id={id} />
        </div>
    );
}