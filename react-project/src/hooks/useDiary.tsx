import { useContext, useState, useEffect } from 'react'
import { DiaryStateContext } from '../App'
import { useNavigate } from 'react-router-dom'
import type { DiaryEntry } from '../types'

const useDiary = (id: string) => {
  const data = useContext(DiaryStateContext)
  const nav = useNavigate()
  const [curDiaryItem, setCurDiaryItem] = useState<DiaryEntry>()

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id))
    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.')
      nav('/', { replace: true })
      return
    }
    setCurDiaryItem(currentDiaryItem)
  }, [id])
  return curDiaryItem
}
export default useDiary
