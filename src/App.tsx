import { CookieConsent } from "./components/CookieConsent"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { ParagraphSection } from "./components/ParagraphSection"
import { ProductSection } from "./components/ProductSection"
import { ProductTypesSection } from "./components/ProductTypesSection"
import { QuizSection } from "./components/QuizSection"
import { QuoteSection } from "./components/QuoteSection"

function App() {
  return (
    <>
      <Hero />
      <main>
        <ParagraphSection />
        <ProductTypesSection />
        <QuoteSection />
        <ProductSection />
        <QuizSection />
      </main>
      <Footer />

      <CookieConsent />
    </>
  )
}

export default App
