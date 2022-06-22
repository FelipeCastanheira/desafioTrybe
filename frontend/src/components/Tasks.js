import React from 'react';
import Title from './Title';
import Type from './Type';

class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks = async () => {
    this.setState({ tasks: [] }); // Chamar API
  };

  handleDestroy = async (id) => {
    console.log(id); // Deletar por API
    this.getTasks();
  };

  render() {
    const { tasks } = this.state;
    return (
      <main>
        <div>Ordenar</div>
        <div>Inserir</div>
        <section>
          { tasks.map(({ id, title, date, type }) => (
            <div key={ id }>
              <Title title={ title } />
              <h5>{ date }</h5>
              <Type id={ id } type={ type } />
              <button type="button" onClick={ () => handleDestroy(id) }>X</button>
            </div>
          )) }
        </section>
      </main>
    );
  }
}

export default Tasks;
