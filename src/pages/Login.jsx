const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form action="">
          <span className="logo">Lama Chat</span>
          <span className="title">Register</span>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
