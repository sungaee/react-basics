import type { ReactNode } from "react"
interface ButtonProps {
  text: string
  color?: string
  children?: ReactNode
}
const Button = ({ children, text, color = 'black' }: ButtonProps) => {
  return (
    <button style={{ color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}
export default Button
