import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  render(<App />);
  const element = screen.getByText("The Isle Map");
  expect(element).toBeInTheDocument();
  const map = screen.getByAltText('map');
  expect(map).toBeInTheDocument();
});