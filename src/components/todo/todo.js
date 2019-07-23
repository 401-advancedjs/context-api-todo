import React from "react";
import { RefactorContext } from '../context/context.js';

import Counter from "../counter/counter.js";
import Form from '../form/form.js';
import List from '../list/list.js';

import "./todo.scss";

class ToDo extends React.Component {
  static contextType = RefactorContext;
  render() {
    return (
      <>
        <section className="todo">
          <div>
            <Counter count={ this.context.todoList.length } />
          </div>
          <div>
            <Form 
            handleSubmit={ this.context.addItem } 
            handleInputChange={ this.context.handleInputChange }
            />
          </div>
          <div>
            <List 
            todoList={ this.context.todoList } 
            toggleComplete={ this.context.toggleComplete }
            toggleEdit={ this.context.toggleEdit }
            editing={ this.context.editing }
            updateItem={ this.context.updateItem }
            handleInputChange={ this.context.handleInputChange }
             />
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;
