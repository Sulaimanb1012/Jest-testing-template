import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont input veld', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    expect(input).toBeInTheDocument();
  });

  test('update input bij typen', () => {
    // TODO: Render SearchBar
    render(<SearchBar />);

    // TODO: Vind de input (Hint: screen.getByPlaceholderText('Zoek...'))
    const input = screen.getByPlaceholderText('Zoek...');

    // TODO: Type tekst in input (Hint: fireEvent.change(input, { target: { value: 'React' } }))
    fireEvent.change(input, { target: { value: 'React' } });

    // TODO: Check of input.value 'React' is
    expect(input.value).toBe('React');

    // Deze test faalt! Vervang met je eigen test
    // expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('toont zoekterm onder de input', () => {
    // TODO: Render SearchBar
    render(<SearchBar />);

    // TODO: Type 'Jest' in de input
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'Jest' } });

    // TODO: Check of "Zoeken naar: Jest" op het scherm staat
    const searchTerm = screen.getByText('Zoeken naar: Jest');
    expect(searchTerm).toBeInTheDocument();

    // expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('toont wissen button als er tekst is', () => {
    // TODO: Render SearchBar
    render(<SearchBar />);

    // TODO: Type tekst in input
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'Test' } });

    // TODO: Check of button met tekst "Wissen" verschijnt
    const clearButton = screen.getByText('Wissen');
    expect(clearButton).toBeInTheDocument();

    // expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

  test('wissen button maakt input leeg', () => {
    // TODO: Render SearchBar
    render(<SearchBar />);

    // TODO: Type tekst in input
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'Test' } });

    // TODO: Klik op "Wissen" button
    const clearButton = screen.getByText('Wissen');
    fireEvent.click(clearButton);

    // TODO: Check of input leeg is (value = '')
    expect(input.value).toBe('');

    // expect(true).toBe(false); // Deze test faalt! Vervang met je eigen test
  });

});