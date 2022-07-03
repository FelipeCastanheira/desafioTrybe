import React from 'react';
import { destroy, getAll, post } from '../helpers/apiFunctions';
import Title from './Title';
import Type from './Type';

class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTitle: '',
      isButtonDisabled: true,
      isLoading: false,
      sortBy: 'type',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks = async () => {
    // await getAll();
    this.setState({ tasks: await getAll() }); // Chamar API
  };

  handleChange({ target }) {
    this.setState({ newTitle: target.value }, () => {
      const MIN_LENGTH = 5;
      const { newTitle } = this.state;
      const invalidName = newTitle.length < MIN_LENGTH;
      this.setState({ isButtonDisabled: invalidName });
    });
  };

  handleAddTask = async (event) => {
    event.preventDefault();
    const { newTitle } = this.state;
    this.setState({ isLoading: true, newTitle: '' });
    await post({ title: newTitle });
    await this.getTasks();
    this.setState({ isLoading: false });
  };

  handleDestroy = async (id) => {
    await destroy(id);
    this.getTasks();
  };

  handleSort = (a, b) => {
    const { sortBy } = this.state;
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 1;
  } 

  render() {
    const { tasks, newTitle, isButtonDisabled, isLoading, sortBy } = this.state;
    return (
      <main>
        <form>
          <input
            type="text"
            value={ newTitle }
            name="newTitle"
            placeholder="Tarefa"
            data-testid="new-title"
            onChange={ this.handleChange }
          />
          <button
            disabled={ isButtonDisabled }
            type="button"
            data-testid="create-button"
            onClick={ this.handleAddTask }
          >Criar</button>
        </form>
        { isLoading && <h3>Carregando...</h3>}
        <select
          onChange={  ({ target }) => this.setState({ sortBy: target.value }) }
          value={ sortBy }
        >
          <option value="title" >Ordem alfabética</option>
          <option value="date" >Por data</option>
          <option value="type" >Por status</option>
        </select>
        <section>
          { tasks.sort(this.handleSort).map(({ id, title, date, type }) => (
            <div key={ title }>
              <Title title={ title } />
              <h5>{ date }</h5>
              <Type id={ id } type={ type } />
              <button type="button" onClick={ async () => await this.handleDestroy(id) }>
                X
              </button>
            </div>
          )) }
        </section>
      </main>
    );
  }
}

export default Tasks;
