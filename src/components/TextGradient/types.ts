import { HTMLAttributes } from "react"
import { Typo, TypoKind } from "../../themes/types"

export type TextGradientProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode
  size?: number | string
  color?: string
  type?: TypoKind
  className?: string
  as?: TypoKind | 'span'
}

export type StyledTextGradientProps = {
  size?: number | string
  color: string
  typo: Typo
  as: TypoKind | 'span'
}
