import { useNavigate } from 'react-router-dom';
import MyButton from '../components/MyButton';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="Home_top">
        그대,
        <br/>
        오늘은 또
        <br/>
        어떤 하루를 보냈나요
      </div>
      <div className='Home_bottom'>
      <div className="Home_btn_wrapper">
        <MyButton text={'감정쓰기'} onClick={()=> navigate('/new')} type={"newPost"}/>
        <MyButton text={'쓴글보기'} onClick={()=> navigate('/list')} type={"read"}/>
      </div>
      </div>
    </div>
  );
};

export default Home;