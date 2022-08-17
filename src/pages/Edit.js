import { useNavigate, useParams } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useEffect, useState } from "react";
import DiaryEditor from "../components/DiaryEditor";
import axios from "axios";

const Edit = ({lists}) => {
  const [originData, setOriginData] =useState();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> {
    if(lists.length) {
      const targetDiary = lists.find(
        (el) => parseInt(el.id) === parseInt(id)
      );
      if(!targetDiary) {
        navigate('/list', {replace:true}) //뒤로가기못하게
      } else {
        setOriginData(targetDiary);
      }
    }
  },[id, lists])
  const handleDeleteClick = () => {
    navigate('/list');
    window.location.reload();
    axios.delete(`http://localhost:3001/lists/${originData.id}`)
    .then((res) => {
      console.log('삭제');
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div>
      <MyHeader 
        headText={'수정'}
        leftChild={<MyButton text={'뒤로가기'} onClick={()=>navigate(-1)}/>}
        rightChild={<MyButton text={'삭제'} onClick={handleDeleteClick}/>}
        />  
      <>{originData && <DiaryEditor originData={originData} isEdit={true}/>}</>
    </div>
  );
};

export default Edit;