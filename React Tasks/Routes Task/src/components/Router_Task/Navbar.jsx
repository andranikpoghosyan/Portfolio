import React from "react";

import ROUTES from "../Router_Task/routes/routes";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ADDUSER}>Add User</Link>
            </li>
            <li>
              <Link to={ROUTES.BLOG}>Blog</Link>
            </li>
            <li>
              <Link to={ROUTES.POSTS}>Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
