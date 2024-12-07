"use server"

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import oracledb from "oracledb";

let id:number;

export async function setId(newId:number){
    id = newId;
}

export async function editDoctor(formData:FormData){
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log("Successfully connected to Oracle Database");

        // Select data
        const result = await connection.execute(
            `EXEC UPDATE_FIDE_DOCTORUPDATE_FIDE_DOCTOR(${id}, ${formData.get("especialization")},  ${formData.get("name")}, ${formData.get("department")}, ${formData.get("hospital")} )`, // Consulta
            [],                        // Parámetros opcionales (vacío en este caso)
            {outFormat: oracledb.OUT_FORMAT_OBJECT} // Resultado como objetos clave-valor
        );
        return result.rows;
    } catch (err) {
        console.error("Error: ", err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log("Connection closed");
            } catch (err) {
                console.error("Error closing connection: ", err);
            }
        }
    }
    revalidatePath('/dashboard/doctores')
    redirect('/dashboard/doctores')
}

