import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div classNmae='ma4 mt0'>
      <Tilt
        glareEnable={true}
        style={{
          height: "150px",
          width: "150px",
        }}
      >
        <div className='pa3'>
          <img style={{ paddingTop: "5px" }} src='logo.png' alt='logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
