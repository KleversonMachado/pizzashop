import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { NavLink } from './nav-links';

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        // Componente depende de um provider, precisa usar isso para funcionar
        wrapper: ({ children }) => {
          return (
            // Simula a navegação para a rota /about
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          );
        },
      }
    );

    expect(wrapper.getByText('Home').dataset.current).toEqual('false');
    expect(wrapper.getByText('About').dataset.current).toEqual('true');
  });
});
