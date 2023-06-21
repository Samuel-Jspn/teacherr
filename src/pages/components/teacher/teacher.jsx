import React, { useState, useEffect } from "react";
import "./teacher.css";
import anonymous from "../../assets/anonymous.jpg";

import axios from 'axios';


const Teacher = ({ title, level, description }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/mongoDataTeacher',)
        .then((response) => {
            setData(response.data);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <>
        {data.map((item) => (
        <div className='conteneur' key={item._id}>
            <form action="" method="post" className="teacherForm">
                <div id="entete">
                    <img className="profile-picture" src={anonymous} />
                    <h1 className="title_teacher">Professeur en {item.subject}</h1>
                </div>
                <div className='block'>
                    <div className="infos">
                        <div>{item.level}</div>
                        <p className="info-description">{item.description}</p>
                    </div>
                    <div className="button-container">
                        <button className="button">
                            Prendre rdv
                        </button>
                    </div>
                </div>
            </form>
        </div>  
        ))}
    </>
    );
};

export default Teacher;