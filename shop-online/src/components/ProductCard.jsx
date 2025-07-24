import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">Danh mục: {product.category.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart" 
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Đã thêm vào giỏ' : 'Thêm vào giỏ'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;