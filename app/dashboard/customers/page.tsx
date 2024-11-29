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
        <div>
            <button onClick={fetchUsers}>Get Users</button>
            {!loading && !error && users.length > 0 && (
                <ul>
                    {users.map((user:any) => (
                        <li key={user.EMPLOYEE_ID}>
                            <h3>{user.FIRST_NAME}</h3>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}