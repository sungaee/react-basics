export interface Diary {
  id: number
  createdDate: number
  emotionId: number
  content: string
}

export interface DiaryInput {
  createdDate: Date
  emotionId: number
  content: string
}
