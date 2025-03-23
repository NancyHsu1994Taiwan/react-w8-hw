import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export function SingleProduct() {
  const { VITE_BASE_URL: BASE_URL, VITE_API_BASE: API_BASE } = import.meta.env;

  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [num, setNum] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/${API_BASE}/product/${productID}`
      );

      setProduct(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllProducts = async (page = 1) => {
    let url = `${BASE_URL}/api/${API_BASE}/products?page=${page}`;

    try {
      const res = await axios.get(url);

      setAllProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/${API_BASE}/cart`, {
        data: {
          product_id: productID,
          qty: Number(num),
        },
      });

      alert(res.data.message);
    } catch (error) {
      console.dir(error.message);
    }
  };

  useEffect(() => {
    getProduct();
    getAllProducts();
    setNum(1);
  }, []);
  return (
    <>
      <div className="container">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            navigate("/products");
          }}
        >
          上一頁
        </button>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
            >
              {product?.imagesUrl?.map((item) => {
                return (
                  <>
                    <SwiperSlide key={item}>
                      <div className="d-flex justify-content-center">
                        <img
                          src={item}
                          alt=""
                          style={{ height: "400px", objectFit: "cover" }}
                        />
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
          <div className="col-6">
            <h2>{product.title}</h2>

            <p className="mb-0 text-muted text-end">
              <del>NT${product.origin_price}</del>
            </p>
            <p className="h4 fw-bold text-end">NT${product.price}</p>

            <div className="row align-items-center">
              <div className="col-6">
                <div className="input-group my-3 bg-light rounded">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-dark border-0 py-2"
                      type="button"
                      id="button-addon1"
                      onClick={() => setNum(num - 1)}
                      disabled={num < 2}
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control border-0 text-center my-auto shadow-none bg-light"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value={num}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-dark border-0 py-2"
                      type="button"
                      id="button-addon2"
                      onClick={() => setNum(num + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <button
                  className="text-nowrap btn btn-dark w-100 py-2"
                  type="button"
                  onClick={addToCart}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "description" ? "active" : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                商品簡介
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "content" ? "active" : ""
                }`}
                onClick={() => setActiveTab("content")}
              >
                商品成分
              </button>
            </li>
          </ul>
          <div className="row">
            {activeTab === "description" && (
              <div className="col-6 p-3">{product.description}</div>
            )}
            {activeTab === "content" && (
              <div className="col-6 p-3">{product.content}</div>
            )}
          </div>
        </div>
        <h2 className="my-5">更多商品</h2>
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          modules={[Navigation]}
          navigation={true}
        >
          {allProducts?.map((item) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  <a href={item.id}>
                    <div className="d-flex justify-content-center">
                      <img
                        src={item.imageUrl}
                        alt=""
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </div>
                  </a>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
