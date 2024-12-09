
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import {AddCirugiaForm} from "@/app/ui/cirugias/AddForm";

export default async function page() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div>
                <Breadcrumbs breadcrumbs={[{label:"Cirugia",href:'/dashboard/cirugia'},{label: "Agendar Cirugia", href:"/dashboard/cirugia/create",active:true}]}/>
            </div>
            <AddCirugiaForm/>
        </div>
    );
}