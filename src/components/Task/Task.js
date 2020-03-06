import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Task extends Component {

    styleCompleted(){
        return {
            fontSize:'30px',
            color:this.props.Tarea.estado ? 'gray': 'blue'
    }
    }

    render(){
        const {Tarea}= this.props

        return(
          <div style={this.styleCompleted()}>
            
                 {Tarea.titulo}-
                 {Tarea.descripcion}- 
                 {Tarea.id}**
                 {Tarea.estado}
                 <input onChange={this.props.onChengeCheck.bind(this,Tarea.id)} type="checkbox"/>
                 <button onClick={this.props.deleteTask.bind(this, Tarea.id)}>Eliminar</button>
          </div>
        )
    }
}
Task.propTypes ={
    Tarea: PropTypes.object.isRequired
}
export default Task