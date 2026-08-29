import type { ReactNode } from 'react'
interface ButtonProps {
  text: string
  color?: string
  children?: ReactNode
}
const Button = ({ children, text, color = 'black' }: ButtonProps) => {
  const onClickButton = (e:any) => {
    console.log(e);
    console.log(text)
  }
  return (
    <button
      onClick={onClickButton}
      //   onMouseEnter={onClickButton}
      style={{ color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}
export default Button
