import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";


const Diary = () => {
  const [data, setData] =useState([]);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://gambas-emotion-basket.herokuapp.com/api/lists/${id}`)
    .then((res) => {
      setData(res.data);
    })
  },[id])

  return (
    <div className="DiaryDetail">
      <MyHeader 
        headText={data.title}
        leftChild={<MyButton text={'뒤로가기'} onClick={() => navigate(-1)}/>}
        rightChild={<MyButton text={'수정'} onClick={()=> navigate(`/edit/${id}`)}/>}
        />
      <div className="DiaryDetail_infowrapper">
        <img alt="tagcolor" src={process.env.PUBLIC_URL + `/assets/tag${data.tag}.png`}/>
        <span>{data.date}</span>
      </div>
      <div className="DiaryDetail_contentwrapper">
        <div className="DiaryDetail_content">{data.content}</div>
      </div>
      
    </div>
  );
};

export default Diary;