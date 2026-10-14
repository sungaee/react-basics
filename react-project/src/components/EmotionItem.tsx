import './EmotionItem.css'
import { getEmotionImage } from '../util/get-emotion-image'

interface EmotionItemProps {
  emotionId: number
  emotionName: string
  isSelected: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}: EmotionItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ''}`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  )
}
export default EmotionItem
