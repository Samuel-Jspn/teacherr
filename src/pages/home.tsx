import React from "react";
import {Link} from "react-router-dom"
import '../styles/home/home.css';

function home() {   
    return (
        <body>
            <div className="all">
                <form action="" method="post" className="">
                    <h1 className="title">Professeur en Maths</h1>
                    <div className='block'>
                        <div className="infos">
                            <div className='champ'>
                                Niveau Bac+2
                            </div>
                            <div className='champ'>
                                Description de la méthode de travail, des chapitres... 
                            </div>
                        </div>
                        <div className="centered-button-container">
                            <button className="centered-button">
                                Prendre rdv
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default home;