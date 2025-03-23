import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Collapse } from "bootstrap";
function Navbar() {
  const collapseRef = useRef(null);
  let collapseInstance = useRef(null);

  useEffect(() => {
    if (collapseRef.current) {
      collapseInstance.current = new Collapse(collapseRef.current, {
        toggle: false,
      });
    }
  }, []);

  const toggleNavbar = () => {
    console.log(1);
    if (collapseInstance.current) {
      collapseInstance.current.toggle();
    }
  };
  return (
    <>
      <div className="container d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <h1>Nu Skincare</h1>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
            ref={collapseRef}
          >
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link me-4">
                首頁
              </Link>
              <Link to="products" className="nav-item nav-link me-4 ">
                產品
              </Link>
              <Link to="carts" className="nav-item nav-link me-4">
                購物車
              </Link>
              <Link to="login" className="nav-link">
                登入
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
