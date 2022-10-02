import { LinkButton } from "./LinkButton"

export const ProductTypesSection = () => {
  return (
    <section className="product-types-section text-dark px-64 py-80">
      <div className="flex items-end justify-center flex-col w-full">
        <h2 className="text-product-types-section-title mb-16 text-right font-serif">
          There’s <br /> (at least) one <br /> for every <br /> skin type
        </h2>

        <LinkButton color="red" size="base" href="/products">
          See all products
        </LinkButton>
      </div>
    </section>
  )
}
