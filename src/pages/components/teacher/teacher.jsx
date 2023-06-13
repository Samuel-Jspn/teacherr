import React from "react";
import "./teacher.css";
import anonymous from "../../assets/anonymous.jpg";

const Teacher = ({ title, level, description }) => {
    return (
        <form action="" method="post" className="">
            <h1 className="title">{title}</h1>
            <div className='block'>
                <div className="infos">
                    <div>{level}</div>
                    <div>{description}</div>
                </div>
                <div className="button-container">
                    <button className="button">
                        Prendre rdv
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Teacher;