import React, { Component } from 'react'

export default class Post extends Component {
async componentDidMount(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(res)
    }
    render() {
        return (
            <div>
                <h1>Publicaciones</h1>
            </div>
        )
    }
}
