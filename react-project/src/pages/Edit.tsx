import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Editor from '../components/Editor'
import Button from '../components/Button'
import useDiary from '../hooks/useDiary' 

const Edit = () => {
  const params = useParams()
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext)
    const curDiaryItem = useDiary(params.id)

  const nav = useNavigate()
  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      //일기 삭제 로직
      onDelete(params.id)
      nav('/', { replace: true })
    }
  }

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정할까요?')) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      )
      nav('/', { replace: true })
    }
  }
  return (
    <div>
      <Header
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
        title={'일기 수정하기'}
        rightChild={
          <Button onClick={onClickDelete} text={'삭제하기'} type={'NEGATIVE'} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  )
}
export default Edit
