import React, { useState } from "react";

import "./App.scss";

export default function App() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const createUser = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        perspiciatis, exercitationem ad alias dolorem voluptates.
      </p>
      <form className="firstform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={createUser}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={createUser}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={createUser}
        />

        <select name="budget" onChange={createUser}>
          <option>What's your budget range?</option>
          <option>100$</option>
          <option>200$</option>
          <option>300$</option>
          <option>400$</option>
          <option>500$</option>
        </select>

        <input
          type="text"
          name="message"
          placeholder="Message"
          onChange={createUser}
        />

        <input type="submit" name="submit" value="SEND" />
      </form>

      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Budget</td>
          <td>Message</td>
        </tr>
        <tr>
          <td>{userData.name}</td>
          <td>{userData.email}</td>
          <td>{userData.phone}</td>
          <td>{userData.budget}</td>
          <td>{userData.message}</td>
        </tr>
      </table>
    </div>
  );
}
