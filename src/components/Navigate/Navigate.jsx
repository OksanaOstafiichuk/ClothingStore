import { NavLink } from 'react-router-dom';

export const Navigate = () => {
  return (
    <nav>
      <NavLink to="women">Women</NavLink>
      <NavLink to="men">Men</NavLink>
      <NavLink to="kids">Kids</NavLink>
    </nav>
  );
};
