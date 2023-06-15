const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/17123250/pexels-photo-17123250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/17123250/pexels-photo-17123250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
