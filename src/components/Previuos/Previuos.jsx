// Global
import React from "react";

// Components
import Button from "../UI/Button/Button";

// Styles
import "./Previuos.less";

const Previuos = () => {
  return (
    <div className="previuos">
      <div className="previuos-container">
        <h1>NICE AND FRIENDLY WORLD OF WARCRAFT BOOSTING SERVICE</h1>
        <p>
          <strong>Join nice-boost</strong>, upgrade your account and enjoy the
          game with us. <br/>Simple, fast and safe
        </p>
        <Button onClick={() => console.log()} content="Get services now" />
      </div>
    </div>
  );
};

export default Previuos;
