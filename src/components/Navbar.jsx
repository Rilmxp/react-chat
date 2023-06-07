const Navbar = () => {
  return (
    <div className="navbar">
      <span className="log">Lama chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/17123250/pexels-photo-17123250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
