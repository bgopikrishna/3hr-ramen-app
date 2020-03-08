/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Made with &nbsp;<span style={{ color: "#D1452B" }}>❤️</span> &nbsp; and
        &nbsp;
        <span style={{ color: "#61DAFB" }}>⚛️</span>
      </span>
      &nbsp; | &nbsp;
      <span>
        Coded By{" "}
        <a
          href="https://bgopikrishna.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gopi Krishna
        </a>
      </span>
      &nbsp; | &nbsp;
      <span>
        <a
          href="https://github.com/bgopikrishna/3hr-ramen-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </span>
    </footer>
  );
};

export default Footer;