import React from 'react';
import { put } from '../helpers/apiFunctions';

class Type extends React.Component {
  constructor() {
    super();
    this.state = {
      type: this.props.type,
    };
  }
  handleChange = async ({ value }) => {
    this.setState({ type: value }); // update by API
    await put(this.props.id);
  };
  render() {
    const { type } = this.state;
    return (
      <select onChange={ async ({ target }) => await this.handleChange(target) } value={ type }>
        <option value="todo" >Pendente</option>
        <option value="doing" >Em Andamento</option>
        <option value="done" >Pronto</option>
      </select>
    );
  }
}

export default Type;
