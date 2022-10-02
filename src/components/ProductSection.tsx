import { FC } from "react"

export const ProductSection = () => {
  return (
    <section className="py-24">
      <h2 className="px-16 text-center md:text-product-section-title text-product-section-title-mobile mb-20">
        Learn more about the products
      </h2>

      <div className=" relative">
        <div className="grid grid-flow-col px-8 gap-8 md:gap-16 py-8 overflow-x-scroll">
          <Product name="Acne-Prone" imageSrc="/img/rendered acne mask.png" />
          <Product
            name="Combination"
            imageSrc="/img/rendered combination mask.png"
          />
          <Product name="Dry" imageSrc="/img/rendered dry mask.png" />
          <Product name="Normal" imageSrc="/img/rendered normal mask.png" />
        </div>

        <svg
          className="absolute bottom-1/2 right-4"
          width={23}
          height={40}
          viewBox="0 0 23 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="rotate(42.71 1.927 0)"
            fill="#D9D9D9"
            d="M1.927 0H29.863699999999998V2.84102H1.927z"
          />
          <path
            transform="rotate(-46.978 1.419 37.55)"
            fill="#D9D9D9"
            d="M1.41852 37.5498H29.35522V40.39082H1.41852z"
          />
        </svg>
      </div>

      <p className="text-center md:text-product-section-title text-product-section-title-mobile font-serif mt-16">
        or...
      </p>
    </section>
  )
}

interface ProductProps {
  name: string
  imageSrc: string
}

const Product: FC<ProductProps> = ({ name, imageSrc }) => {
  return (
    <div className="lg:w-[17.5rem] w-40 hover:scale-105 transition">
      <img
        src={imageSrc}
        className=" w-full lg:h-[17.5rem] h-40 rounded-[30px] shadow-product mb-4 object-cover"
      />
      <h3 className="text-center text-product-section-product font-serif">
        {name}
      </h3>
    </div>
  )
}
