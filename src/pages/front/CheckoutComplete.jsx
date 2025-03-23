import { useNavigate } from "react-router-dom";

export function CheckoutComplete() {
  const navigate = useNavigate();
  return (
    <>
      <div className="position-relative d-flex">
        <div
          className="container d-flex flex-column"
          style={{ minHeight: "100vh" }}
        >
          <div className="row my-auto pb-7">
            <div className="col-md-4 d-flex flex-column">
              <div className="my-auto">
                <h2>Checkout Success</h2>
                <p>感謝您的支持與信任，讓我們有機會成為您日常的美好陪伴</p>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => navigate("/")}
                >
                  Back To Home
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-md-50 w-100 position-absolute opacity-1"
          style={{
            zIndex: -1,
            minHeight: "100vh",
            right: 0,
            backgroundImage: `url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,
            backgroundPosition: "center center",
            opacity: "0.1",
          }}
        ></div>
      </div>
    </>
  );
}
