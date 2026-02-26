import {IoIosAirplane} from "react-icons/io";
import Image from "next/image"
import {TicketInterface} from "@/interfaces";

const Ticket = ({nombre, airline, fecha, origen, destino, clave, hSalida, hLlegada, numero}: TicketInterface) => {

    const newDate = new Date(fecha).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="flex flex-wrap w-full my-5 border-2 border-[#1A1F54]">
            <div className="lg:w-9/12 w-full">
                <div
                    className="flex flex-wrap lg:justify-start justify-center items-center gap-4 w-full py-2 bg-[#02355A] text-white text-xl">
                    <span className="lg:ps-8 ps-0 font-black uppercase">PEPSICO</span>
                </div>
                <div
                    className="flex flex-wrap lg:justify-start justify-around items-center w-full p-8 lg:text-start text-center">
                    <div className="md:w-1/2 w-full">
                        <p className="text-[#0D3D60]/80 lg:text-lg text-xs">Nombre del pasajero:</p>
                        <p className="text-[#202459] uppercase lg:text-2xl text-md lg:pt-0 pt-2 font-semibold">{nombre}</p>
                    </div>
                    <div className="w-1/2 lg:mt-0 mt-2">
                        <p className="text-[#0D3D60]/80 lg:text-lg text-xs">Fecha:</p>
                        <p className="text-[#202459] uppercase lg:text-2xl text-md lg:pt-0 pt-2 font-semibold">{newDate}</p>
                    </div>
                    <div className="lg:hidden w-1/2 lg:mt-0 mt-2">
                        <p className="text-[#0D3D60]/80 lg:text-2xl text-xs">Clave:</p>
                        <p className="text-[#202459] uppercase lg:text-2xl text-md lg:pt-0 pt-2">{clave}</p>
                    </div>
                </div>
                <div
                    className="flex flex-wrap justify-center items-center lg:gap-12 gap-8 lg:py-16 py-6 w-full text-[#02355A] lg:text-4xl text-2xl font-black text-center">
                    <p className="lg:w-auto w-full">{origen}</p>
                    <IoIosAirplane className="lg:w-auto w-full lg:size-25 size-12"/>
                    <p className="lg:w-auto w-full">{destino}</p>
                </div>
                <div className="flex flex-wrap lg:justify-start justify-around items-center w-full p-8 lg:text-start text-center">
                    <div className="lg:block lg:w-1/3 hidden">
                        <p className="text-[#0D3D60]/80">Clave:</p>
                        <p className="text-[#202459] uppercase text-lg font-semibold">{clave}</p>
                    </div>
                    <div className="lg:w-1/3 w-1/2">
                        <p className="text-[#0D3D60]/80">Hora de salida:</p>
                        <p className="text-[#202459] uppercase text-lg font-semibold">{ Number(hSalida.split(':')[0]) >= 12 ? hSalida + ' P.M.' : hSalida + ' A.M.' }</p>
                    </div>
                    <div className="lg:w-1/3 w-1/2">
                        <p className="text-[#0D3D60]/80">Hora de llegada:</p>
                        <p className="text-[#202459] uppercase text-lg font-semibold">{ Number(hLlegada.split(':')[0]) >= 12 ? hLlegada + ' P.M.' : hLlegada + ' A.M.' }</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-3/12 w-full">
                <div
                    className="lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-4 hidden w-full py-2 bg-[#02355A] border-l-2 border-[#1A1F54] text-white text-xl font-black">
                    <span>{origen}</span>
                    <IoIosAirplane className="size-7"/>
                    <span>{destino}</span>
                </div>
                <div
                    className="flex flex-wrap justify-center items-center gap-8 lg:py-18 py-12 w-full text-[#02355A] text-center border-l-2 border-dashed">
                    <p className="w-full text-2xl font-black uppercase">VUELO</p>
                    {airline === 'AEROMEXICO' ?
                        <Image className="mx-auto" alt="Aeromexico Logo" src={"/aeromexico.jpg"} width="200"
                               height="200"/> : <p>{airline}</p>}

                    <p className="w-full lg:text-4xl text-2xl font-black">{numero}</p>
                    <p className="lg:text-2xl text-md px-8 lg:pt-8 pt-0 font-bold">Llega con 3 hrs de anticipación</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;