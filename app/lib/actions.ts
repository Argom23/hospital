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

        // @ts-ignore
        const dateToString = formData.get('fecha_cita').toString()

        await connection.execute(`
        BEGIN 
            UPDATE_FIDE_CITA(${id}, '${formData.get('id_paciente')}', ${formData.get('id_doctor')}, TO_DATE('${dateToString}', 'YYYY-MM-DD'), '${formData.get('hora_cita')}');
        END;
        `);

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
            UPDATE_FIDE_TRATAMIENTO(${id}, ${formData.get('medicina')}, '${formData.get('name')}', ${formData.get('price')});
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

    revalidatePath('/dashboard/tratamiento');
    redirect('/dashboard/tratamiento');
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

export async function addCita(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });
        // @ts-ignore
        const dateString = formData.get('fecha_cita').toString();
        console.log(dateString);

        const query = `INSERT INTO FIDE_Cita_TB (ID_CITA, ID_Paciente, ID_Doctor, Fecha_Cita, Hora_Cita) 
                     VALUES (:id_cita, :paciente, :doctor, TO_DATE(:fecha_cita, 'YYYY-MM-DD'), :hora_cita)`;

        // Ejecuta la consulta con los parámetros de enlace

        await connection.execute(query, {
            id_cita: id,
            paciente: formData.get('paciente'),
            doctor: formData.get('doctor'),
            fecha_cita: dateString,
            hora_cita: formData.get('hora_cita')
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
    revalidatePath('/dashboard/cita');
    redirect('/dashboard/cita');
}

export async function addCirugia(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log(id);

        const query = `INSERT INTO FIDE_Cirugia_TB (ID_Cirugia, ID_Paciente, ID_Doctor, Fecha_Cirugia, Tipo_Cirugia)
                       VALUES (:id, :patientId, :doctorId, TO_DATE(:date, 'YYYY-MM-DD'), :type)`;

        // Ejecuta la consulta con los parámetros de enlace
        await connection.execute(query, {
            id: formData.get('id'),
            patientId: formData.get('patientId'),
            doctorId: formData.get('doctorId'),
            date: formData.get('date'),
            type: formData.get('type')
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
    revalidatePath('/dashboard/cirugias');
    redirect('/dashboard/cirugias');
}

export async function addPaciente(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log(id);

        const query = `INSERT INTO FIDE_Paciente_TB (ID_Paciente, Nombre_Paciente, PriApellido_Paciente, SegApellido_Paciente, Numero_Paciente, Direccion_Paciente, Correo_Paciente) 
                     VALUES (:id, :name, :firstLastName, :secondLastName, :phone, :address, :email)`;

        // Ejecuta la consulta con los parámetros de enlace
        await connection.execute(query, {
            id: formData.get('id'),
            name: formData.get('name'),
            firstLastName: formData.get('firstLastName'),
            secondLastName: formData.get('secondLastName'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            email: formData.get('email')
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
    revalidatePath('/dashboard/pacientes');
    redirect('/dashboard/pacientes');
}

export async function addPersonal(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log(id);

        const query = `INSERT INTO FIDE_Personal_TB (ID_Personal, Nombre_Personal, PriApellido_Personal, SegApellido_Personal, Numero_Personal, Direccion_Personal, Correo_Personal, ID_Departamento) 
                     VALUES (:id, :name, :firstLastName, :secondLastName, :phone, :address, :email, :departmentId)`;

        // Ejecuta la consulta con los parámetros de enlace
        await connection.execute(query, {
            id: formData.get('id'),
            name: formData.get('name'),
            firstLastName: formData.get('firstLastName'),
            secondLastName: formData.get('secondLastName'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            email: formData.get('email'),
            departmentId: formData.get('departmentId')
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
    revalidatePath('/dashboard/personal');
    redirect('/dashboard/personal');
}

export async function addReceta(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log(id);

        const query = `INSERT INTO FIDE_Receta_TB (ID_Receta, ID_Paciente, Nombre_Medicina, Fecha_Receta) 
                     VALUES (:id, :patientId, :medicineName, TO_DATE(:date, 'YYYY-MM-DD'))`;

        // Ejecuta la consulta con los parámetros de enlace
        await connection.execute(query, {
            id: formData.get('id'),
            patientId: formData.get('patientId'),
            medicineName: formData.get('medicineName'),
            date: formData.get('date')
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
    revalidatePath('/dashboard/recetas');
    redirect('/dashboard/recetas');
}

export async function addTratamiento(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log(id);

        const query = `INSERT INTO FIDE_Tratamiento_TB (ID_Tratamiento, ID_Medicina, Nombre_Tratamiento, Precio)
                       VALUES (:id, :medicina, :name, :price)`;

        // Ejecuta la consulta con los parámetros de enlace
        await connection.execute(query, {
            id: id,
            medicina: formData.get('medicina'),
            name: formData.get('name'),
            price: formData.get('price')
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
    revalidatePath('/dashboard/tratamiento');
    redirect('/dashboard/tratamiento');
}

export async function addMedicina(formData: FormData) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",   // Usuario
            password: "Password123",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log(id);

        const query = `INSERT INTO FIDE_MEDICINA_TB (ID_MEDICINA, NOMBRE_MEDICINA, CANTIDAD) VALUES (:ID_MEDICINA, :NOMBRE_MEDICINA, :CANTIDAD)`;

        // Ejecuta la consulta con los parámetros de enlace
        await connection.execute(query, {
            ID_MEDICINA: id,
            NOMBRE_MEDICINA: formData.get('NOMBRE_MEDICINA'),
            CANTIDAD: formData.get('CANTIDAD'),
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
    revalidatePath('/dashboard/medicina');
    redirect('/dashboard/medicina');
}
