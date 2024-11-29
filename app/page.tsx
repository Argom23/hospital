"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import axios from 'axios';


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
      <main className="flex min-h-screen flex-col p-6">

        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
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
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`} >
              <strong>Welcome to Acme.</strong> This is the example for the{' '}
              <a href="https://nextjs.org/learn/" className="text-blue-500">
                Next.js Learn Course
              </a>
              , brought to you by Vercel.
            </p>
            <div className={styles.shape}/>
            <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6"/>
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Image
                src="/hero-desktop.png"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
                src="/hero-mobile.png"
                width={1000}
                height={760}
                className="block md:block"
                alt="Screenshots of the dashboard project showing mobile version"
            />
          </div>
        </div>
      </main>
  );
}
