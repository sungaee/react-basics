import './Button.css'

interface ButtonProps {
  text: string
  type?: 'DEFAULT' | 'POSITIVE' | 'NEGATIVE'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  )
}
export default Button
