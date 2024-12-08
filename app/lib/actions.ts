"use server"
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import oracledb from "oracledb";

let id:number;
export async function setId(newId:number){
    id = newId;
}

// TODOS LOS EDIT

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

export async function editCita(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        await connection.execute(`
        BEGIN
            UPDATE_FIDE_CITA(
                ${formData.get('id_paciente')}, 
                ${formData.get('id_doctor')}, 
                TO_DATE('${formData.get('fecha_cita')}', 'YYYY-MM-DD'), 
                '${formData.get('hora_cita')}'
            );
        END;`);

        console.log("Cita actualizada correctamente");
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

    revalidatePath('/dashboard/citas');
    redirect('/dashboard/citas');
}

export async function editCirugia(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        await connection.execute(`
        BEGIN
            UPDATE_FIDE_CIRUGIA(
                ${formData.get('id_cirugia')}, 
                ${formData.get('id_paciente')}, 
                ${formData.get('id_doctor')}, 
                TO_DATE('${formData.get('fecha_cirugia')}', 'YYYY-MM-DD'), 
                '${formData.get('descripcion')}'
            );
        END;`);

        console.log("Cirugía actualizada correctamente");
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

    revalidatePath('/dashboard/cirugias');
    redirect('/dashboard/cirugias');
}

export async function editPaciente(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        await connection.execute(`
        BEGIN
            UPDATE_FIDE_PACIENTE(
                ${formData.get('id_paciente')}, 
                '${formData.get('nombre_paciente')}', 
                '${formData.get('apellido_paciente')}', 
                '${formData.get('direccion_paciente')}', 
                '${formData.get('correo_paciente')}', 
                '${formData.get('telefono_paciente')}'
            );
        END;`);

        console.log("Paciente actualizado correctamente");
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

    revalidatePath('/dashboard/pacientes');
    redirect('/dashboard/pacientes');
}

export async function editPersonal(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        await connection.execute(`
        BEGIN
            UPDATE_FIDE_PERSONAL(
                ${formData.get('id_personal')}, 
                '${formData.get('nombre_personal')}', 
                '${formData.get('primer_apellido')}', 
                '${formData.get('segundo_apellido')}', 
                '${formData.get('direccion_personal')}', 
                '${formData.get('correo_personal')}', 
                '${formData.get('telefono_personal')}'
            );
        END;`);

        console.log("Personal actualizado correctamente");
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

    revalidatePath('/dashboard/personal');
    redirect('/dashboard/personal');
}

export async function editReceta(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        await connection.execute(`
        BEGIN
            UPDATE_FIDE_RECETA(
                ${formData.get('id_receta')}, 
                ${formData.get('id_paciente')}, 
                '${formData.get('nombre_medicina')}', 
                TO_DATE('${formData.get('fecha_receta')}', 'YYYY-MM-DD')
            );
        END;`);

        console.log("Receta actualizada correctamente");
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

    revalidatePath('/dashboard/recetas');
    redirect('/dashboard/recetas');
}

export async function editTratamiento(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        await connection.execute(`
        BEGIN
            UPDATE_FIDE_TRATAMIENTO(
                ${formData.get('id_tratamiento')}, 
                ${formData.get('id_paciente')}, 
                '${formData.get('descripcion_tratamiento')}', 
                TO_DATE('${formData.get('fecha_tratamiento')}', 'YYYY-MM-DD')
            );
        END;`);

        console.log("Tratamiento actualizado correctamente");
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

    revalidatePath('/dashboard/tratamientos');
    redirect('/dashboard/tratamientos');
}

// TODOS LOS DELETE

export async function DeleteDoctor(DelteId:number){
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

export async function DeleteCirugia(DeleteId: number) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        await connection.execute(`
        BEGIN
            DELETE_FIDE_CIRUGIA(${DeleteId});
        END;`);

        console.log("Cirugía eliminada correctamente");
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

    revalidatePath('/dashboard/cirugias');
    redirect('/dashboard/cirugias');
}

export async function DeletePaciente(DeleteId: number) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        await connection.execute(`
        BEGIN
            DELETE_FIDE_PACIENTE(${DeleteId});
        END;`);

        console.log("Paciente eliminado correctamente");
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

    revalidatePath('/dashboard/pacientes');
    redirect('/dashboard/pacientes');
}

export async function DeletePersonal(DeleteId: number) {
    let connection;
    try {
        // Establish the database connection
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Database user
            password: "Password123", // Database password
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))", // Oracle DB connection string
        });

        // Execute the stored procedure to borrar the personal record
        await connection.execute(`
            BEGIN
                DELETE_FIDE_PERSONAL(${DeleteId});
            END;`,
            [], // Empty array for bind variables if needed
            { autoCommit: true } // Ensure changes are committed
        );
        console.log(`Personal with ID ${DeleteId} successfully deleted`);

    } catch (err) {
        console.error("Error during deletion: ", err);
    } finally {
        if (connection) {
            try {
                await connection.close(); // Ensure the connection is properly closed
                console.log("Connection closed");
            } catch (err) {
                console.error("Error closing connection: ", err);
            }
        }
    }

    // Revalidate the path to refresh the page
    revalidatePath('/dashboard/personal');

    // Redirect to the personal dashboard
    redirect('/dashboard/personal');
}

export async function DeleteReceta(DeleteId: number) {
    let connection;
    try {
        // Establish the database connection
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Database user
            password: "Password123", // Database password
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))", // Oracle DB connection string
        });

        // Execute the stored procedure to borrar the receta
        await connection.execute(`
            BEGIN
                DELETE_FIDE_RECETA(${DeleteId});
            END;`,
            [], // Empty array for bind variables if needed
            { autoCommit: true } // Ensure changes are committed
        );
        console.log(`Receta with ID ${DeleteId} successfully deleted`);

    } catch (err) {
        console.error("Error during deletion: ", err);
    } finally {
        if (connection) {
            try {
                await connection.close(); // Ensure the connection is properly closed
                console.log("Connection closed");
            } catch (err) {
                console.error("Error closing connection: ", err);
            }
        }
    }

    // Revalidate the path to refresh the page
    revalidatePath('/dashboard/receta');

    // Redirect to the receta dashboard
    redirect('/dashboard/receta');
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

export async function DeleteCita(DelteId:number){
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
    revalidatePath('/dashboard/borrar')
    redirect('/dashboard/cita')
}

// TODOS LOS CREATE

export async function addDoctor(formData:FormData){
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log(id);

        const query = `INSERT INTO FIDE_Doctor_TB (ID_Doctor, ID_Especializacion, Nombre_Doctor, ID_Departamento, ID_Hospital) 
                     VALUES (:id, :espec, :name, :department, :hospital)`;

        // Ejecuta la consulta con los parámetros de enlace
        await connection.execute(query, {
            id: id,  // El ID_Doctor que obtuviste previamente
            espec: formData.get('especialization'),
            name: formData.get('name'),
            department: formData.get('department'),
            hospital: formData.get('hospital')
        });
        connection.commit();
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