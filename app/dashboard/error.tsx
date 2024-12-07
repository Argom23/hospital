'use client'
export default function Page(error: Error) {
    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-blue-600">{error.message}</p>
                    <h1 className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        Error
                    </h1>
                    <p className=" text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Se produjo un error
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-x-6">
                        <a
                            href="/dashboard"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Regresar
                        </a>

                    </div>
                </div>
            </main>
        </>
    )
}