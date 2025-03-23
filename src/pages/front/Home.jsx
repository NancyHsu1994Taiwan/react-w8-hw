import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="position-relative">
        <div
          className=" d-flex flex-column justify-content-center"
          style={{ minHeight: "100vh", zIndex: 1000 }}
        >
          <div className="d-flex justify-content-center my-auto ">
            <div className="col-md-4 text-center">
              <h2>Nu Skincare</h2>
              <p className="text-muted mb-0">從新開始，喚醒你肌膚的自然光</p>
              <p className="text-muted mb-0">植物系呵護，純淨如初</p>
              <p className="text-muted mb-0">為每一吋肌膚訂製專屬答案</p>
              <button
                type="button"
                className="btn btn-dark mt-3"
                onClick={() => navigate("/products")}
              >
                前往產品頁
              </button>
            </div>
          </div>
        </div>
        <div
          className="position-absolute"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundImage: `url("https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")`,
            backgroundPosition: "center center",
            opacity: 0.1,
            zIndex: -100,
          }}
        ></div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 mt-md-4">
            <div className="card border-0 mb-4 w-100">
              <div
                className="card-image overflow-hidden"
                style={{
                  height: "300px",
                  backgroundImage: `url(https://images.unsplash.com/photo-1618480066690-8457ab2b766e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="card-body text-center">
                <a href="/products/-OLsR_KuXLdjLUusgcUf">
                  <h4>水潤保濕組</h4>
                </a>
                <div className="d-flex justify-content-center">
                  <p className="card-text text-muted mb-0 text-center">
                    一組搞定缺水困擾，讓肌膚喝飽水、透亮整天！
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-md-4">
            <div className="card border-0 mb-4 w-100">
              <div
                className="card-image overflow-hidden"
                style={{
                  height: "300px",
                  backgroundImage: `url(https://plus.unsplash.com/premium_photo-1680740103875-048f39fe05d7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="card-body text-center">
                <a href="/products/-OLsSJntjFpyAaF3HLZh">
                  <h4>控油淨膚組</h4>
                </a>
                <div className="d-flex justify-content-center">
                  <p className="card-text text-muted mb-0">
                    溫和代謝角質、暢通毛孔，改善痘痘粉刺困擾
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-md-4">
            <div className="card border-0 mb-4 w-100">
              <div
                className="card-image overflow-hidden"
                style={{
                  height: "300px",
                  backgroundImage: `url(https://images.unsplash.com/photo-1618479964200-56cd8a8dd2b8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="card-body text-center">
                <a href="/products/-OLWPxluOG4T3eWL3P_G">
                  <h4>超值保濕組</h4>
                </a>
                <div className="d-flex justify-content-center">
                  <p className="card-text text-muted mb-0">
                    高效鎖水，深入滋養，讓肌膚喝飽水
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light mt-7">
        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center py-7">
                  <div className="col-md-6 text-center py-5">
                    <h3>讓肌膚從「新」開始，回歸純淨本質</h3>
                    <p className="my-5">
                      在繁忙與壓力之中，肌膚默默承受著乾燥、黯沉、敏感與疲憊。
                      NU SKINACRE，結合自然植萃與現代科學，
                      為你打造溫柔有效的每日保養儀式。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classNamw="container my-7">
        <div classNamw="row">
          <div className="col-md-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1677283511146-52fa442feb2f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              classNamw="img-fluid"
            />
          </div>
          <div classNamw="col-md-4 m-auto text-center">
            <h4 classNamw="mt-4">溫柔有效的每日保養儀式</h4>
            <p classNamw="text-muted">無酒精・無人工香料，無矽靈</p>
            <p className="text-muted">嚴選植萃精華 × 多重保濕鎖水因子</p>
            <p className="text-muted">每一次塗抹，都是修護與滋養的起點</p>
          </div>
        </div>
        <div className="row flex-row-reverse justify-content-between mt-4">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 m-auto text-center">
            <h4 className="mt-4">肌膚會記得，這份被溫柔對待的感覺</h4>
            <p className="text-muted">自然原萃，肌膚新生</p>
            <p className="text-muted">植物系呵護，純淨如初</p>
            <p className="text-muted">精準修護，美肌從此定義新生</p>
          </div>
        </div>
      </div>
      <div className="bg-light py-4">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
            <p className="mb-0 fw-bold">聯絡我們</p>
            <div className="input-group w-md-50 mt-md-0 mt-3">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder=""
              />
              <div className="input-group-append">
                <button
                  className="btn btn-dark rounded-0"
                  type="button"
                  id="search"
                >
                  送出
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Home;
