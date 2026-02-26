import Link from "next/link";
import {IoIosPerson, IoMdMenu} from "react-icons/io";

const Navbar = () => {

    return (
        <div className="flex flex-wrap justify-around items-center max-w-screen h-[10vh] bg-[#02355A]">
            <Link className="md:text-4xl text-4xl font-black uppercase" href="/">PEPSICO</Link>
            <button className="lg:flex bg-[#BFCEE1] border-2 border-white rounded-full size-10 hidden">
                <IoIosPerson className="size-10 mt-auto mx-auto"/>
            </button>
            <button className="lg:hidden flex">
                <IoMdMenu className="size-10 "/>
            </button>

        </div>
    );
};

export default Navbar;