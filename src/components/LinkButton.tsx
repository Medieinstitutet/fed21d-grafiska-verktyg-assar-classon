import { cva, VariantProps } from "class-variance-authority"
import { FC, HTMLAttributes } from "react"

const button = cva(
  [
    "font-light",
    "text-white",
    "rounded",
    "flex",
    "items-center",
    "w-max",
    "cursor-pointer",
    "hover:scale-105",
    "transition",
  ],
  {
    variants: {
      color: {
        red: ["bg-[#7A4E5D]"],
        green: ["bg-[#4A6152]"],
        blue: ["bg-[#4F6F97]"],
      },
      size: {
        base: ["h-12", "px-5", "text-button-base"],
        small: ["h-10", "px-3", "text-button-small"],
      },
    },

    defaultVariants: {
      size: "base",
    },
  }
)

interface Props
  extends VariantProps<typeof button>,
    Omit<HTMLAttributes<HTMLAnchorElement>, "color"> {
  href?: string
}

export const LinkButton: FC<Props> = ({
  color,
  size,
  children,
  className,
  href,
  ...rest
}) => (
  <a
    {...rest}
    href={href}
    className={button({ color, size, class: className })}
  >
    {children}
  </a>
)
