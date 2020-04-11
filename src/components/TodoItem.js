import React, { Component } from 'react'
import propTypes from 'prop-types'


//we are adding props.markComplete beacuse state is in the app.js so we must climb the ladder by adding props

export class TodoItem extends Component {
    getStyle = ()=>{
            return{
                backgroundColor: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ? 'line-through':'none'
            }
        }
    
    render() {
        const {id,title} = this.props.todo  //structuring we can use id instead of this.props.todo.id
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type = "checkbox" onChange = {this.props.markComplete.bind(this,id)} /> {'  '}  
                    {title} 
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
    }
    /*const itemStyle = {
        backgroundColor: '#f4f4f4'      //this can be used for styling
    }*/
TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}
const btnStyle = {
    background : '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
