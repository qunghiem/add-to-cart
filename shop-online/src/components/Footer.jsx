import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Adamo</h3>
            <p style={{ color: 'var(--gray-300)', marginBottom: '1.5rem' }}>
              Nội dung Mô tả...
            </p>
            
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
                <a href="mailto:info@adamo.com" style={{ color: 'var(--gray-300)' }}>
                 adamo.vn.com
                </a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🕒</span>
                8:00 - 22:00 (Thứ 2 - Chủ nhật)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;