import React from "react";
import "./teacher.css";
import anonymous from "../../assets/anonymous.jpg";

const Teacher = ({ title, level, description }) => {
    return (
        <div className='conteneur'>
            <form action="" method="post" className="teacherForm">
                <div id="entete">
                    <img className="profile-picture" src={anonymous} />
                    <h1 className="title_teacher">{title}</h1>
                </div>
                <div className='block'>
                    <div className="infos">
                        <div>{level}</div>
                        <p className="info-description">{description}</p>
                    </div>
                    <div className="button-container">
                        <button className="button">
                            Prendre rdv
                        </button>
                    </div>
                </div>
            </form>
        </div>  
    );
};

export default Teacher;