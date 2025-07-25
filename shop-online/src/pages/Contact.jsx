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
    <>
    Nội dung trang Liên hệ...
    </>
  );
}

export default Contact;