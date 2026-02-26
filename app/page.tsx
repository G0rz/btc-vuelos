import Link from "next/link";

export default function Home() {
  return (
      <div className="max-w-screen min-h-screen">
        <div className="flex flex-wrap justify-center items-center mt-12 gap-4">
            <Link className="text-white text-4xl border-2 border-white px-5 py-2" href="/vuelos">Vuelos</Link>
        </div>
      </div>
  );
}
