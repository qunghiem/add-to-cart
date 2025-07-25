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

  // lấy 6 sp đầu tiên
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="home-page">
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Sản phẩm nổi bật</h2>
          {loading ? (
            <div className="loading">Đang tải sản phẩm...</div>
          ) : error ? (
            <div className="error">
              <p>Đã xảy ra lỗi khi tải sản phẩm: {error}</p>
              <button onClick={() => dispatch(fetchProducts())}>
                Thử lại
              </button>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '2rem' }}>
                <Link to="/products" className="hero-button">
                  <span>📦</span>
                  Xem tất cả sản phẩm
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;