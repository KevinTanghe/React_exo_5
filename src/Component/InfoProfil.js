import React from 'react'

const InfoProfil = ({prenom, nom, children}) => {

    if (children) {
        return(
        <div>
            <h1>Prénom : {prenom} </h1>
            <h2>Nom : {nom}</h2>
            <p> Description : {children}</p>
        </div>
        )
    } else {
        return (
            <div>
                <h1>Prénom : {prenom} </h1>
                <h2>Nom : {nom}</h2>
                <p> Description : Pas de description</p>
            </div>
        )
    }
}


export default InfoProfil;