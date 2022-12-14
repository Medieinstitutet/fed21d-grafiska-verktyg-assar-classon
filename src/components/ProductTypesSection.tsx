import { LinkButton } from "./LinkButton"

export const ProductTypesSection = () => {
  return (
    <section className="product-types-section lg:bg-cover bg-cover text-dark lg:px-64 px-8 py-80">
      <div className="flex items-end justify-center flex-col w-full">
        <h2 className="lg:text-product-types-section-title text-product-types-section-title-mobile mb-16 text-right font-serif">
          There’s <br /> (at least) one <br /> for every <br /> skin type
        </h2>

        <LinkButton
          color="red"
          size="base"
          href="/products"
          className="mx-auto sm:mx-0"
        >
          See all products
        </LinkButton>
      </div>
    </section>
  )
}
