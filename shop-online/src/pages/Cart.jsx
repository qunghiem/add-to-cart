import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {
  const cart = useSelector(state => state.cart);
  
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Giỏ hàng của bạn đang trống</h2>
          <p>Hãy khám phá các sản phẩm tuyệt vời của chúng tôi và thêm vào giỏ hàng!</p>
          <Link to="/products" className="hero-button">
            <span>🛍️</span>
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <div className="cart-header">
        <h1 className="cart-title">Giỏ hàng của bạn</h1>
        <p style={{ 
          color: 'var(--gray-600)', 
          fontSize: 'var(--font-size-lg)' 
        }}>
          Bạn có {totalItems} sản phẩm trong giỏ hàng
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 400px', 
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Cart Items */}
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Thông tin</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>

          {/* Continue Shopping */}
          <div style={{ marginTop: '2rem' }}>
            <Link 
              to="/products" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--primary-color)',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '0.75rem 1.5rem',
                border: '2px solid var(--primary-color)',
                borderRadius: 'var(--radius-lg)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--primary-color)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--primary-color)';
              }}
            >
              <span>←</span>
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h3 style={{ 
            fontSize: 'var(--font-size-xl)', 
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--gray-900)'
          }}>
            Tóm tắt đơn hàng
          </h3>

          {/* Order Details */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
              color: 'var(--gray-600)'
            }}>
              <span>Tạm tính ({totalItems} sản phẩm):</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
              color: 'var(--gray-600)'
            }}>
              <span>Phí vận chuyển:</span>
              <span style={{ color: 'var(--success-color)', fontWeight: '600' }}>
                Miễn phí
              </span>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
              color: 'var(--gray-600)'
            }}>
              <span>Thuế VAT:</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>

            <hr style={{ 
              border: 'none', 
              borderTop: '2px solid var(--gray-200)',
              margin: '1rem 0' 
            }} />

            <div className="cart-total">
              Tổng cộng: ${(totalPrice * 1.1).toFixed(2)}
            </div>
          </div>

          {/* Promo Code */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <input 
                type="text" 
                placeholder="Mã giảm giá"
                style={{
                  flex: '1',
                  padding: '0.75rem',
                  border: '2px solid var(--gray-200)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--font-size-base)'
                }}
              />
              <button style={{
                padding: '0.75rem 1rem',
                background: 'var(--gray-200)',
                border: 'none',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                fontWeight: '600'
              }}>
                Áp dụng
              </button>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="checkout-btn">
            <span>💳</span>
            Thanh toán ngay
          </button>

          {/* Payment Methods */}
          <div style={{ 
            marginTop: '1.5rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-500)',
              marginBottom: '0.75rem'
            }}>
              Phương thức thanh toán được chấp nhận:
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '1.5rem'
            }}>
              <span>💳</span>
              <span>🏦</span>
              <span>📱</span>
              <span>💰</span>
            </div>
          </div>

          {/* Security Info */}
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <span>🔒</span>
              Thanh toán an toàn & bảo mật
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container .cart-page > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Cart;