const oracledb = require("oracledb");
const cors = require('cors');
const express = require('express');
const {revalidatePath} = require("next/cache");
const {redirect} = require("next/navigation");
const app = express();

// Enable CORS for all origins (you can customize this later)
app.use(cors());


app.get('/api/users/', async (req, res) => {

    const results = await run();
    res.status(200).json(results);
});

app.get('/api/facturas/', async (req, res) => {

    const results = await getFacturas();
    res.status(200).json(results);
});

app.get('/api/tratamientos/', async (req, res) => {

    const results = await getTratamientos();
    res.status(200).json(results);
});

app.get('/api/cirugias/', async (req, res) => {

    const results = await getCirugias();
    res.status(200).json(results);
});

app.get('/api/personal/', async (req, res) => {

    const results = await getPersonal();
    res.status(200).json(results);
});

app.get('/api/recetas/', async (req, res) => {

    const results = await getReceta();
    res.status(200).json(results);
});

app.get('/api/medicinas/', async (req, res) => {

    const results = await getMedicina();
    res.status(200).json(results);
});

app.get('/api/citas/', async (req, res) => {

    const results = await getCita();
    res.status(200).json(results);
});

app.get('/api/pacientes/', async (req, res) => {

    const results = await getPaciente();
    res.status(200).json(results);
});

app.get('/api/hospitales/', async (req, res) => {

    const results = await getHospital();
    res.status(200).json(results);
});

app.get('/api/doctores/', async (req, res) => {

    const results = await getDoctores();
    res.status(200).json(results);
});

// FUNCIONALIDADES

app.get('/api/departamentos/', async (req, res) => {

    const results = await getDepartamentos();
    res.status(200).json(results);
});

app.get('/api/especializaciones/', async (req, res) => {

    const results = await getEspecializacion();
    res.status(200).json(results);
});

// SPECIFIC ID

app.get('/api/medicinas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getMedicinaById(id);
        res.status(200).json(results);
    } catch (err) {
        Console.log(err);
    }
});

app.get('/api/doctores/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getDoctorById(id);
        res.status(200).json(results);
    } catch (err) {
        Console.log(err);
    }
});

app.get('/api/facturas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getFacturaById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/tratamientos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getTratamientoById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/cirugias/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getCirugiaById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/personal/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getPersonalById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/recetas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getRecetaById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/citas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getCitaById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getPacienteById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/hospitales/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getHospitalById(id);
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
    }
});


const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// GET ALL TABLE

// Base, no hace nada :(
async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: "hr",   // Usuario
            password: "hr",    // Contraseña
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",    // Alias en tnsnames.ora
        });

        console.log("Successfully connected to Oracle Database");

        // Select data
        const result = await connection.execute(
            `SELECT *
             FROM EMPLOYEES`, // Consulta
            [],                        // Parámetros opcionales (vacío en este caso)
            {outFormat: oracledb.OUT_FORMAT_OBJECT} // Resultado como objetos clave-valor
        );

        // Mostrar resultados
        // console.log("Query Results:");
        // result.rows.forEach(row => {
        //     console.log(row);
        // });

        return result.rows;

    } catch (err) {
        console.error("Error: ", err);
    } finally {
        if (connection) {
            try {
                // await connection.close();
                console.log("Connection closed");
            } catch (err) {
                console.error("Error closing connection: ", err);
            }
        }
    }
}

async function getFacturas() {
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
            `SELECT *
             FROM FIDE_FACTURAS_V`, // Consulta
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
} //

async function getTratamientos() {
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
            `SELECT *
             FROM FIDE_TRATAMIENTOS_V`, // Consulta
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
} //

async function getCirugias() {
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
            `SELECT *
             FROM FIDE_CIRUGIAS_V`, // Consulta
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
} //

async function getPersonal() {
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
            `SELECT *
             FROM FIDE_PERSONAL_V`, // Consulta
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
} //

async function getReceta() {
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
            `SELECT *
             FROM FIDE_RECETA_V`, // Consulta
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
} //

async function getMedicina() {
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
            `SELECT *
             FROM FIDE_Medicina_TB`, // Consulta
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
} //

async function getCita() {
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
            `SELECT *
             FROM FIDE_CITA_V`, // Consulta
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
} //

async function getPaciente() {
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
            `SELECT * FROM FIDE_PACIENTE_V`,
            [],                        // Parámetros opcionales (vacío en este caso)
            {outFormat: oracledb.OUT_FORMAT_OBJECT} // Resultado como objetos clave-valor
        );


        console.log(result.rows);
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
} //

async function getHospital() {
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
            `SELECT *
             FROM FIDE_HOSPITAL_V`, // Consulta
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
} //

async function getDoctores() {
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
            `SELECT *
             FROM FIDE_DOCTOR_V`, // Consulta
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
} //

// Otras Funcionalidades

async function getEspecializacion() {
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
            `SELECT *
             FROM FIDE_ESPECIALIZACION_TB`, // Consulta
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
}

async function getDepartamentos() {
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
            `SELECT *
             FROM FIDE_Departamento_TB`, // Consulta
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
}

// GET BY ID

async function getDoctorById(id) {
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
            `SELECT * FROM FIDE_DOCTOR_V
             WHERE ${id} = ID_DOCTOR`, // Consulta
            [],                        // Parámetros opcionales (vacío en este caso)
            {outFormat: oracledb.OUT_FORMAT_OBJECT} // Resultado como objetos clave-valor
        );
        console.log(result.rows);
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
} //

async function getMedicinaById(id) {
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
            `SELECT * FROM FIDE_Medicina_TB
             WHERE ${id} = ID_MEDICINA`, // Consulta
            [],                        // Parámetros opcionales (vacío en este caso)
            {outFormat: oracledb.OUT_FORMAT_OBJECT} // Resultado como objetos clave-valor
        );
        console.log(result.rows);
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
} //

async function getPacienteById(id) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",
            password: "Password123",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",
        });

        console.log("Successfully connected to Oracle Database");

        const result = await connection.execute(
            `SELECT * FROM FIDE_PACIENTE_V
             WHERE ${id} = ID_PACIENTE`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        console.log(result.rows);
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
} //

async function getCitaById(id) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",
            password: "Password123",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",
        });

        console.log("Successfully connected to Oracle Database");

        const result = await connection.execute(
            `SELECT * FROM FIDE_CITA_V
             WHERE ${id} = ID_CITA`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        console.log(result.rows);
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
} //

async function getHospitalById(id) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",
            password: "Password123",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",
        });

        console.log("Successfully connected to Oracle Database");

        const result = await connection.execute(
            `SELECT * FROM FIDE_HOSPITAL_V
             WHERE ${id} = ID_HOSPITAL`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        console.log(result.rows);
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
} //

async function getRecetaById(id) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",
            password: "Password123",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",
        });

        console.log("Successfully connected to Oracle Database");

        const result = await connection.execute(
            `SELECT * FROM FIDE_RECETA_V
             WHERE ${id} = ID_RECETA`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        console.log(result.rows);
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
} //

async function getPersonalById(id) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",
            password: "Password123",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",
        });

        console.log("Successfully connected to Oracle Database");

        const result = await connection.execute(
            `SELECT * FROM FIDE_PERSONAL_V
             WHERE ${id} = ID_PERSONAL`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        console.log(result.rows);
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
} //

async function getTratamientoById(id) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",
            password: "Password123",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",
        });

        console.log("Successfully connected to Oracle Database");

        const result = await connection.execute(
            `SELECT * FROM FIDE_TRATAMIENTOS_V
             WHERE ${id} = ID_TRATAMIENTO`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        console.log(result.rows);
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
} //

async function getCirugiaById(id) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",
            password: "Password123",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",
        });

        console.log("Successfully connected to Oracle Database");

        const result = await connection.execute(
            `SELECT * FROM FIDE_CIRUGIAS_V
             WHERE ${id} = ID_CIRUGIA`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        console.log(result.rows);
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
} //

async function getFacturaById(id) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "FIDE_HOSPITAL",
            password: "Password123",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=orcl)))",
        });

        console.log("Successfully connected to Oracle Database");

        const result = await connection.execute(
            `SELECT * FROM FIDE_FACTURAS_V
             WHERE ${id} = ID_FACTURA`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        console.log(result.rows);
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
} //

