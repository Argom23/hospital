"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Page() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3010/api/users');
            console.log(response);
            setUsers(response.data); // Store the fetched data in state
        } catch (err) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="bg-gradient-to-r bg-neutral-800">
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={fetchUsers}>Get Users</button>

            {/*{!loading && !error && users.length > 0 && (*/}
            {/*    <ul>*/}
            {/*        {users.map((user: any) => (*/}
            {/*            <li key={user.EMPLOYEE_ID}>*/}
            {/*                <h3>{user.FIRST_NAME}</h3>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*)}*/}

            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tabla de usuarios</h1>
            {!loading && !error && users.length > 0 && (
                <div className={"relative overflow-x-auto shadow-md sm:rounded-lg"}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre Empleado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Apellidos
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Opciones
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user: any) => (
                        <tr key={user.EMPLOYEE_ID}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">
                                {user.FIRST_NAME}
                            </td>
                            <td className="px-6 py-4">
                                {user.LAST_NAME}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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