import React, {useState, useEffect} from "react";
import "../App.css";



function Perfil(){

    const [profile, setProfile]=useState([])


    return (
        <div>
            <h3 className="tittlePerfil">Perfil</h3>
            <div className="card-perf-btn">
                <div className="card-perfs">

                </div>
                <div>
                    <button className="btn-prox-perf">Proximo Perfil</button>
                </div>
            </div>
        </div>

    );
}

export default Perfil;