import { LinkButton } from "./LinkButton"
export const QuizSection = () => {
  return (
    <section className="quiz-section lg:bg-cover bg-cover text-dark lg:px-64 px-8 pb-96 pt-8">
      <div>
        <h2 className="lg:text-product-types-section-title text-product-types-section-title-mobile mb-16 w-[22rem] font-serif">
          Take our quiz, to see which one that best suits your needs
        </h2>

        <LinkButton color="green" size="base" href="/quiz">
          Take the quiz
        </LinkButton>
      </div>
    </section>
  )
}
