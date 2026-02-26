import {IoIosAirplane} from "react-icons/io";
import Image from "next/image"

const Ticket = ({nombre, aeroline, fecha, origen, destino, clave, hSalida, hLlegada, numero}) => {

    const newDate = new Date(fecha).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="flex flex-wrap w-full my-5 border-2 border-black">
            <div className="w-9/12">
                <div
                    className="flex flex-wrap justify-start items-center lg:gap-4 w-full py-2 bg-[#02355A] text-white text-xl">
                    <span className="ps-8 font-black uppercase">PEPSICO</span>
                </div>
                <div className="flex flex-wrap justify-start items-start w-full p-7">
                    <div className="md:w-1/2 w-full">
                        <p className="text-[#02355A]">Nombre del pasajero:</p>
                        <p className="text-black uppercase text-2xl">{nombre}</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-[#02355A]">Fecha:</p>
                        <p className="text-black uppercase text-2xl">{newDate}</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-20 py-16 w-full text-[#02355A] text-6xl font-black">
                    <p>{origen}</p>
                    <IoIosAirplane className="size-30"/>
                    <p>{destino}</p>
                </div>
                <div className="flex flex-wrap justify-start items-start w-full p-7">
                    <div className="md:w-1/3 w-full">
                        <p className="text-[#02355A]">Clave:</p>
                        <p className="text-black uppercase text-2xl">{clave}</p>
                    </div>
                    <div className="w-1/3">
                        <p className="text-[#02355A]">Hora de salida:</p>
                        <p className="text-black uppercase text-2xl">{hSalida.split(':')[0] > 12 ? hSalida + ' AM' : hSalida + ' PM'}</p>
                    </div>
                    <div className="w-1/3">
                        <p className="text-[#02355A]">Hora de llegada:</p>
                        <p className="text-black uppercase text-2xl">{hLlegada.split(':')[0] > 12 ? hLlegada + ' AM' : hLlegada + ' PM'}</p>
                    </div>
                </div>
            </div>
            <div className="w-3/12 ">
                <div
                    className="lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-4 hidden w-full py-2 bg-[#02355A] border-l-2 border-black text-white text-xl">
                    <span>{origen}</span>
                    <IoIosAirplane className="size-7"/>
                    <span>{destino}</span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 py-18 w-full text-[#02355A] text-center border-l-2 border-dashed">
                    <p className="w-full text-2xl font-black uppercase">VUELO</p>
                    {aeroline === 'AEROMEXICO' ?
                        <Image className="mx-auto" alt="Aeromexico Logo" src={"/aeromexico.jpg"} width="200"
                               height="200"/> : <p>{aeroline}</p>}

                    <p className="w-full text-5xl font-black">{numero}</p>
                    <p className="text-2xl">Llega con 3 hrs de anticipación</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;