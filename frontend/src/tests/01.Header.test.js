import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('1 - Crie um componente chamado `Header`', () => {
  it('Será validado se o componente `<Header />` é renderizado', () => {
    render(<Header />);
  });
  
});
