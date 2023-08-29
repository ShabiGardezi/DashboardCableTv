import React from "react";
import "../styles/AllPages.css";
const AllPages = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="col-8">
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
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Hero Section</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Blogs</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Services</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>About Shop Satellite TV</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Check Service Providers</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Footer</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
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
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
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
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
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
            <div className="accordion-body">
              {" "}
              <ul>
                <li>
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Contact-Content</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
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
            <div className="accordion-body">
              {" "}
              <ul>
                <li>
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8">
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
            <div className="accordion-body">
              {" "}
              <ul>
                <li>
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Content-PrivacyPolicy</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
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
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Cable TV
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Cable TV</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
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
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Cable Internet
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Cable Internet</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
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
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Satellite Internet
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Satellite Internet</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
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
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              Satellite TV
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
                <li>
                  <span>Satellite TV</span>
                  <button className="btn btn-secondary btn-sm ms-2">
                    Edit
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPages;
