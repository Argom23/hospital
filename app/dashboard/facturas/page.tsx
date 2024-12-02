"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Page() {
    const [facturas, setFacturas] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchFactura = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3010/api/facturas');
            console.log(response);
            setFacturas(response.data); // Store the fetched data in state
        } catch (err) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="bg-gradient-to-r bg-neutral-800">
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={fetchFactura}>Get Facturas</button>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tabla de usuarios</h1>
            {!loading && !error && facturas.length > 0 && (
                <div className={"relative overflow-x-auto shadow-md sm:rounded-lg"}>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tratamiento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Paciente
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Costo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Opciones
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {facturas.map((factura: any) => (
                            <tr key={factura.ID_FACTURA}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">
                                    {factura.Tratamiento}
                                </td>
                                <td className="px-6 py-4">
                                    {factura.Paciente}
                                </td>
                                <td className="px-6 py-4">
                                    {factura.Doctor}
                                </td>
                                <td className="px-6 py-4">
                                    {factura.Fecha_Factura}
                                </td>
                                <td className="px-6 py-4">
                                    {factura.Costo}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#"
                                       className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detalles</a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}