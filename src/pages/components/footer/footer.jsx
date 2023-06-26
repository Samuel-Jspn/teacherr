import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Mentions Légales</a>
            </li>
          </ul>
        </div>
        
        <div className="copyright">
          <p>2023 Copyright &copy; : Teacherr</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
