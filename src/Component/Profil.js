import React, { Component } from 'react'
import Info from "./InfoProfil";

export class Profil extends Component {
  render() {
    return (
      <div>
        <Info prenom="Nicolas" nom="Primo"> Un jeune et beau coach puissant mais nul sur lol</Info>
        <Info prenom="Martin" nom="Chimiste">DGssdgdgdsgdsgdg</Info>
        <Info prenom="Beyoncé" nom="Chanteuse">Bedsfdsgdhsfhdfhdhyohgfhcé</Info>
        <Info prenom="Ibrahim" nom="Ouassari"></Info>
      </div>
    )
  }
}

export default Profil
