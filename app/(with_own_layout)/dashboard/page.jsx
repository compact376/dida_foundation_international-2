import React from 'react'

const Page = () => {
    return (
        <main className="flex flex-col items-center pt-24 min-h-screen">
            <h1 className="text-6xl font-bold">Protected Dashboard Page</h1>
            <p className='mt-5 text-xl font-medium'>
                Only acced by authenticated users
            </p>
        </main>
    )
}

export default Page