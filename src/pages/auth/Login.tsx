import React, { useState } from "react";
import { useLoginMutation } from "../../redux/registerSlice";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [userData, setUserData] = useState({ email: "", key: "", secret: "" });
  const [login] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let result = await login(userData);
      console.log(result);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="key"
          placeholder="Key"
          value={userData.key}
          onChange={handleChange}
        />
        <input
          type="text"
          name="secret"
          placeholder="Secret"
          value={userData.secret}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
