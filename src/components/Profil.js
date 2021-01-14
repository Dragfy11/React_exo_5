import {Component} from "react";

class Profil extends Component {

    render(){
      
      const descrip = this.props.description ? (`Description: ${this.props.description}`) : (`pas de description`)
    return (
      <div>
        <h1 className="prenom">Prenom: {this.props.prenom}</h1>
        <h2 className="famille">Nom: {this.props.famille}</h2>
        <p className="description">Description: {descrip}</p>
      </div>
    );
  }
}
  
  export default Profil;