import React from 'react';
import { When } from "../if";


export default class List extends React.Component{
  render(){
    return(
      <ul>
      { this.props.todoList &&
        this.props.todoList.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item.id}
          >
            <span onClick={() => this.props.toggleComplete(item.id)}>
              {item.text}
            </span>
            <button onClick={() => this.props.toggleEdit(item.id)}>
              edit
            </button>
            <When condition={ this.props.editing === item.id }>
              <form onSubmit={ event => this.props.updateItem(event) }>
                <input
                  onChange={ event => this.props.handleInputChange(event) }
                  id={ item.id }
                  complete={ item.complete }
                  defaultValue={ item.text }
                />
              </form>
            </When>
          </li>
        ))}
    </ul>
    );
  }
}