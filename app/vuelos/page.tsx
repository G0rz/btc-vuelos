import Navbar from "@/components/vuelos/Navbar";

import {Vuelo} from "@/interfaces";
import Ticket from "@/components/vuelos/Ticket";

const getVuelos = async (GPID: number): Promise<Vuelo> => {
    const data = await fetch(`https://script.google.com/macros/s/AKfycbzSSa07gGO7VV69I_q72u4Td_6oCSdTmnPrVe-wB0bJf5OMQPX8u2PgrPK3v07Y4A3izA/exec?GPID=${GPID}`)
        .then(response => response.json());

    return data[GPID][0]
}

export default async function VuelosPage() {

    const vuelo = await getVuelos(80871264);
    console.log(vuelo)
    return (
        <main>
            <Navbar/>
            <div className="bg-white max-w-screen min-h-[90vh] p-12 ">
                <h1 className="uppercase text-4xl font-black text-center text-[#02355A]">Vuelos</h1>
                <Ticket nombre={vuelo.NOMBRE} aeroline={vuelo.AEROLINEA_1} numero={vuelo.VUELO_1} fecha={vuelo.FECHA_1} origen={vuelo.ORIGEN_1}
                        destino={vuelo.DESTINO_1} clave={vuelo.CLAVE_1} hSalida={vuelo.SALE_1} hLlegada={vuelo.LLEGA_1}
                        clave={vuelo.CLAVE_1}
                />
            </div>
        </main>
    );
};