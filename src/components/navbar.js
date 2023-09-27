import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light pl-5">
        <a className="navbar-brand" href="#">
          {" "}
          <img
            src="../images/horizon.png"
            alt=""
            height="50px"
            width="200px"
          />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {" "}
                <img src="../images/ghana.webp" alt="" className="flags" />{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                <img src="../images/nigeria.png" alt="" className="flags" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="../images/kenya.png" alt="" className="flags" />
              </a>
            </li>
          </ul>

          <a className="nav-link mr-5" href="#">
            About Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
