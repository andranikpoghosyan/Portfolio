import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteById } from "./app/features/usersSlice";

import "./AppLesson.scss";

export default function App1() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers("https://jsonplaceholder.typicode.com/users"));
  }, []);

  return (
    <div>
      <button onClick={addedUser}>Add User</button>
      {users.map((elem) => {
        return (
          <React.Fragment key={elem.id}>
            <div className="box">
              <button onClick={() => dispatch(deleteById(elem.id))}>
                &#10006;
              </button>

              <h2>Name: {elem.name}</h2>
              <small>{elem.id}</small>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
