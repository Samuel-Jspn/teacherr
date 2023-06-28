import React from "react";
import "./footer.css";
import Modal from "../Modal/modal.jsx";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-links">
          <ul>
            <li>
              <a>
                <Modal />
              </a>
            </li>
            <li>
              <a href="/mentions">Mentions Légales</a>
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
