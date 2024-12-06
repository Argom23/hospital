const oracledb = require("oracledb");
const cors = require('cors');
const express = require('express');
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


app.get('/api/medicinas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const results = await getMedicinaById(id);
        res.status(200).json(results);
    } catch (err) {
        Console.log(err);
    }
});


const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

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
}

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
}

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
}

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
}

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
}

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
}

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
            `SELECT *
             FROM FIDE_Medicina_TB
             WHERE (id == FIDE_MEDICINA_TB.MEDICINA_ID)`, // Consulta
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
}

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
}

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
}

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
}

