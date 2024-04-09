import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero pt-12">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Todo<br />
          es mejor<br />
          con&nbsp;
          <span className="text-secondary">Pi</span>
          <span className="text-secondary">zz</span>
          <span className="text-secondary">a</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          La pizza es la pieza que faltaba para que cada día sea completo, una
          simple unión en la vida.
        </p>
        <div className="flex gap-4 text-sm">
          <button className=" bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Pide ahora
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
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
