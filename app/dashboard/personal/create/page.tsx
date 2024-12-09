
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import {AddPersonalForm} from "@/app/ui/personal/AddForm";



export default async function page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div>
                <Breadcrumbs breadcrumbs={[{label:"Personal",href:'/dashboard/personal'},{label: "Agregar Personal", href:"/dashboard/personal/create",active:true}]}/>
            </div>
            <AddPersonalForm/>
        </div>
    );
}