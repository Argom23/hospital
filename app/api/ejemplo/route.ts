import { NextResponse } from "next/server";
import oracledb from "oracledb";



export async function GET(req:any) {
    try {
        let data = await req.json()

        return NextResponse.json({ ok: 200 })
    } catch (error) {

        return NextResponse.json({ ok: 200 })
    }
}

const FunctionGetUser = () => {
    let users = [ { id: 1, name: "John Doe" }, { id: 2, name: "Jane Smith" }, { id: 3, name: "Alice Johnson" }, ];
    return { ok: users }
}


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
            `SELECT * FROM EMPLOYEES`, // Consulta
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT } // Resultado como objetos clave-valor
        );

        // Mostrar resultados
        console.log("Query Results:");
        return{ok:""}

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

export async function POST(req:any) {
    try {
        let data = await req.json()
        let response:any = "";
        switch (data.action) {
            case "getInfo":
                response = FunctionGetUser ()
                break;
            case "getData":
                response = await run ();
                break;
            default:
                break;
        }
        return NextResponse.json({ ok: response })
    } catch (error) {

        return NextResponse.json({ ok: "200" })
    }
}
