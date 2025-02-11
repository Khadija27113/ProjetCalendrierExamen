import React, { useState } from "react";
import "./styles/Login.css"; 

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Role:", role);

  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="directeur_etudes">Directeur des études</option>
          <option value="chef_departement">Chef département</option>
          <option value="administrateur">Administrateur</option>
        </select>
        <button type="submit">Login</button>
      </form>
      <div className="footer">
        <p></p>
      </div>
    </div>
  );
};

export default LoginForm;