import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
export function Products() {
  const { VITE_BASE_URL: BASE_URL, VITE_API_BASE: API_BASE } = import.meta.env;
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [pagination, setPagination] = useState({});
  const getProducts = async (page = 1, category) => {
    setCategory(category);
    let url = `${BASE_URL}/api/${API_BASE}/products?page=${page}`;
    if (category) {
      url = `${BASE_URL}/api/${API_BASE}/products?page=${page}&category=${category}`;
    }

    try {
      const res = await axios.get(url);

      setProducts(res.data.products);

      setPagination(res.data.pagination);
    } catch (error) {
      alert(error.message);
    }
  };
  const addToCart = async (id) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/${API_BASE}/cart`, {
        data: {
          product_id: id,
          qty: 1,
        },
      });

      alert(res.data.message);
    } catch (error) {
      console.dir(error.message);
    }
  };
  const navigate = useNavigate();
  const goToProduct = (id) => {
    navigate(`/products/${id}`);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div
        classNAme="position-relative d-flex align-items-center justify-content-center"
        style={{ minHeight: "400px" }}
      >
        <div
          className="position-absolute"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "500px",
            overflow: "hidden",
            backgroundImage: `url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,
            backgroundPosition: "center center",
            opacity: 0.1,
            zIndex: -100,
          }}
        ></div>
        <div className="">
          <h2 className="fw-bold text-center mt-5">
            從潔面、化妝水到精華與乳霜，層層呵護
          </h2>
          <h3 className="text-center">不只是護膚，是與自己的溫柔對話</h3>
        </div>
      </div>
      <div className="container">
        <div className="d-flex mb-5">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className={
                category === "潔面" ? "btn btn-dark" : "btn btn-outline-dark"
              }
              onClick={() => getProducts(1, "潔面")}
            >
              潔面
            </button>
            <button
              type="button"
              className={
                category === "臉部保養"
                  ? "btn btn-dark"
                  : "btn btn-outline-dark"
              }
              onClick={() => getProducts(1, "臉部保養")}
            >
              臉部保養
            </button>
            <button
              type="button"
              className={
                category === "身體保養"
                  ? "btn btn-dark"
                  : "btn btn-outline-dark"
              }
              onClick={() => getProducts(1, "身體保養")}
            >
              身體保養
            </button>
            <button
              type="button"
              className={
                category === "化妝" ? "btn btn-dark" : "btn btn-outline-dark"
              }
              onClick={() => getProducts(1, "化妝")}
            >
              化妝
            </button>
            <button
              type="button"
              className={
                category === "" ? "btn btn-dark" : "btn btn-outline-dark"
              }
              onClick={() => getProducts(1, "")}
            >
              全部
            </button>
          </div>
        </div>

        <div className="row">
          {products.map((item) => {
            return (
              <>
                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                  <div className="card border-0 mb-4 position-relative position-relative">
                    <img
                      src={item.imageUrl}
                      className="card-img-top rounded-0"
                      alt="..."
                      style={{
                        height: "250px",
                        objectFit: "cover",
                        objectPosition: "center center",
                      }}
                    />
                    <a href="#" className="text-dark">
                      <i
                        className="far fa-heart position-absolute"
                        style={{ right: "16px", top: "16px" }}
                      ></i>
                    </a>
                    <div className="card-body p-0">
                      <h4 className="mb-0 mt-3">
                        <p>{item.title}</p>
                      </h4>
                      <p className="card-text mb-3">
                        NT${item.price}
                        <span className="text-muted ms-3">
                          <del>NT${item.origin_price}</del>
                        </span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-light border me-2"
                        onClick={() => goToProduct(item.id)}
                      >
                        See More
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => addToCart(item.id)}
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li
                className={
                  pagination.has_pre ? "page-item" : "page-item disabled"
                }
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => getProducts(pagination.current_page - 1)}
                  disabled
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {Array.from({ length: pagination.total_pages }).map(
                (_, index) => {
                  return (
                    <>
                      <li className="page-item" key={index}>
                        <a
                          className="page-link"
                          onClick={() => getProducts(index + 1)}
                        >
                          {index + 1}
                        </a>
                      </li>
                    </>
                  );
                }
              )}

              <li
                className={
                  pagination.has_next ? "page-item" : "page-item disabled"
                }
              >
                <a className="page-link" href="#">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Outlet />
    </>
  );
}
