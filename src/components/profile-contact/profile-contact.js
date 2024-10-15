export function ProfileContactComponent() {
  return (
    <div>
      <div className="p-4 mt-5 d-flex justify-content-center align-items-center">
        <h6>
          <span className="bi bi-telephone-forward" /> &nbsp;
          Get in touch via social media plateform's
        </h6>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button
          class="btn btn-sm btn-outline-secondary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Find me on social media plateform
        </button>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h6 class="offcanvas-title" id="offcanvasExampleLabel">
              Hey! I'm available on these all social media's
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>Just find me and start chat with me...</div>
            <div className="mt-4 ms-4 p-4 m-3">
              <div className="mb-3">
                <h5>
                  <span className="bi bi-twitter" /> @pro_doubts
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <span className="bi bi-instagram" /> @pro_doubts
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <span className="bi bi-facebook" /> @pro_doubts
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <span className="bi bi-whatsapp" /> +91 9630126293
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <span className="bi bi-envelope-at" /> umashverma55@gmail.com
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 d-flex justify-content-center align-items-center">
        <div className="border border-1 rounded rouded-5 w-50  mb-5  p-4">
          <h5>
            <span className="bi bi-envelope-at" /> Write your message here...
          </h5>
          <form className="mt-4">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
            <label className="form-label">Mobile</label>
            <input type="text" className="form-control" />
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
            <label className="form-label">Comment's</label>
            <input type="text-aria" className="form-control" />
            <button
              type="button"
              className="btn btn-sm w-100 mt-4 btn-outline-secondary"
            >
              Send <span className="bi bi-arrow-right-circle" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
