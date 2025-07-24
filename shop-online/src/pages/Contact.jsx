import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Liên hệ với chúng tôi</h1>
            <p className="hero-subtitle">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ 
                fontSize: 'var(--font-size-2xl)',
                fontWeight: '800',
                marginBottom: '2rem',
                color: 'var(--gray-900)'
              }}>
                Thông tin liên hệ
              </h2>

              <div style={{ marginBottom: '3rem' }}>
                {[
                  {
                    icon: '📍',
                    title: 'Địa chỉ',
                    content: '123 Đường Nguyễn Huệ, Quận 1, TP.HCM',
                    detail: 'Tầng 10, Tòa nhà ABC Center'
                  },
                  {
                    icon: '📞',
                    title: 'Điện thoại',
                    content: '0123 456 789',
                    detail: 'Hotline hỗ trợ 24/7'
                  },
                  {
                    icon: '✉️',
                    title: 'Email',
                    content: 'info@shopvn.com',
                    detail: 'Phản hồi trong vòng 2 giờ'
                  },
                  {
                    icon: '🕒',
                    title: 'Giờ làm việc',
                    content: '8:00 - 22:00',
                    detail: 'Thứ 2 - Chủ nhật'
                  }
                ].map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '2rem',
                    padding: '1.5rem',
                    background: 'var(--gray-50)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--gray-200)'
                  }}>
                    <div style={{ 
                      fontSize: '2rem',
                      marginRight: '1rem',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 style={{ 
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        color: 'var(--gray-900)'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{ 
                        fontSize: 'var(--font-size-base)',
                        fontWeight: '600',
                        color: 'var(--primary-color)',
                        marginBottom: '0.25rem'
                      }}>
                        {item.content}
                      </p>
                      <p style={{ 
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--gray-600)'
                      }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 style={{ 
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--gray-900)'
                }}>
                  Kết nối với chúng tôi
                </h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[
                    { icon: '📘', name: 'Facebook', color: '#1877f2' },
                    { icon: '📷', name: 'Instagram', color: '#e4405f' },
                    { icon: '🐦', name: 'Twitter', color: '#1da1f2' },
                    { icon: '💼', name: 'LinkedIn', color: '#0077b5' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: social.color,
                        color: 'white',
                        fontSize: '1.5rem',
                        textDecoration: 'none',
                        transition: 'transform var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: 'var(--radius-2xl)',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--gray-200)'
            }}>
              <h2 style={{ 
                fontSize: 'var(--font-size-2xl)',
                fontWeight: '800',
                marginBottom: '1.5rem',
                color: 'var(--gray-900)',
                textAlign: 'center'
              }}>
                Gửi tin nhắn cho chúng tôi
              </h2>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600',
                    color: 'var(--gray-700)',
                    marginBottom: '0.5rem'
                  }}>
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--gray-200)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--font-size-base)',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                  />
                </div>

                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: '600',
                      color: 'var(--gray-700)',
                      marginBottom: '0.5rem'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid var(--gray-200)',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--font-size-base)',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: '600',
                      color: 'var(--gray-700)',
                      marginBottom: '0.5rem'
                    }}>
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid var(--gray-200)',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--font-size-base)',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600',
                    color: 'var(--gray-700)',
                    marginBottom: '0.5rem'
                  }}>
                    Chủ đề *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--gray-200)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--font-size-base)',
                      backgroundColor: 'white',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="general">Câu hỏi chung</option>
                    <option value="support">Hỗ trợ kỹ thuật</option>
                    <option value="order">Vấn đề đơn hàng</option>
                    <option value="complaint">Khiếu nại</option>
                    <option value="partnership">Hợp tác kinh doanh</option>
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600',
                    color: 'var(--gray-700)',
                    marginBottom: '0.5rem'
                  }}>
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--gray-200)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--font-size-base)',
                      resize: 'vertical',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                    placeholder="Nhập nội dung tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--primary-dark)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--primary-color)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <span>📧</span>
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '5rem 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Câu hỏi thường gặp</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                question: 'Thời gian giao hàng là bao lâu?',
                answer: 'Chúng tôi giao hàng trong vòng 24-48h đối với khu vực nội thành và 2-5 ngày đối với các tỉnh thành khác.'
              },
              {
                question: 'Tôi có thể đổi trả sản phẩm không?',
                answer: 'Có, bạn có thể đổi trả sản phẩm trong vòng 30 ngày mà không cần lý do. Sản phẩm cần còn nguyên tem mác và chưa qua sử dụng.'
              },
              {
                question: 'Các phương thức thanh toán được hỗ trợ?',
                answer: 'Chúng tôi hỗ trợ thanh toán qua thẻ tín dụng, chuyển khoản ngân hàng, ví điện tử và thanh toán khi nhận hàng (COD).'
              },
              {
                question: 'Làm thế nào để theo dõi đơn hàng?',
                answer: 'Sau khi đặt hàng thành công, bạn sẽ nhận được mã tracking qua email và SMS để theo dõi tình trạng đơn hàng.'
              },
              {
                question: 'Có phí vận chuyển không?',
                answer: 'Miễn phí vận chuyển cho đơn hàng từ 500,000đ. Đơn hàng dưới 500,000đ sẽ có phí vận chuyển 30,000đ.'
              }
            ].map((faq, index) => (
              <details key={index} style={{
                background: 'white',
                borderRadius: 'var(--radius-xl)',
                marginBottom: '1rem',
                border: '1px solid var(--gray-200)',
                overflow: 'hidden'
              }}>
                <summary style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '700',
                  color: 'var(--gray-900)',
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {faq.question}
                  <span style={{ fontSize: '1.5rem' }}>❓</span>
                </summary>
                <div style={{
                  padding: '0 1.5rem 1.5rem',
                  color: 'var(--gray-600)',
                  lineHeight: '1.6',
                  borderTop: '1px solid var(--gray-100)'
                }}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .contact-page form > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;