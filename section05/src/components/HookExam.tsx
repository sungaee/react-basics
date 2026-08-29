import useInput from "../hooks/useInput"
/**
 * * hook 관련사항
 * * 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출가능
 * * 2. 조건문 안에 호출될 수 없다.
 * * 3. Custom Hook을 직접 만들 수 있다.
 */

// TODO ts 변경
const HookExam = () => {
  const [input, onChange] = useInput()

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  )
}
export default HookExam
