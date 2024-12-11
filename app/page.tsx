"use client";
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            {/* Header Section */}
            <header className="w-full bg-blue-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Hospital Management System</h1>
                    <p className="text-lg mt-2">
                        Bienvenido al sistema de gestión hospitalaria. Accede a las herramientas administrativas aquí.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Inicia sesión para continuar</h2>
                <p className="text-gray-600 mb-8">Haz clic en el botón para acceder al sistema.</p>

                <div className="flex justify-center">
                    <Link href="/login/" className="bg-blue-600 text-white py-4 px-8 rounded-lg shadow-md hover:opacity-90 transition transform hover:scale-105">
                        Iniciar Sesión
                    </Link>
                </div>
            </main>
        </div>
    );
}

