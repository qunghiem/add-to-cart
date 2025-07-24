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

  // Lấy 6 sản phẩm đầu tiên để hiển thị ở trang chủ
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Chào mừng đến với ShopVN
            </h1>
            <p className="hero-subtitle">
              Khám phá hàng ngàn sản phẩm chất lượng cao với giá cả hợp lý. 
              Mua sắm dễ dàng, giao hàng nhanh chóng, đổi trả linh hoạt.
            </p>
            <Link to="/products" className="hero-button">
              <span>🛍️</span>
              Khám phá ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Sản phẩm</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Khách hàng</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">Hài lòng</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
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
              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <Link to="/products" className="hero-button">
                  <span>📦</span>
                  Xem tất cả sản phẩm
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Tại sao chọn ShopVN?</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-900)' }}>
                Giao hàng nhanh
              </h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Giao hàng trong 24h với dịch vụ chuyển phát nhanh
              </p>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-900)' }}>
                Thanh toán an toàn
              </h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Bảo mật thông tin thanh toán với công nghệ SSL
              </p>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔄</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-900)' }}>
                Đổi trả dễ dàng
              </h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Chính sách đổi trả trong 30 ngày không cần lý do
              </p>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎧</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--gray-900)' }}>
                Hỗ trợ 24/7
              </h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Đội ngũ tư vấn viên sẵn sàng hỗ trợ mọi lúc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ 
        padding: '5rem 0', 
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'var(--font-size-3xl)', 
              fontWeight: '800', 
              marginBottom: '1rem' 
            }}>
              Đăng ký nhận tin
            </h2>
            <p style={{ 
              fontSize: 'var(--font-size-lg)', 
              marginBottom: '2rem', 
              opacity: '0.9' 
            }}>
              Nhận thông báo về các sản phẩm mới và ưu đãi đặc biệt
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              maxWidth: '400px', 
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <input 
                type="email" 
                placeholder="Nhập email của bạn"
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '1rem',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  fontSize: 'var(--font-size-base)'
                }}
              />
              <button 
                className="hero-button"
                style={{ 
                  background: 'white', 
                  color: 'var(--primary-color)',
                  whiteSpace: 'nowrap'
                }}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;