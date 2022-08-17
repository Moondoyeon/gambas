import MyHeader from '../components/MyHeader';
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import DiaryList from "../components/DiaryList";

const List = ({lists}) => {
  const navigate = useNavigate();
  return (
    <div>
      <MyHeader 
        rightChild={<MyButton text={'감정쓰기'} type={'newPost'} onClick={() => navigate('/new')}/>}
        leftChild={<MyButton text={'뒤로가기'} onClick={() => navigate(-1)}/>}
      />
      <DiaryList lists={lists} />
    </div>
  );
};

export default List;