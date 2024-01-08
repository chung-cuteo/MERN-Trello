import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import mockData from '~/api/mock-data'

function index() {
  const { board } = mockData
  const { title, type } = board

  return (
    <>
      <BoardBar title={title} type={type} />
      <BoardContent board={board} />
    </>
  )
}

export default index
