export function ProfileContactComponent() {
  return (
    <div>
      <div className="p-4 mt-4 d-flex justify-content-center align-items-center">
        <h6 className="user-select-none">
          <span className="bi bi-telephone-forward" /> &nbsp;
          Get in touch via social media plateform's
        </h6>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button
          class="btn btn-sm btn-outline-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className="bi bi-chat-heart-fill"> Find me on social media plateform</span>
        </button>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h6 class="offcanvas-title" className="user-select-none" id="offcanvasExampleLabel">
              Hey! I'm here on all these social media plateform's
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div className="user-select-none">So just connect with me through...</div>
            <div className="mt-4 ms-4 p-4 m-3">
              <div className="mb-3">
                <h5>
                  <div className='bi bi-linkedin'><a className='text-decoration-none text-dark' href='https://www.linkedin.com/in/umashankar-verma-268254233/'> @umashankar-verma</a></div>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <div className='bi bi-instagram'><a className='text-decoration-none text-dark' href='https://www.instagram.com/pro_doubts?igsh=MTM3MWJjcXV3NTM2dg=='> @pro_doubts</a></div>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <div className='bi bi-twitter'> <a className='text-decoration-none text-dark' href='https://x.com/UMASHAN98164826?t=rKyEo12CRJbvyYQR502e-w&s=09'> @pro_doubts</a></div>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <div className='bi bi-github'><a className='text-decoration-none text-dark' href='https://github.com/pro-doubts'> @pro_doubts</a></div>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <div className='bi bi-envelope-at'> <a className='text-decoration-none text-dark' href='mailto:umashverma55@gmail.com'> umashverma55@gmail.com</a></div>
                </h5>
              </div>
              <div className="mb-3">
                <h5>
                  <div className='bi bi-whatsapp'><a className='text-decoration-none text-dark' href='https://wa.me/9630126293'> +91 9630126293</a></div>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 d-flex justify-content-center align-items-center">
        <div className="border border-1 rounded rouded-5 w-50 p-4">
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
              className="btn btn-sm w-100 mt-4 btn-outline-dark"
            >
              Send <span className="bi bi-arrow-right-circle" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
