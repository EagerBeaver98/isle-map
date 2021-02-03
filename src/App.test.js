import { render, screen } from '@testing-library/react';
import App from './App';

test('renders new title', () => {
  render(<App />);
  const element = screen.getByText("Isle Map");
  expect(element).toBeInTheDocument();
});
