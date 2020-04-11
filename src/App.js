import React, { Component } from 'react';
import { BrowserRouter as Router,Route  } from 'react-router-dom'
import './App.css';
import Todos from './components/todos.js'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid/v4'
import about from './components/pages/about'
//import axios from 'axios'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with boss', 
        completed: false
      }
    ]
  }
  /*state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res=> this.setState({todos:res.data}))
  }*/

  //Toggle complete
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo =>{
        if(todo.id===id)
        {
          todo.completed = !todo.completed
        }
        return todo
    })})
  }
  delTodo = (id)=>{
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id!==id)]})
  }

  /*delTodo = (id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>    this.setState({ todos:[...this.state.todos.filter(todo => todo.id!==id)]}))
    
  }*/

  addTodo = (title)=>{
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos,newTodo]})
  }
  /*addTodo = (title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      //id: this.state.todos.length+1,
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos,res.data]}));
  }*/
  render(){
    //console.log(this.state.todos);
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path = "/" render={props=>(
            <React.Fragment>
              <AddTodo addTodo = {this.addTodo} />
              <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path = "/about" component={about}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
