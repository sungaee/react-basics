import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'
import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'

// 1. "/" : 모든 일기를 조회하는 Home페이지
// 2. "/new" : 새로운 일기를 작성하는 New페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary페이지
function App() {
  return (
    <>
      <Header
        title={'Header'}
        leftChild={<Button text={'Left'} />}
        rightChild={<Button text={'Right'} />}
      />
      <Button
        text={'뭉치'}
        type={'DEFAULT'}
        onClick={() => {
          console.log('콜라')
        }}
      />
      <Button
        text={'뭉치'}
        type={'POSITIVE'}
        onClick={() => {
          console.log('콜라')
        }}
      />
      <Button
        text={'뭉치'}
        type={'NEGATIVE'}
        onClick={() => {
          console.log('콜라')
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
