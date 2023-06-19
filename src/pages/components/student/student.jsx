import React from "react";
import "./student.css";

const Student = ({ title, level, description }) => {
    return (
        <div className='conteneur'>
            <form action="" method="post" className="teacherForm">
                <div id="entete">
                    <h1 className="title_teacher">{title}</h1>
                </div>
                <div className='block'>
                    <div className="infos">
                        <div>{level}</div>
                        <p className="info-description">{description}</p>
                    </div>
                    <div className="button-container">
                        <button className="button">
                            Accepter rdv
                        </button>
                        <button className="button">
                            Refuser rdv
                        </button>
                    </div>
                </div>
            </form>
        </div>  
    );
};

export default Student;