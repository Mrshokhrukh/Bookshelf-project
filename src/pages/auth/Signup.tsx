import React, { useState } from "react";
import { useSignupMutation } from "../../redux/registerSlice";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const [userData, setUserData] = useState({ name: "", email: "", key: "", secret: "" });
  const [register] = useSignupMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let response = await register(userData);
      console.log(response);
    } catch (error) {
      console.log("Registration failed:", error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
        />
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
        <button type="submit">signup</button>
      </form>
    </div>
  );
};
export default Signup;
