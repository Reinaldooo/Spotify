import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
//
import "./Dashboard.scss";

export default function Dashboard({ children }) {
  return (
    <>
      <div className="dashboard" data-testid="dashboard">
        {children}
      </div>

      <footer className="footer">
        <a href="https://github.com/Reinaldooo"><AiOutlineGithub size="4rem" color="#bbb"/></a>
        <a href="https://www.linkedin.com/in/reinaldo-trindade/"><AiFillLinkedin size="4rem" color="#bbb"/></a>
      </footer>
    </>
  );
}
