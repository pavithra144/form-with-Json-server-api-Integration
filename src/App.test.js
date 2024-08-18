import { render, screen } from '@testing-library/react';
import App from './App.js';
import Post from './testApiCalls/Posts.js';

test('renders learn react link', () => {
  render(<App />);
  render(<Post />)
});
