import React from "react";

import "./Header.scss";

export default function Header() {
  return (
    <div>
      <header>
        <div className="imagediv">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflixlogo"
          />
        </div>

        <div className="inputsdiv">
          <div className="selectdiv">
            <select name="languages">
              <option value="english">English</option>
              <option value="russian">Russian</option>
            </select>
          </div>

          <div className="logindiv">
            <input type="submit" value="Sign In" />
          </div>
        </div>
      </header>
    </div>
  );
}
