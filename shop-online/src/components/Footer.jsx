import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🛍️ ShopVN</h3>
            <p style={{ color: 'var(--gray-300)', marginBottom: '1.5rem' }}>
              Cửa hàng trực tuyến hàng đầu Việt Nam, mang đến trải nghiệm mua sắm 
              tuyệt vời với hàng ngàn sản phẩm chất lượng.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ 
                color: 'white', 
                fontSize: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>📘</a>
              <a href="#" style={{ 
                color: 'white', 
                fontSize: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>📷</a>
              <a href="#" style={{ 
                color: 'white', 
                fontSize: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>🐦</a>
              <a href="#" style={{ 
                color: 'white', 
                fontSize: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/products">Sản phẩm</Link></li>
              <li><Link to="/about">Giới thiệu</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
              <li><Link to="/cart">Giỏ hàng</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Danh mục</h3>
            <ul>
              <li><a href="#">Điện tử</a></li>
              <li><a href="#">Thời trang</a></li>
              <li><a href="#">Gia dụng</a></li>
              <li><a href="#">Sách & Văn phòng phẩm</a></li>
              <li><a href="#">Thể thao & Du lịch</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Hỗ trợ khách hàng</h3>
            <ul>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Liên hệ hỗ trợ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Thông tin liên hệ</h3>
            <div style={{ color: 'var(--gray-300)' }}>
              <p style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📍</span>
                123 Đường ABC, Quận 1, TP.HCM
              </p>
              <p style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📞</span>
                <a href="tel:0123456789" style={{ color: 'var(--gray-300)' }}>
                  0123 456 789
                </a>
              </p>
              <p style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✉️</span>
                <a href="mailto:info@shopvn.com" style={{ color: 'var(--gray-300)' }}>
                  info@shopvn.com
                </a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🕒</span>
                8:00 - 22:00 (Thứ 2 - Chủ nhật)
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 ShopVN. Tất cả quyền được bảo lưu.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
            Được thiết kế với ❤️ tại Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;