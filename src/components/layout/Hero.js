import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Todo<br />
          es mejor<br />
          con&nbsp;
          <span className="text-secondary">Pi</span>
          <span className="text-tertiary">z</span>
          <span className="text-quaternary">z</span>
          <span className="text-quinary">a</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          La pizza es la pieza que faltaba para que cada día sea completo, una
          simple unión en la vida.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Pide ahora
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 px-4 py-2 text-gray-600 font-semibold">
            Saber más
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Pizza"}
        />
      </div>
    </section>
  );
}
