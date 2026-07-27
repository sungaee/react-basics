import './App.css'
import Button from './components/Button'

function App() {
  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  }
  return (
    <>
      <Button {...buttonProps} />
      <Button text={'카페'} />
      <Button text={'블로그'}>
        <div>자식 요소</div> 
        {/* 자식요소는 children이름의 프롭스로 전달된다. */}
      </Button>
    </>
  )
}

export default App
