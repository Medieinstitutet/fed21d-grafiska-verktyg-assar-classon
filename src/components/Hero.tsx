import { Header } from "./Header"

export const Hero = () => {
  return (
    <div className="hero-small lg:hero-large h-[48rem] xl:h-[56rem]">
      <Header />
      <section className="px-4">
        <h1 className="text-hero-title text-light-text lg:mt-40 mt-32 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Mauris
          suscipit neque est, vel ullamcorper purus.
        </h1>
      </section>
    </div>
  )
}
