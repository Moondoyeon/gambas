import DiaryItem from './DiaryItem';

const DiaryList = ({lists}) => {
  return (
    <div className='Diarylist'>
      {lists.map((el) => (
        <DiaryItem key={el.id} {...el}></DiaryItem>
      ))}
    </div>
  )
}

export default DiaryList;