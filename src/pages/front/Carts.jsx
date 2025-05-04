import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Carts() {
  const { VITE_BASE_URL: BASE_URL, VITE_API_BASE: API_BASE } = import.meta.env;
  const [carts, setCarts] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0);
  const getCarts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/${API_BASE}/cart`);

      setCarts(res.data.data.carts);
      setFinalTotal(res.data.data.final_total);
    } catch (error) {
      alert(error.message);
    }
  };

  const updateCart = async (input, qty, cartId, productId) => {
    let quantity;
    if (input === "+") {
      quantity = qty + 1;
    } else {
      quantity = qty - 1;
    }
    try {
      const res = await axios.put(
        `${BASE_URL}/api/${API_BASE}/cart/${cartId}`,
        {
          data: {
            product_id: productId,
            qty: quantity,
          },
        }
      );

      alert(res.data.message);
      getCarts();
    } catch (error) {
      console.dir(error);
    }
  };

  const deleteCart = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/${API_BASE}/cart/${id}`);

      alert(res.data.message);
      getCarts();
    } catch (error) {
      console.dir(error);
    }
  };

  const deleteAllCarts = async () => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/${API_BASE}/carts`);
      alert(res.message);
      getCarts();
    } catch (error) {
      alert(error.message);
    }
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      tel: "",
      address: "",
      message: "",
    },
    // 錯誤驗證時機
    mode: "onTouched",
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/${API_BASE}/order`, {
        data: {
          user: {
            name: data.username,
            email: data.email,
            tel: data.tel,
            address: data.address,
          },
          message: data.message,
        },
      });

      alert(res.data.message);

      navigate("/checkoutComplete");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getCarts();
  }, []);
  return (
    <>
      <div className="container">
        <button type="button" className="btn btn-dark" onClick={deleteAllCarts}>
          刪除全部購物車
        </button>
        {carts.length ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <td scope="col"></td>
                  <td scope="col">商品</td>
                  <td scope="col">數量</td>
                  <td scope="col">單價</td>
                  <td scope="col">總價</td>
                </tr>
              </thead>
              <tbody>
                {carts.map((item) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <th scope="row">
                          <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => deleteCart(item.id)}
                          >
                            x
                          </button>
                        </th>
                        <td>{item.product.title}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() =>
                              updateCart(
                                "-",
                                item.qty,
                                item.id,
                                item.product.id
                              )
                            }
                          >
                            -
                          </button>
                          <span className="mx-3">{item.qty}</span>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() =>
                              updateCart(
                                "+",
                                item.qty,
                                item.id,
                                item.product.id
                              )
                            }
                          >
                            +
                          </button>
                        </td>
                        <td>{item.product.price}</td>
                        <td>{item.final_total}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <p>總價格：{finalTotal}</p>
          </>
        ) : (
          <p>目前購物車內沒有商品</p>
        )}
        <div className="my-5 row justify-content-center">
          <form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="emailHelp"
                {...register("email", {
                  required: { value: true, message: "email為必填" },
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "email格式不正確",
                  },
                })}
                className={`form-control ${errors.email && "is-invalid"}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors?.email?.message}</div>
              )}
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                收件人姓名
              </label>
              <input
                type="text"
                id="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "使用者名稱為必填",
                  },
                })}
                className={`form-control ${errors.username && "is-invalid"}`}
              />
              {errors.username && (
                <div className="invalid-feedback">
                  {errors?.username?.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="tel" className="form-label">
                收件人電話
              </label>
              <input
                type="tel"
                id="tel"
                {...register("tel", {
                  required: {
                    value: true,
                    message: "電話為必填",
                  },
                  minLength: {
                    value: 6,
                    message: "電話不少於6碼",
                  },
                  maxLength: {
                    value: 12,
                    message: "電話不多於12碼",
                  },
                })}
                className={`form-control ${errors.tel && "is-invalid"}`}
              />
              {errors.tel && (
                <div className="invalid-feedback">{errors?.tel?.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                收件人地址
              </label>
              <input
                type="text"
                id="address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "地址為必填",
                  },
                })}
                className={`form-control ${errors.address && "is-invalid"}`}
              />
              {errors.address && (
                <div className="invalid-feedback">
                  {errors?.address?.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                留言
              </label>
              <input type="textarea" className="form-control" id="message" />
            </div>

            <button type="submit" className="btn btn-primary">
              送出
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
