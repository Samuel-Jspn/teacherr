import React from 'react';
import {Link} from "react-router-dom"
import '../styles/connection/connection.css'

function connectionPage() {
    return (
        <body>
            <div className="all">
                <form action="" method="post" className="">
                    <h1 className="titre">Connexion</h1>
                        <div className="ChampRenseignemants">
                            <input type="email" placeholder='Adresse email'/>
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className='ChampRenseignemants'>
                            <input type="password" placeholder='Mot de passe'/>
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <button className='connection'>
                           <div className='connexion'>
                               <p>Je me connecte</p>
                               <i className='bx bx-right-arrow-alt'></i>
                           </div>
                       </button>
                       <Link to="/registration">
                           <div className="registration">
                               Nouveau sur la plateforme ? C'est par ici !
                           </div>
                       </Link>
                   </form>
               </div>
        </body>
    );

}

export default connectionPage