import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import ProductCard from '../components/ProductCard';

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="products-page">
      <h1>Danh sách sản phẩm</h1>
      
      {loading ? (
        <div className="loading">Đang tải...</div>
      ) : error ? (
        <div className="error">Đã xảy ra lỗi: {error}</div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;