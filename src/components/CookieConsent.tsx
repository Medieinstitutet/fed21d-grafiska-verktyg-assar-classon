import { useState } from "react"
import { LinkButton } from "./LinkButton"

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed bottom-16 left-1/2 max-w-max w-full flex gap-x-4 xl:gap-x-64 items-center -translate-x-1/2 bg-white rounded-3xl shadow-cookie-consent px-11 py-8">
      <p className="text-cookie-consent-small md:text-cookie-consent">
        We use cookies! Something about cookies...
      </p>

      <LinkButton onClick={() => setIsOpen(false)} color="blue" size="small">
        Accept
      </LinkButton>
    </div>
  )
}
