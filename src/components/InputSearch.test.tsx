
import { render, screen, fireEvent } from '@testing-library/react';
import InputSearch from './InputSearch';

describe('InputSearch component', () => {
  it('deve renderizar o input corretamente', () => {
    const setDataSearch = jest.fn();
    render(<InputSearch dataSearch="" setDataSearch={setDataSearch} />);

    const input = screen.getByPlaceholderText(/busque um personagem pelo nome/i);
    expect(input).toBeInTheDocument();
  });

  it('deve chamar setDataSearch quando o usuário digitar', () => {
    const setDataSearch = jest.fn();
    render(<InputSearch dataSearch="" setDataSearch={setDataSearch} />);

    const input = screen.getByPlaceholderText(/busque um personagem pelo nome/i);

    fireEvent.change(input, { target: { value: 'Luke Skywalker' } });

    expect(setDataSearch).toHaveBeenCalledWith('Luke Skywalker');
  });
});
