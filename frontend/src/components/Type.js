import React from 'react';

class Type extends React.Component {
  constructor() {
    super();
    this.state = {
      type: this.props.type,
    };
  }
  handleChange = ({ value }) => {
    this.setState({ type: value }); // update by API
  };
  render() {
    const { type } = this.state;
    return (
      <select onChange={ ({ target }) => handleChange(target) } value={ type }>
        <option value="todo" >Pendente</option>
        <option value="doing" >Em Andamento</option>
        <option value="done" >Pronto</option>
      </select>
    );
  }
}

export default Type;
