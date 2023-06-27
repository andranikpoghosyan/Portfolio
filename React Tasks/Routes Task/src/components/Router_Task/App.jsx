import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import ROUTES from "./routes/routes";
import Home from "./pages/home/Home";
import AddUser from "./pages/addUser/AddUser";
import Blog from "./pages/blog/Blog";
import Posts from "./pages/posts/Posts";

export default function App() {
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    const copy = users.filter((user) => user.id !== id);
    setUsers(copy);
  };

  const addusers = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <Routes>
        <Route element={<Layouts />}>
          <Route
            index
            path={ROUTES.HOME}
            element={
              <Home deleteUser={deleteUser} users={users} />
            }
          />
          <Route
            path={ROUTES.ADDUSER}
            element={<AddUser addusers={addusers} />}
          />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.POSTS} element={<Posts />} />
        </Route>
      </Routes>
    </div>
  );
}
