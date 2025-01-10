const NetflixNav = function () {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="../public/assets/logo.png"
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons text-white"></i>
            <div id="kids" className="fw-bold ms-3 text-white">
              KIDS
            </div>
            <i className="bi bi-bell icons ms-3 text-white"></i>
            <i className="bi bi-person-circle icons ms-3 text-white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NetflixNav;
