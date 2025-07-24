import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import ProductCard from '../components/ProductCard';

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Lấy 4 sản phẩm đầu tiên để hiển thị ở trang chủ
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Chào mừng đến với cửa hàng của chúng tôi</h1>
        <p className="hero-subtitle">Khám phá bộ sưu tập sản phẩm chất lượng cao với giá cả hợp lý</p>
        <Link to="/products" className="hero-button">Xem sản phẩm</Link>
      </div>

      <div className="featured-products">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        {loading ? (
          <div className="loading">Đang tải...</div>
        ) : error ? (
          <div className="error">Đã xảy ra lỗi: {error}</div>
        ) : (
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;