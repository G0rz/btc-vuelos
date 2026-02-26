import {FaBus} from "react-icons/fa";
import {BusTicketInterface} from "@/interfaces";

const BusTicket = ({id}:BusTicketInterface) => {
    return (
        <div className="flex flex-wrap justify-center items-center lg:w-1/2 w-full my-5 border-2 border-[#1A1F54]">
            <div
                className="text-center w-full py-2 bg-[#02355A] text-white text-xl">
                <p className="uppercase text-">BOLETO</p>
            </div>
            <div className="flex flex-wrap justify-center items-center text-center w-full p-12 text-[#1A1F54]">
                <div className="lg:w-1/3 w-full">
                    <FaBus className="size-25 mx-auto"/>
                </div>
                <hr className="bg-[#1A1F54] w-full h-1 lg:my-0 my-8 lg:hidden"/>
                <div className="lg:w-2/3 w-full">
                    <p className="lg:text-4xl text-2xl font-bold uppercase">{id}</p>
                </div>
                <hr className="bg-[#1A1F54] w-full  lg:block hidden h-1 my-8"/>
            </div>
        </div>
    );
};

export default BusTicket;