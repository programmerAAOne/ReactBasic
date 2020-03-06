import React, { Component } from 'react'



class TaskForm extends Component{

    state={
        titulo:'',
        descripcion:''
    }

    OnSubmit = (evento) =>{
        this.props.addTaks(this.state.titulo,this.state.descripcion);
       console.log(this.state)
            evento.preventDefault();
    }

    CargarTexto= (evento)=>{
        console.log(evento.target.name,evento.target.value)
        this.setState({
            
            [evento.target.name]:evento.target.value
        })
    }
    render(){
          
        return(

            <form onSubmit={this.OnSubmit}>
                <input type="Text"
                 name="titulo"
                 placeholder="Escribir la tarea deseada"
                 onChange={this.CargarTexto} 
                 value={this.state.titulo}/>
              <br/>
              <br/>
                <textarea 
                name="descripcion"
                placeholder="Escribe una descripcion"
                 onChange={this.CargarTexto}
                 value={this.state.descripcion}
                
                 />
                <br/>
                <br/>
               <input type="submit"/>
              </form>
        )
    }
}

export default TaskForm