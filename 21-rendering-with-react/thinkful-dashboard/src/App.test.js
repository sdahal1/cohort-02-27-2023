import { render, screen } from '@testing-library/react';
import App from './App';

describe('tests about the App', () => {
  test('app renders without errors', () => {
    render(<App />);
  });
  test('says that Thinkful is the coolest school', () => {
    render(<App />);
    let coolestSchool = screen.getByText(/COOLEST school/i);
  })
});
