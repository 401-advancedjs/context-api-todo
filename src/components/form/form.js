import React from 'react';

export default class Form extends React.Component{
  render(){
    return(
      <form onSubmit={ event => this.props.handleSubmit(event) }>
      <input
        placeholder="Add To Do List Item"
        onChange={ event => this.props.handleInputChange(event) }
      />
    </form>
    );
  }
}