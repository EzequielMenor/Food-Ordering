import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={"Nuestra historia"}
          mainHeader={"Sobre nosotros"}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4 ">
          <p>
            Ex minim dolore magna ex ea. Sit proident ea fugiat esse sint magna
            laboris. Minim ipsum fugiat aute adipisicing non do sint culpa quis
            non amet enim.
          </p>
          <p>
            Officia eiusmod aute sit id duis adipisicing tempor est est aliquip
            ut. Cupidatat in tempor quis in aliqua pariatur cupidatat ea nisi
            excepteur est officia. Irure ullamco in sunt proident cupidatat
            consectetur.
          </p>
          <p>
            Consequat anim duis minim magna aute. Cupidatat minim quis eiusmod
            ipsum dolore proident cillum excepteur eiusmod.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={"No lo dudes"} mainHeader={"Contactanos"} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-gray-500 text-center mt-16 ">
        &copy; 2024 All right reserved
      </footer>
    </>
  );
}
