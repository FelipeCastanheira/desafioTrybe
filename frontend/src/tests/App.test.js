import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// const QTD_LINKS = 3;
const taskText = 'Fazer XYZ';

test('Teste se a aplicação contém um header.', () => {
  render(<App />);
  const heading1 = screen.getByRole('heading', { level: 1 });
  expect(heading1).toHaveTextContent(/Task List/i);
});

test('Teste se é possível adicionar uma tarefa', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Tarefa/i);
  userEvent.type(input, taskText);
  const createBtn = screen.getByTestId('create-button');
  expect(createBtn).not.toBeDisabled();
});

test('Teste se é possível visualizar uma tarefa', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Tarefa/i);
  userEvent.type(input, taskText);
  const createBtn = screen.getByTestId('create-button');
  userEvent.click(createBtn);
  const firstTask = await screen.findByText(taskText);
  expect(firstTask).toBeInTheDocument();
});
