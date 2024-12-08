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

        connection.execute(`
        BEGIN
            UPDATE_FIDE_DOCTOR(${id}, ${formData.get('especialization')}, '${formData.get('name')}', ${formData.get('department')}, ${formData.get('hospital')});
        END;`);
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

export async function DeleteTratamiento(DelteId:number){
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });
        connection.execute(`
        BEGIN
            DELETE_FIDE_TRATAMIENTO(${DelteId});
        END;`);
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
    revalidatePath('/dashboard/tratamiento')
    redirect('/dashboard/tratamiento')
}

export async function DeleteCitas(DelteId:number){
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });
        connection.execute(`
        BEGIN
            DELETE_FIDE_CITA(${DelteId});
        END;`);
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
    revalidatePath('/dashboard/cita')
    redirect('/dashboard/cita')
}