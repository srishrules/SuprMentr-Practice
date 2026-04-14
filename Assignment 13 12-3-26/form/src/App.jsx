import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const namePattern = /^[A-Za-z ]+$/;
    if (!name.match(namePattern)) {
      setMessage("Name should contain only letters!");
      setIsError(true);
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      setMessage("Invalid email format!");
      setIsError(true);
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters!");
      setIsError(true);
      return;
    }

    setMessage("Form submitted successfully!");
    setIsError(false);
  };

  return (
    <div className="page">
      <div className="form-container">

        <h2 style={{ color: "black" }}>Sign-up Form</h2>

        <form onSubmit={handleSubmit}>
          <input style={{ color: "black" }}
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input style={{ color: "black" }}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input style={{ color: "black" }}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>

        {message && (
          <p className={isError ? "error" : "success"}>
            {message}
          </p>
        )}
      </div>
    </div>

  );
}

export default Signup;