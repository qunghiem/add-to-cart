import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // Hiển thị rating giả (vì API không có rating)
  const fakeRating = Math.floor(Math.random() * 2) + 4; // 4-5 sao
  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="product-card">
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x240?text=No+Image';
          }}
        />
        
        {/* Badge giảm giá giả */}
        {Math.random() > 0.7 && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'var(--danger-color)',
            color: 'white',
            padding: '0.25rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: '700'
          }}>
            -{Math.floor(Math.random() * 30 + 10)}%
          </div>
        )}

        {/* Quick view button */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          opacity: '0',
          transition: 'opacity var(--transition-fast)'
        }} className="quick-view">
          <button style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem'
          }}>
            👁️
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-category">
          {product.category?.name || 'Danh mục'}
        </div>
        
        <h3 className="product-title">
          {product.title}
        </h3>

        {/* Rating */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          marginBottom: '0.75rem'
        }}>
          <span style={{ fontSize: '0.875rem' }}>
            {renderStars(fakeRating)}
          </span>
          <span style={{ 
            color: 'var(--gray-500)', 
            fontSize: 'var(--font-size-sm)' 
          }}>
            ({Math.floor(Math.random() * 200 + 50)})
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <div className="product-price">
            ${product.price?.toFixed(2) || '0.00'}
          </div>
          
          {/* Giá gốc (giả) */}
          {Math.random() > 0.6 && (
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-400)',
              textDecoration: 'line-through'
            }}>
              ${(product.price * 1.2).toFixed(2)}
            </div>
          )}
        </div>

        <button 
          className="add-to-cart" 
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? (
            <>
              <span>✅</span>
              Đã thêm vào giỏ
            </>
          ) : (
            <>
              <span>🛒</span>
              Thêm vào giỏ
            </>
          )}
        </button>
      </div>

      <style jsx>{`
        .product-card:hover .quick-view {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

export default ProductCard;