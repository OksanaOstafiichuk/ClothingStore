import { Link } from 'react-router-dom';
import { BsShop } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';

import { Navigate } from 'components/Navigate/Navigate';

export const AppBar = () => {
  return (
    <div>
      <Navigate />
      <Link to="/">
        <BsShop />
      </Link>
      <Link to="cart">
        <CgShoppingCart />
      </Link>
    </div>
  );
};
