import { FC } from "react"

export const ProductSection = () => {
  return (
    <section className="px-16 py-24">
      <h2 className="text-center text-product-section-title mb-20">
        Learn more about the products
      </h2>

      <div className="grid grid-cols-4 gap-x-16 w-max mx-auto">
        <Product name="Acne-Prone" imageSrc="/img/rendered acne mask.png" />
        <Product
          name="Combination"
          imageSrc="/img/rendered combination mask.png"
        />
        <Product name="Dry" imageSrc="/img/rendered dry mask.png" />
        <Product name="Normal" imageSrc="/img/rendered normal mask.png" />
      </div>

      <p className="text-center text-product-section-title font-serif mt-16">
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
    <div className="w-[17.5rem]">
      <img
        src={imageSrc}
        className=" w-full h-[17.5rem] rounded-[30px] shadow-product mb-4 object-cover"
      />
      <h3 className="text-center text-product-section-product font-serif">
        {name}
      </h3>
    </div>
  )
}
