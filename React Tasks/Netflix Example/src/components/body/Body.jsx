import React from "react";
import { BiChevronRight } from "react-icons/bi";
import "./Body.scss";

export default function Body() {
  return (
    <div className="Body">
      <div className="title">
        <h1>Unlimited movies, TV shows, and more</h1>
      </div>
      <div className="infodiv">
        <h3>Watch anywhere. Cancel anytime.</h3>
      </div>
      <div className="infodiv2">
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
      </div>

      <form>
        <input
          type="email"
          minLength="5"
          maxLength="50"
          placeholder="Email Address"
        />
        <button>
          Get Started <BiChevronRight style={{ fontSize: "40px" }} />
        </button>
      </form>
    </div>
  );
}
