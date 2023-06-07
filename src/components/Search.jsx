const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/17123250/pexels-photo-17123250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
