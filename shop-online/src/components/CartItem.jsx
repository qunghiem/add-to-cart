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
    <tr>
      <td>
        <img src={item.images[0]} alt={item.title} width="50" height="50" style={{ objectFit: 'cover' }} />
      </td>
      <td>{item.title}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <div className="cart-quantity">
          <button className="quantity-btn" onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button className="quantity-btn" onClick={handleIncrease}>+</button>
        </div>
      </td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button className="remove-btn" onClick={handleRemove}>Xóa</button>
      </td>
    </tr>
  );
}

export default CartItem;