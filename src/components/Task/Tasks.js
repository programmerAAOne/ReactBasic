import React, { Component } from 'react'
import Task from './Task'
class Tasks extends Component{
    render(){
        return(
            this.props.Tareas.map(task=> 
            <Task
             Tarea={task} 
             key={task.id} 
             deleteTask={this.props.deleteTask}
             onChengeCheck={this.props.onChengeCheck}
             />)
         
        );
    }
}
export default Tasks