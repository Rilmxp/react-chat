const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form action="">
          <span className="logo">Lama Chat</span>
          <span className="title">Register</span>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" />
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
