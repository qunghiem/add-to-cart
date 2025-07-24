import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector(state => state.cart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-logo">
            ShopVN
          </Link>
          
          <nav className="header-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>🏠</span>
              Trang chủ
            </NavLink>
            
            <NavLink 
              to="/products" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>📦</span>
              Sản phẩm
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>ℹ️</span>
              Giới thiệu
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>📞</span>
              Liên hệ
            </NavLink>
            
            <Link to="/cart" className="cart-icon">
              <span>🛒</span>
              Giỏ hàng
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;