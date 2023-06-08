import React from "react";
import {Link} from "react-router-dom"
import '../styles/home/home.css';

function home() {   
    return (
        <body>
            <div className="all">
                <div className='block'>
                    <form action="" method="post" className="">
                        <h1 className="title">Professeur en Maths</h1>
                            <div className='champ'>
                                Niveau Bac+2
                            </div>
                            <div className='champ'>
                                Description de la méthode de travail, des chapitres... 
                            </div>
                            <button className='button'>
                            <div className='rdv'>
                                <p>Prendre<br /> rendez-vous</p>
                            </div>
                        </button>
                    </form>
                   </div>
               </div>
        </body>
    );
}

export default home;