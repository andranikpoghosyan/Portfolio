import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";
import "./Home.scss";
import "../../App.scss";

export default function Home({ users, deleteUser }) {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="info">
        <button onClick={() => navigate(ROUTES.ADDUSER)}>Add User</button>
        <p>Users:{users.length} </p>
      </div>

      <table>
        <tr className="title">
          <td>ID</td>
          <td>FIRST NAME</td>
          <td>LAST NAME</td>
          <td>EMAIL</td>
          <td>PASSWORD</td>
          <td></td>
        </tr>

        {users.map((elem,index) => {
          return (
            <tr className="title" key={index}>
              <td>{elem.id}</td>
              <td>{elem.firstname}</td>
              <td>{elem.lastname}</td>
              <td>{elem.email}</td>
              <td className="passwordline">
                <span>
                  {elem.isShow
                    ? elem.password
                    : "*".repeat(elem.password.length)}
                </span>
              </td>
              <td>
                <span className="delbutt" onClick={() => deleteUser(elem.id)}>
                  X
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
