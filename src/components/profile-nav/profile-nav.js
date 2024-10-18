import { Link } from "react-router-dom";
import "./profile-nav.css";
export function ProfileNavComponent() {
  return (
    <div>
      <nav className="nav-z-index navbg fixed-top navbar navbar-expand-lg bg-body-tertiary top-0 position-sticky ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span className="bi bi-braces" /> Pro Doubts
          </Link>

          <button
            className="navbar-toggler btn btn-light"
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
                <Link to="/" className="btn me-3">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="btn me-3">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="project" className="btn me-3">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="btn me-3">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="blog" className="btn">
                <span className="bi bi-chat-square-quote" /> Blog
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
