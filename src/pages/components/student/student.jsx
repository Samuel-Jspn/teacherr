import React, { useState, useEffect } from "react";
import "./student.css";

import axios from 'axios';

const Student = ({ title, level, description }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/mongoDataStudent',)
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
                    <h1 className="title_teacher">{item.nom} {item.prenom}</h1>
                </div>
                <div className='block'>
                    <div className="infos">
                        <div>{item.level}</div>
                        <p className="info-description">{item.description}</p>
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
        ))}
    </>  
    );
};

export default Student;