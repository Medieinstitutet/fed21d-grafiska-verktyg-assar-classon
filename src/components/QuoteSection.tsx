export const QuoteSection = () => {
  return (
    <section className="px-64 py-48 text-center bg-dark text-light-text">
      <figure>
        <blockquote className="text-quote-section-quote mb-16 font-serif">
          <q>
            Fantastic product!
            <br /> Wow! Can’t Believe it!!
          </q>
        </blockquote>

        <figcaption className="text-quote-section-author">
          - Customer
        </figcaption>
      </figure>
    </section>
  )
}
