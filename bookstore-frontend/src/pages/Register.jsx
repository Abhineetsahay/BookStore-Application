import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await axios.post("http://localhost:8080/api/auth/register", {
      username,
      password,
    });

    localStorage.setItem("token", res.data);
    console.log(res.data);
    // window.location.href = "/login";
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Login</button>
    </div>
  );
}

export default Register;