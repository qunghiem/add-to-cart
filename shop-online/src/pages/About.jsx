function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Về ShopVN</h1>
            <p className="hero-subtitle">
              Câu chuyện của chúng tôi - Từ ước mơ đến hiện thực
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ 
                fontSize: 'var(--font-size-3xl)',
                fontWeight: '800',
                marginBottom: '2rem',
                color: 'var(--gray-900)'
              }}>
                Câu chuyện của chúng tôi
              </h2>
              <p style={{ 
                fontSize: 'var(--font-size-lg)',
                lineHeight: '1.8',
                color: 'var(--gray-600)',
                marginBottom: '1.5rem'
              }}>
                ShopVN được thành lập vào năm 2020 với tầm nhìn trở thành nền tảng 
                thương mại điện tử hàng đầu Việt Nam. Chúng tôi bắt đầu từ một 
                ý tưởng đơn giản: mang đến trải nghiệm mua sắm trực tuyến tuyệt vời 
                nhất cho người tiêu dùng Việt.
              </p>
              <p style={{ 
                fontSize: 'var(--font-size-lg)',
                lineHeight: '1.8',
                color: 'var(--gray-600)',
                marginBottom: '2rem'
              }}>
                Với đội ngũ tận tâm và công nghệ hiện đại, chúng tôi đã phục vụ 
                hơn 50,000 khách hàng trên toàn quốc và không ngừng mở rộng 
                danh mục sản phẩm để đáp ứng mọi nhu cầu của bạn.
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <div style={{ 
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: '800',
                    color: 'var(--primary-color)'
                  }}>
                    50K+
                  </div>
                  <div style={{ color: 'var(--gray-600)' }}>Khách hàng</div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: '800',
                    color: 'var(--primary-color)'
                  }}>
                    10K+
                  </div>
                  <div style={{ color: 'var(--gray-600)' }}>Sản phẩm</div>
                </div>
                <div>
                  <div style={{ 
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: '800',
                    color: 'var(--primary-color)'
                  }}>
                    4
                  </div>
                  <div style={{ color: 'var(--gray-600)' }}>Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '15rem',
                lineHeight: '1',
                marginBottom: '2rem'
              }}>
                🏢
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section style={{ padding: '5rem 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Sứ mệnh - Tầm nhìn - Giá trị</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎯</div>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--gray-900)'
              }}>
                Sứ mệnh
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Mang đến trải nghiệm mua sắm trực tuyến tuyệt vời nhất, 
                kết nối người tiêu dùng với các sản phẩm chất lượng cao 
                với giá cả hợp lý.
              </p>
            </div>
            
            <div className="stat-card">
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🔮</div>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--gray-900)'
              }}>
                Tầm nhìn
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Trở thành nền tảng thương mại điện tử hàng đầu Đông Nam Á, 
                tiên phong trong việc ứng dụng công nghệ để phục vụ khách hàng.
              </p>
            </div>
            
            <div className="stat-card">
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>💎</div>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--gray-900)'
              }}>
                Giá trị
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Chất lượng, uy tín, đổi mới và luôn đặt khách hàng làm trung tâm 
                trong mọi hoạt động kinh doanh của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Đội ngũ của chúng tôi</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div style={{ 
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white',
                margin: '0 auto 1.5rem'
              }}>
                👨‍💼
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                Nguyễn Văn A
              </h3>
              <p style={{ 
                color: 'var(--primary-color)',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                CEO & Founder
              </p>
              <p style={{ color: 'var(--gray-600)', fontSize: 'var(--font-size-sm)' }}>
                15 năm kinh nghiệm trong lĩnh vực thương mại điện tử
              </p>
            </div>

            <div className="stat-card">
              <div style={{ 
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--secondary-color), #f59e0b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white',
                margin: '0 auto 1.5rem'
              }}>
                👩‍💻
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                Trần Thị B
              </h3>
              <p style={{ 
                color: 'var(--secondary-color)',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                CTO
              </p>
              <p style={{ color: 'var(--gray-600)', fontSize: 'var(--font-size-sm)' }}>
                Chuyên gia công nghệ với 12 năm kinh nghiệm phát triển hệ thống
              </p>
            </div>

            <div className="stat-card">
              <div style={{ 
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--success-color), #059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white',
                margin: '0 auto 1.5rem'
              }}>
                👨‍🎨
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                Lê Văn C
              </h3>
              <p style={{ 
                color: 'var(--success-color)',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Head of Design
              </p>
              <p style={{ color: 'var(--gray-600)', fontSize: 'var(--font-size-sm)' }}>
                Thiết kế trải nghiệm người dùng xuất sắc với 8 năm kinh nghiệm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '5rem 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Hành trình phát triển</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { year: '2020', title: 'Thành lập ShopVN', desc: 'Bắt đầu với 100 sản phẩm đầu tiên' },
              { year: '2021', title: 'Mở rộng danh mục', desc: 'Đạt 1,000 sản phẩm và 5,000 khách hàng' },
              { year: '2022', title: 'Ứng dụng di động', desc: 'Ra mắt app mobile với giao diện hiện đại' },
              { year: '2023', title: 'Mở rộng toàn quốc', desc: 'Phủ sóng 63 tỉnh thành trên cả nước' },
              { year: '2024', title: 'Đổi mới công nghệ', desc: 'Áp dụng AI và Machine Learning' }
            ].map((item, index) => (
              <div key={index} style={{ 
                display: 'flex',
                alignItems: 'center',
                marginBottom: '3rem',
                position: 'relative'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--primary-color)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: 'var(--font-size-lg)',
                  flexShrink: 0,
                  marginRight: '2rem'
                }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: 'var(--gray-900)'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--gray-600)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;