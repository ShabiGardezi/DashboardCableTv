import React from "react";
import "../styles/AllPages.css";
const AllPages = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Home
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ul>
              <li>
                <span>Main Section</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
              <li>
                <span>Hero Section</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
              <li>
                <span>Blogs</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
              <li>
                <span>Services</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
              <li>
                <span>About Shop Satellite TV</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
              <li>
                <span>Check Service Providers</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
              <li>
                <span>Footer</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            Service Providers
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {" "}
            <ul>
              <li>
                <span>Main Section</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            About Us
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ul>
              <li>
                <span>Main Section</span>
                <button className="btn btn-secondary btn-sm ms-2">Edit</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Accordion Items */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Contact Us
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{/* Content for Contact Us */}</div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Services
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{/* Content for Services */}</div>
        </div>
      </div>

      {/* Add more accordion items with unique data-bs-target values here */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            Privacy Policy
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{/* Content for Services */}</div>
        </div>
      </div>
    </div>
  );
};

export default AllPages;
