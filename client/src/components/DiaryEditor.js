import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const getStringDate = (date) => {
  return date.toISOString().slice(0,10);
}

const DiaryEditor = ({originData, isEdit}) => {
  const navigate = useNavigate(); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(getStringDate(new Date()));
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/list');
    const editPost = {
      date,
      title,
      content,
    };
    const newPost = {
      id: Date.now,
      date,
      "tag":Math.floor(Math.random() * 5),
      title,
      content,
    };
    if(isEdit && e.type==='submit') {
      axios.patch(`http://localhost:3001/lists/${originData.id}`, editPost)
      .then((msg) => {
        console.log(msg);
      });
    } else {
      axios.post(`http://localhost:3001/lists`, newPost)
      .then((msg) => {
        console.log(msg);
      })
    }
    window.location.reload(); //이거말고 다르게 할순없낭
  }
  useEffect(()=> {
    if(isEdit) {
      setDate(originData.date);
      setTitle(originData.title);
      setContent(originData.content);
    }
  }, [isEdit, originData]);
  return (
    <div className="diaryeditor">
      <form onSubmit={handleSubmit}>
        <section>
          <span className='input_box'>
            <input
              className="input_date"
              value={date}
              type="date"
              onChange={(e) => {setDate(e.target.value)}}>
            </input>
          </span>
        </section>
        <section>
            <div className="input_box title_wrapper">
              <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
              />
            </div>
            <div className="input_box content_wrapper">
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용"
              ></textarea>
            </div>
        </section>
        <section>
          <MyButton text={'취소'} type={'cancle'}  onClick={()=>navigate('/list')}/>
          <MyButton text={'캡슐화'} type={'post'} />
        </section>
      </form>
    </div>
  )
}

export default DiaryEditor;