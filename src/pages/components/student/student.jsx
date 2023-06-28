import React, { useState, useEffect } from "react";
import "./student.css";

import axios from 'axios';

const Student = ({ title, level, description }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/dataStudent',)
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
        <div className='Sconteneur' key={item.id}>
            <form action="" method="post" className="studentForm">
                <div id="entete">
                    <h1 className="title_student">{item.nom} {item.prenom}</h1>
                </div>
                <div className='Sblock'>
                    <div className="Sinfos">
                        <div>{item.level}</div>
                        <p className="Sinfo-description">{item.description}</p>
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
        ))}
    </>  
    );
};

export default Student;