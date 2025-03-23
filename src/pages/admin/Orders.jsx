import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import Pagination from "../../components/admin/Pagination";
export function Orders() {
  const { VITE_BASE_URL: BASE_URL, VITE_API_BASE: API_BASE } = import.meta.env;
  const [orders, setOrders] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  const navigate = useNavigate();
  const checkAuth = async () => {
    try {
      await axios.post(`${BASE_URL}/api/user/check`);
    } catch (error) {
      alert("請重新登入", error.message);

      navigate("/");
    }
  };

  const getOrders = async (page = 1) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/${API_BASE}/admin/orders?page=${page}`
      );
      console.log(res);
      setOrders(res.data.orders);
      const page_info = res.data.pagination;
      setPageInfo(page_info);
    } catch (error) {
      console.dir(error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/api/${API_BASE}/admin/order/${id}`
      );
      alert(res.data.message);
      getOrders();
    } catch (error) {
      console.dir(error);
    }
  };

  useEffect(() => {
    checkAuth();
    getOrders();
  }, []);
  //  --- modal相關 ---
  // const orderModal = useRef(null);
  // // const [currentOrder, setCurrentOrder] = useState({});
  // let singleOrderProducts;
  // const openModal = (id) => {

  //   const singleOrder = orders.filter((item) => {
  //     return item.id === id;
  //   });

  //   singleOrderProducts = singleOrder[0];
  //   // setCurrentOrder(singleOrder[0]);
  //   // console.log("currentOrder", currentOrder);
  //   const modal = new Modal(orderModal.current);
  //   modal.show();
  // };
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">成立時間</th>
            <th>訂單編號</th>

            <th>總價</th>
            <th>付款</th>
            <th>客戶姓名</th>
            <th>客戶電話</th>
            <th>客戶地址</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => {
            return (
              <>
                <tr>
                  <th scope="row">
                    {new Date(item.create_at * 1000).toLocaleString()}
                  </th>
                  <td>{item.id}</td>

                  <td>{item.total}</td>
                  <td>{item.is_paid === true ? "已付" : "未付"}</td>
                  <td>{item.user.name}</td>
                  <td>{item.user.tel}</td>
                  <td>{item.user.address}</td>
                  {/* <td>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => openModal(item.id)}
                    >
                      查看詳情
                    </button>
                  </td> */}
                  <td>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => {
                        deleteOrder(item.id);
                      }}
                    >
                      刪除訂單
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {/* pafination */}
      <Pagination pageInfo={pageInfo} getProducts={getOrders} />
      {/* modal */}
      {/* <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={orderModal}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
