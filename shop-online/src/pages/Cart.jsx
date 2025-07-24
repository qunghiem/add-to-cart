import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

function Cart() {
  const cart = useSelector(state => state.cart);
  
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Giỏ hàng của bạn đang trống</h2>
        <p>Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Giỏ hàng của bạn</h1>
      
      <table className="cart-table">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng cộng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <div className="cart-total">Tổng cộng: ${totalPrice.toFixed(2)}</div>
        <button className="checkout-btn">Thanh toán</button>
      </div>
    </div>
  );
}

export default Cart;