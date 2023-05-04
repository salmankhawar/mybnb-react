export default function Profile() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-3">
          <div className="col text-left">
            <img src="images/logo-airbnb.png" />
          </div>
          <div className="col"></div>
          <div className="col text-right">
            <button type="button" className="btn btn-outline-dark">
              Tony Russo
            </button>
            <button type="button" className="btn btn-outline-dark">
              Logout
            </button>
          </div>
          {/* <div>
    <button type="button" class="btn btn-outline-dark"><a href="login.html>Login</a></button>
    <button type="button" class="btn btn-outline-dark"><a href="signup.html">Signup!</a></button
  </div> */}
        </div>
      </div>
      <div className="container">
        <div className="row cols-2">
          <div className="col col-3">
            <h5>Profile</h5>
            <form>
              <label>Name</label>
              <input type="text" className="form-control" />
              <label>Email</label>
              <input type="email" className="form-control" />
              <label>Profile Picture</label>
              <img src="" />
              <input type="text" className="form-control" />
              <button type="button" className="btn btn-success">
                Save Changes
              </button>
            </form>
          </div>
          <div className="col cols-9">
            <h5>My Listings</h5>
            <button type="button" className="btn btn-success">
              List a House
            </button>
            <div>
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Luxury Villa in Chewang</h5>
                      <span className="card-text">4 Rooms - $350/night</span>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Edit
                      </button>
                      <button type="button" className="btn btn-outline-success">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="..."
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Luxury Villa in Chewang</h5>
                      <span className="card-text">4 Rooms - $350/night</span>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Edit
                      </button>
                      <button type="button" className="btn btn-outline-success">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* If no listings */}
              {/* <div class="card">
      <span>You don't have any houses listed</span>
    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
