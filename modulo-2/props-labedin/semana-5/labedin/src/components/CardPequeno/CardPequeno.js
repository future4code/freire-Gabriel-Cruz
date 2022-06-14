import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.dado }</h4>
                <p>{ props.informacao }</p>
            </div>
        </div>
    )
}

export default CardGrande;