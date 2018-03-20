import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      //recieve projects from app.js
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return(
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
      <h3>Todo list</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos:PropTypes.array,
}﻿


export default Todos;
