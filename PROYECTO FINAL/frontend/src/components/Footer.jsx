const Footer = () => {
  return (
    <footer className="text-body-secondary py-5">
      <div className="container">
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <h6>Sabores Selectos</h6>
            </div>
            <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
                <svg className="bi" width="30" height="24"></svg>
              </a>
              <span className="mb-3 mb-md-0 text-body-secondary">
                © 2023 Sabores Company, Inc
              </span>
            </div>
          </footer>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
