import React, { Component } from 'react'

import '../Card/card.css'
import Tasks from '../Task/Tasks'
import Tareas from '../../dataBase/database.json'
import TaskForm from '../Task/TaskForm'
import moduleName from 'module'
class Home extends Component{
    state = {
        vista: true,
        Tareas:Tareas
    }

    addTaks = (titulo,descripcion) =>
    {
      const newTask ={
          titulo:titulo,
          descripcion:descripcion,
          id: this.state.Tareas.length
      }

        this.setState({
          Tareas:[...this.state.Tareas,newTask]
        })
    }

    deleteTasks =(id)=>
    {
    const newDelete= this.state.Tareas.filter(Tarea => Tarea.id !== id);
    this.setState({
      Tareas:newDelete
    })
    console.log(newDelete);
    }

    onChengeCheck =(id)=>
    {
     const newTaksState= this.state.Tareas.map(Tarea => {
        if(Tarea.id === id){
          Tarea.estado = !Tarea.estado

        }
        return Tarea;
      })
      this.setState({
        Tareas:newTaksState
      })
    }

    render(){

        return(
      <div >
             {/*        <Card Title="Bienvenidos" Subtitle="Esto es el poder de React"/> */}
      <TaskForm addTaks={this.addTaks}/>
       <Tasks Tareas={this.state.Tareas} deleteTask={this.deleteTasks} onChengeCheck={this.onChengeCheck}/>
      </div>
           
        )
    }
}

export default Home