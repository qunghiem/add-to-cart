import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions";
import ProductCard from "../components/ProductCard";

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    let filtered = [...products];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category?.name === selectedCategory
      );
    }

    // Filter by price range
    if (priceRange.min) {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(priceRange.min)
      );
    }
    if (priceRange.max) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(priceRange.max)
      );
    }

    // Sort products
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy, priceRange]);

  // Get unique categories
  const categories = [
    ...new Set(
      products.map((product) => product.category?.name).filter(Boolean)
    ),
  ];

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSortBy("");
    setPriceRange({ min: "", max: "" });
  };

  return (
    <div style={{ background: "var(--gray-50)", minHeight: "100vh" }}>
      <div
        className="container"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h1
            style={{
              fontSize: "var(--font-size-4xl)",
              fontWeight: "900",
              color: "var(--gray-900)",
              marginBottom: "1rem",
            }}
          >
            Danh sách sản phẩm
          </h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "var(--radius-2xl)",
            boxShadow: "var(--shadow-md)",
            marginBottom: "2rem",
            border: "1px solid var(--gray-200)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "end",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                  marginBottom: "0.5rem",
                }}
              >
                🔍 Tìm kiếm
              </label>
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid var(--gray-200)",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "var(--font-size-base)",
                  transition: "border-color var(--transition-fast)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--primary-color)")
                }
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-200)")}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                  marginBottom: "0.5rem",
                }}
              >
                📂 Danh mục
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid var(--gray-200)",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "var(--font-size-base)",
                  backgroundColor: "white",
                }}
              >
                <option value="">Tất cả danh mục</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                  marginBottom: "0.5rem",
                }}
              >
                💰 Khoảng giá
              </label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="number"
                  placeholder="Từ"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, min: e.target.value })
                  }
                  style={{
                    flex: "1",
                    padding: "0.75rem",
                    border: "2px solid var(--gray-200)",
                    borderRadius: "var(--radius-lg)",
                    fontSize: "var(--font-size-base)",
                  }}
                />
                <input
                  type="number"
                  placeholder="Đến"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: e.target.value })
                  }
                  style={{
                    flex: "1",
                    padding: "0.75rem",
                    border: "2px solid var(--gray-200)",
                    borderRadius: "var(--radius-lg)",
                    fontSize: "var(--font-size-base)",
                  }}
                />
              </div>
            </div>

            {/* Sort */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                  marginBottom: "0.5rem",
                }}
              >
                📊 Sắp xếp
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid var(--gray-200)",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "var(--font-size-base)",
                  backgroundColor: "white",
                }}
              >
                <option value="">Mặc định</option>
                <option value="name">Tên A-Z</option>
                <option value="price-low">Giá thấp cao</option>
                <option value="price-high">Giá cao thấp</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div>
              <button
                onClick={clearFilters}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "var(--gray-200)",
                  color: "var(--gray-700)",
                  border: "none",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "var(--font-size-base)",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "var(--gray-300)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "var(--gray-200)";
                }}
              >
                🗑️ Xóa bộ lọc
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            padding: "1rem 0",
          }}
        >
          <p
            style={{
              color: "var(--gray-600)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
            {searchTerm && ` cho "${searchTerm}"`}
            {selectedCategory && ` trong danh mục "${selectedCategory}"`}
          </p>

          {(searchTerm ||
            selectedCategory ||
            priceRange.min ||
            priceRange.max) && (
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {searchTerm && (
                <span
                  style={{
                    background: "var(--primary-color)",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--font-size-sm)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      padding: "0",
                      fontSize: "1rem",
                    }}
                  >
                    ✕
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span
                  style={{
                    background: "var(--secondary-color)",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--font-size-sm)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      padding: "0",
                      fontSize: "1rem",
                    }}
                  >
                    ✕
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="loading">Đang tải sản phẩm...</div>
        ) : error ? (
          <div className="error">
            <p>Đã xảy ra lỗi khi tải sản phẩm: {error}</p>
            <button
              onClick={() => dispatch(fetchProducts())}
              style={{
                marginTop: "1rem",
                padding: "0.75rem 1.5rem",
                background: "var(--primary-color)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-lg)",
                cursor: "pointer",
              }}
            >
              Thử lại
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              background: "white",
              borderRadius: "var(--radius-2xl)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔍</div>
            <h3
              style={{
                fontSize: "var(--font-size-xl)",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "var(--gray-700)",
              }}
            >
              Không tìm thấy sản phẩm nào
            </h3>
            <p style={{ color: "var(--gray-500)", marginBottom: "2rem" }}>
              Hãy thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm
            </p>
            <button
              onClick={clearFilters}
              style={{
                padding: "0.75rem 2rem",
                background: "var(--primary-color)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-lg)",
                fontSize: "var(--font-size-base)",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Xóa tất cả bộ lọc
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
