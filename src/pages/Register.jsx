import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Add from "../img/AddAvatar.png";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr = true;
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <span className="logo">Lama Chat</span>
          <span className="title">Register</span>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
