'use client'
import Link from "next/link";
import {useState} from "react";

export default function Home() {

    const [id, setId] = useState('80871264')

    return (
        <div className="max-w-screen min-h-[90vh] bg-white flex flex-wrap justify-center items-center text-[#02355A]">
            <div className="flex flex-wrap justify-center items-center mt-12 gap-4">
                <input className="border-blue border-2 rounded-2xl px-4 py-2" value={id} onChange={(e) => setId(e.target.value)} type="tel"
                       pattern="[0-9]" placeholder="GPID"/>
                <Link className=" text-4xl border-2 border-[#02355A] hover:bg-[#02355A] hover:text-white rounded-xl px-5 py-2" href={`/vuelos/${id}`}>Buscar
                    Vuelos</Link>
            </div>
        </div>
    );
}
