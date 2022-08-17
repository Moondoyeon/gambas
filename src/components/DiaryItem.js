import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({id, tag, title, date }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  }
  const goEdit = () => {
    navigate(`/edit/${id}`);
  }
  return (
    <div className="Diaryitem">
      <div onClick={goDetail} className="tag_img_wrapper">
        <img alt="tagcolor" src={process.env.PUBLIC_URL + `/assets/tag${tag}.png`}/>
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{date}</div>
        <div className="diary_title">{title}</div>
      </div>
      <div className="btn-wrapper">
        <MyButton text={'수정'} onClick={goEdit}/>
      </div>
    </div>
  )
}

export default DiaryItem;