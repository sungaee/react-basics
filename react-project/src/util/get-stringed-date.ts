export const getStringedDate = (targetDate: Date | number) => {
  // 날짜 -> YYYY_MM-DD
  const d = new Date(targetDate)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const date = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${date}`
}
