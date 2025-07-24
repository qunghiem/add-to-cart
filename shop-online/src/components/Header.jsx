import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector(state => state.cart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">My Shop</Link>
      </div>
      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Trang chủ
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
          Sản phẩm
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>
          <div className="cart-icon">
            Giỏ hàng
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;