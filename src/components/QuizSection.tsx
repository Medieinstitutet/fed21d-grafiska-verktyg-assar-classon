import { LinkButton } from "./LinkButton"
export const QuizSection = () => {
  return (
    <section className="quiz-section text-dark px-64 pb-96 pt-8">
      <div>
        <h2 className="text-product-types-section-title mb-16 w-[22rem] font-serif">
          Take our quiz, to see which one that best suits your needs
        </h2>

        <LinkButton color="green" size="base" href="/quiz">
          Take the quiz
        </LinkButton>
      </div>
    </section>
  )
}
