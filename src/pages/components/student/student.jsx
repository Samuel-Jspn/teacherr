import React from "react";
import "./student.css";

const Student = ({ title, level, description }) => {
    return (
        <div className='Sconteneur'>
            <form action="" method="post" className="studentForm">
                <div id="entete">
                    <h1 className="title_student">{title}</h1>
                </div>
                <div className='Sblock'>
                    <div className="Sinfos">
                        <div>{level}</div>
                        <p className="Sinfo-description">{description}</p>
                    </div>
                    <div className="Sbutton-container">
                        <button className="Sbutton">
                            Accepter rdv
                        </button>
                        <button className="Sbutton">
                            Refuser rdv
                        </button>
                    </div>
                </div>
            </form>
        </div>  
    );
};

export default Student;