import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../redux/actions';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncrease = () => {
    dispatch(updateCartQuantity(item.id, item.quantity + 1));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateCartQuantity(item.id, item.quantity - 1));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  return (
    <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
      <td style={{ padding: 'var(--spacing-6)' }}>
        <img 
          src={item.images?.[0] || 'https://via.placeholder.com/80x80?text=No+Image'} 
          alt={item.title} 
          className="cart-item-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
          }}
        />
      </td>
      
      <td style={{ padding: 'var(--spacing-6)' }}>
        <div>
          <h4 style={{ 
            fontSize: 'var(--font-size-base)',
            fontWeight: '600',
            marginBottom: '0.25rem',
            color: 'var(--gray-900)'
          }}>
            {item.title}
          </h4>
          <p style={{ 
            fontSize: 'var(--font-size-sm)',
            color: 'var(--gray-500)',
            marginBottom: '0.5rem'
          }}>
            Danh mục: {item.category?.name || 'N/A'}
          </p>
          
          {/* Product attributes (fake) */}
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            {Math.random() > 0.5 && (
              <span style={{
                fontSize: 'var(--font-size-xs)',
                background: 'var(--gray-100)',
                padding: '0.125rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--gray-600)'
              }}>
                Màu: Đen
              </span>
            )}
            {Math.random() > 0.5 && (
              <span style={{
                fontSize: 'var(--font-size-xs)',
                background: 'var(--gray-100)',
                padding: '0.125rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--gray-600)'
              }}>
                Size: M
              </span>
            )}
          </div>
        </div>
      </td>
      
      <td style={{ padding: 'var(--spacing-6)' }}>
        <div style={{ 
          fontSize: 'var(--font-size-lg)',
          fontWeight: '700',
          color: 'var(--primary-color)'
        }}>
          ${item.price?.toFixed(2) || '0.00'}
        </div>
      </td>
      
      <td style={{ padding: 'var(--spacing-6)' }}>
        <div className="cart-quantity">
          <button 
            className="quantity-btn" 
            onClick={handleDecrease}
            title={item.quantity === 1 ? "Xóa sản phẩm" : "Giảm số lượng"}
          >
            {item.quantity === 1 ? '🗑️' : '➖'}
          </button>
          <span style={{ 
            minWidth: '2rem',
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 'var(--font-size-lg)'
          }}>
            {item.quantity}
          </span>
          <button 
            className="quantity-btn" 
            onClick={handleIncrease}
            title="Tăng số lượng"
          >
            ➕
          </button>
        </div>
      </td>
      
      <td style={{ padding: 'var(--spacing-6)' }}>
        <div style={{ 
          fontSize: 'var(--font-size-xl)',
          fontWeight: '800',
          color: 'var(--gray-900)'
        }}>
          ${((item.price || 0) * item.quantity).toFixed(2)}
        </div>
      </td>
      
      <td style={{ padding: 'var(--spacing-6)' }}>
        <button 
          className="remove-btn" 
          onClick={handleRemove}
          title="Xóa sản phẩm khỏi giỏ hàng"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          <span>🗑️</span>
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default CartItem;