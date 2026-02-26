'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import Link from "next/link";

export default function ErrorPage({
                                      error,
                                      reset,
                                  }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div
            className='flex items-center justify-center min-h-screen from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br'>
            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
                <div className='max-w-md mx-auto space-y-6'>

                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">Oops</h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">El GPID que ingresaste no existe</p>
                            <Link href="/"  className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Volver al inicio </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}