import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  const navigate = useNavigate();
  
  return (
    <div className="newPost">
      <MyHeader 
        headText={'감정쓰기'}
        leftChild={<MyButton text={'뒤로가기'} onClick={()=>navigate(-1)}/>}
        />
      <DiaryEditor/>
    </div>
  );
};

export default New;