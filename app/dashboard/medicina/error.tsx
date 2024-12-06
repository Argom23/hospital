'use client'


export default function Error({reset}: {
    reset: () => void
}) {
    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-2xl text-center">Ocurio un problema</h2>

            <button
                className="mt-2 rounded-md bg-blue-800 px-4 py-2 text-sm text-white transition hover:scale-110 hover:bg-blue-500 "
                onClick={()=> reset}>
                volver
            </button>
        </main>
    );
}