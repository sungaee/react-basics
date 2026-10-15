import './App.css'
import { useReducer, useRef, createContext, useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import type { DiaryEntry } from './types'

// 1. "/" : 모든 일기를 조회하는 Home페이지
// 2. "/new" : 새로운 일기를 작성하는 New페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary페이지

type Action =
  | { type: 'INIT'; data: DiaryEntry[] }
  | { type: 'CREATE'; data: DiaryEntry }
  | { type: 'UPDATE'; data: DiaryEntry }
  | { type: 'DELETE'; id: number }

function reducer(state: DiaryEntry[], action: Action): DiaryEntry[] {
  let nextState: DiaryEntry[]

  switch (action.type) {
    case 'INIT':
      return action.data
    case 'CREATE': {
      nextState = [action.data, ...state]
      break
    }
    case 'UPDATE': {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      )
      break
    }
    case 'DELETE': {
      nextState = state.filter((item) => String(item.id) !== String(action.id))
      break
    }
    default:
      return state
  }
  localStorage.setItem('diary', JSON.stringify(nextState))
  return nextState
}

interface DiaryDispatch {
  onCreate: (createdDate: number, emotionId: number, content: string) => void
  onUpdate: (
    id: number,
    createdDate: number,
    emotionId: number,
    content: string,
  ) => void
  onDelete: (id: number) => void
}

export const DiaryStateContext = createContext<DiaryEntry[]>([])
export const DiaryDispatchContext = createContext<DiaryDispatch>({
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: () => {},
})

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)

  useEffect(() => {
    const storedData = localStorage.getItem('diary')
    if (!storedData) {
      setIsLoading(false)
      return
    }
    const parsedData:DiaryEntry[] = JSON.parse(storedData)
    if (!Array.isArray(parsedData)) {
      setIsLoading(false)
      return
    }
    let maxId = 0
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    })
    idRef.current = maxId + 1

    dispatch({
      type: 'INIT',
      data: parsedData,
    })
    setIsLoading(false)
  }, [])

  // 새로운 일기 추가
  const onCreate = (createdDate: number, emotionId:number, content: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }
  // 기존 일기 수정
  const onUpdate = (id:number, createdDate:number, emotionId:number, content:string) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    })
  }
  // 기존 일기 삭제
  const onDelete = (id:number) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  }

  if (isLoading) {
    return <div>데이터 로딩중입니다 ...</div>
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
