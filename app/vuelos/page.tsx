import Navbar from "@/components/vuelos/Navbar";
import {VueloInterface} from "@/interfaces";
import Ticket from "@/components/vuelos/Ticket";
import BusTicket from "@/components/vuelos/BusTicket";

const getVuelos = async (GPID: number): Promise<VueloInterface> => {
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
            <div className="bg-white max-w-screen min-h-[90vh] p-12 font-stretch-expanded">
                <h1 className="uppercase text-4xl font-black text-center text-[#02355A]">Vuelos</h1>
                {vuelo.VUELO_1 && <Ticket nombre={vuelo.NOMBRE} airline={vuelo.AEROLINEA_1} numero={vuelo.VUELO_1}
                                          fecha={vuelo.FECHA_1} origen={vuelo.ORIGEN_1}
                                          destino={vuelo.DESTINO_1} clave={vuelo.CLAVE_1} hSalida={vuelo.SALE_1}
                                          hLlegada={vuelo.LLEGA_1}
                />}
                {vuelo.VUELO_2 && <Ticket nombre={vuelo.NOMBRE} airline={vuelo.AEROLINEA_2} numero={vuelo.VUELO_2}
                                          fecha={vuelo.FECHA_2} origen={vuelo.ORIGEN_2}
                                          destino={vuelo.DESTINO_2} clave={vuelo.CLAVE_2} hSalida={vuelo.SALE_2}
                                          hLlegada={vuelo.LLEGA_2}
                />}
                {vuelo.VUELO_3 && <Ticket nombre={vuelo.NOMBRE} airline={vuelo.AEROLINEA_3} numero={vuelo.VUELO_3}
                                          fecha={vuelo.FECHA_3} origen={vuelo.ORIGEN_3}
                                          destino={vuelo.DESTINO_3} clave={vuelo.CLAVE_3} hSalida={vuelo.SALE_3}
                                          hLlegada={vuelo.LLEGA_3}
                />}
                {vuelo.VUELO_4 && <Ticket nombre={vuelo.NOMBRE} airline={vuelo.AEROLINEA_4} numero={vuelo.VUELO_4}
                                          fecha={vuelo.FECHA_4} origen={vuelo.ORIGEN_4}
                                          destino={vuelo.DESTINO_4} clave={vuelo.CLAVE_4} hSalida={vuelo.SALE_4}
                                          hLlegada={vuelo.LLEGA_4}
                />}
                {vuelo.FECHA_5 && <BusTicket id={vuelo.FECHA_5}/>}
            </div>
        </main>
    );
};