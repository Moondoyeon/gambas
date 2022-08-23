const MyButton = ({text, type, onClick}) => {
  const btnType = ['newPost', 'read', 'post', 'default','cancle'].includes(type) ? type : 'default';
  return (
    <button 
      className={["MyButton", `MyButton_${btnType}`].join(" ")} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

MyButton.defaultProps = {
  name: 'default',
};


export default MyButton;