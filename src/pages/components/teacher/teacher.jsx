import React from "react";
import "./teacher.css";
import anonymous from "../../assets/anonymous.jpg";
import Popups from "../Popup/Popups.jsx";

const Teacher = ({ title, level, description }) => {
    return (
        <div className='Tconteneur'>
            <form action="" method="post" className="teacherForm">
                <div id="entete">
                    <img className="Tprofile-picture" src={anonymous} />
                    <h1 className="title_teacher">{title}</h1>
                </div>
                <div className='Tblock'>
                    <div className="Tinfos">
                        <div>{level}</div>
                        <p className="Tinfo-description">{description}</p>
                    </div>
                    <div className="Tbutton-container">
                        <button className="Tbutton">
                            <Popups />
                        </button>
                    </div>
                </div>
            </form>
        </div>  
    );
};

export default Teacher;