import React, { useState, useEffect } from "react";
import "./teacher.css";
import anonymous from "../../assets/anonymous.jpg";

import axios from 'axios';


const Teacher = ({ title, level, description }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/mongoData',)
        .then((response) => {
            setData(response.data);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

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
                <div>
      {/* Affichez les données récupérées */}
      {data.map((item) => (
        <div>
          {/* Affichez les propriétés de chaque élément */}
          <p>{item.level}</p>
        </div>
      ))}
    </div>
            </form>
        </div>  
    );
};

export default Teacher;