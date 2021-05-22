import React from 'react';
import SearchBar from './SearchBar.js';
import App from './App.js';
import { render, waitFor, screen} from '@testing-library/react';
import { youtube } from '../apis/youtube';
import '@testing-library/jest-dom';
jest.mock('../apis/youtube.js');

describe('SearchBar', () => {
  let videoSearch;

  beforeEach(() => { 
    render(<App.js />) 
    videoSearch = screen.getByText(/video search/i)
  })

  it('should render video search', () => {
    expect(videoSearch).toBeInTheDocument()
  })
})

