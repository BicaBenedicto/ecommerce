import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Provider from '../../services/Provider';

export default function renderWithRouter (component) {
  const history = createMemoryHistory();
  return ({
    ...render(<Provider>{component}</Provider>), history,
  });
}
