"use client"
import React, {useEffect, useState} from "react";
import { TryLogin } from "@/app/lib/actions";

export default function LoginForm({ error }: { error?: string }) {
  const [loginError, setLoginError] = useState<string | null>(null);

  // Leer el error de la URL cuando el componente se monta
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const errorMessage = params.get("error");
    if (errorMessage) {
      setLoginError(errorMessage);

      const currentUrl = window.location.href.split('?')[0];
      window.history.replaceState({}, '', currentUrl);
      error ='';
    }
  }, []);

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          {/* Título del formulario */}
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
          {/* Mostrar el error si existe */}
          {loginError && (
              <div className="text-red-500 text-sm mb-4">{loginError}</div>
          )}
          <form action={TryLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 mr-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">Id e inicio de sesión</label>
              <input
                  type="number"
                  id="id"
                  name="id"
                  className="mt-1 mr-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
