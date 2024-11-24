import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Counter, Greeting, AlertButton } from './latihan';

describe('Latihan Components', () => {
  // 1. Memastikan nilai awal (default) counter adalah 0.
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    expect(countValue).toHaveTextContent('0');
  });

  // 2. Memastikan bahwa nilai counter bertambah +1 setiap kali tombol Increment ditekan.
  test('increments counter when Increment button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent('1');
  });

  // 3. Memastikan bahwa nilai counter berkurang -1 setiap kali tombol Decrement ditekan.
  test('decrements counter when Decrement button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent('-1');
  });

  // 4. Memastikan tombol Reset mengatur ulang nilai counter menjadi 0.
  test('resets counter when Reset button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(incrementButton); // Increment counter to 1
    fireEvent.click(resetButton); // Reset counter
    expect(countValue).toHaveTextContent('0');
  });

  // 5. Memastikan komponen Greeting menampilkan teks ucapan dengan nama yang diberikan.
  test('Greeting component displays the correct name', () => {
    const name = 'Nadia Arina Nabila Shofa';
    render(<Greeting name={name} />);
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent(`Hello, ${name}`);
  });

  // 6. Memastikan tombol AlertButton menampilkan alert dengan pesan yang sesuai ketika diklik.
  test('AlertButton triggers alert with correct message', () => {
    const alertMessage = 'Test alert message';
    window.alert = jest.fn(); // Mock alert function
    render(<AlertButton message={alertMessage} />);
    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);
    expect(window.alert).toHaveBeenCalledWith(alertMessage);
  });
});
