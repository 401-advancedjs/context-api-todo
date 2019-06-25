import React from "react";
import Counter from "../counter/counter.js";
import { When } from "../if";
import { RefactorContext } from '../context/context.js';

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
            <form onSubmit={ event => this.context.addItem(event) }>
              <input
                placeholder="Add To Do List Item"
                onChange={ event => this.context.handleInputChange(event) }
              />
            </form>
          </div>

          <div>
            <ul>
              { this.context.todoList &&
                this.context.todoList.map(item => (
                  <li
                    className={`complete-${item.complete.toString()}`}
                    key={item.id}
                  >
                    <span onClick={() => this.context.toggleComplete(item.id)}>
                      {item.text}
                    </span>
                    <button onClick={() => this.context.toggleEdit(item.id)}>
                      edit
                    </button>
                    <When condition={ this.context.editing === item.id }>
                      <form onSubmit={ event => this.context.updateItem(event) }>
                        <input
                          onChange={ event => this.context.handleInputChange(event) }
                          id={ item.id }
                          complete={ item.complete }
                          defaultValue={ item.text }
                        />
                      </form>
                    </When>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;
