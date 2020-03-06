import React, { Component } from 'react'
import exerciseImg from '../../images/ejercicio.png'
import './card.css'

console.log(Tareas);
class Card extends Component {

  
    changeState =() =>{
        this.setState({vista: !this.state.vista})
    }
    render() {
        if(this.state.vista){
            return (

                <div className="contenedor">
                    <h1> {this.props.Title}</h1>
                    <h2>{this.props.Subtitle}</h2>
                    <button onClick={this.changeState}>Cambiar estado</button>
                </div>     
            );
        }
        else{
            return(
                <div>
                    <h1>No se puede mostrar elementos</h1>
                    <button onClick={this.changeState}>Cambiar Estado</button>
                </div>
            )
        }
     


    }

}
export default Card