import { Header } from "./Header"

export const Hero = () => {
  return (
    <div className="hero xl:h-[56rem]">
      <Header />
      <section>
        <h1 className="text-hero-title text-light-text mt-40 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Mauris
          suscipit neque est, vel ullamcorper purus.
        </h1>
      </section>
    </div>
  )
}
