export default function House() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-3">
          <div className="col text-left">
            <img src="/images/logo-airbnb.png" />
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
      <div className="bg-light p-3">
        <div className="container">
          <form className="input-group row">
            <div className="input-group mb-3 col">
              <label className="input-group-text">
                <i className="fa-solid fa-location-dot" />
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option selected="">Any Location</option>
                <option>Koh Phangan</option>
                <option>Koh Samui</option>
                <option>Bali</option>
              </select>
            </div>
            <div className="input-group mb-3 col">
              <label className="input-group-text">
                <i className="fa-sharp fa-solid fa-house" />
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option selected="">Any Rooms</option>
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
                <option>4 Rooms</option>
                <option>5 Rooms</option>
              </select>
            </div>
            <div className="input-group mb-3 col">
              <span className="input-group-text">
                <i className="fa-sharp fa-solid fa-dollar-sign" />
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="max price"
              />
            </div>
            <div className="input-group mb-3 col">
              <label className="input-group-text">
                <i className="fa-sharp fa-solid fa-at" />
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option>Price (low to high)</option>
                <option>Price (high to low)</option>
              </select>
            </div>
            <div className="input-group mb-3 col">
              <input
                type="text"
                className="form-control"
                placeholder="House Name..."
              />
            </div>
            <div className="input-group mb-3 col">
              <button type="button" className="btn btn-success">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-4">
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="card-text">
                  <i className="fa-sharp fa-solid fa-location-dot" /> Koh Samui
                  - 4 Rooms{' '}
                </span>
                <a href="abc.com" className="stretched-link">
                  <h5 className="card-title">Luxury Villa in Chewang</h5>
                </a>
                <span className="card-text">
                  <i
                    className="fa-sharp fa-solid fa-thumbs-up"
                    style={{ color: 'darkgreen' }}
                  />
                  3 Reviews
                </span>
                <span className="card-text">$350/night</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2002/house_02_01.png
            "
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="card-text">
                  <i className="fa-sharp fa-solid fa-location-dot" /> Koh
                  Phangan - 3 Rooms{' '}
                </span>
                <h5 className="card-title">Private Villa Lotus 1</h5>
                <span className="card-text">
                  <i
                    className="fa-sharp fa-solid fa-thumbs-up"
                    style={{ color: 'darkgreen' }}
                  />
                  1 Reviews
                </span>
                <span className="card-text">$150/night</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2003/house_03_01.png
            "
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="card-text">
                  <i className="fa-sharp fa-solid fa-location-dot" /> Bali - 3
                  Rooms{' '}
                </span>
                <h5 className="card-title">Seminyak KuDeTa Beach</h5>
                <span className="card-text">
                  <i
                    className="fa-sharp fa-solid fa-thumbs-down"
                    style={{ color: '#dc2909' }}
                  />
                  2 Reviews
                </span>
                <span>$120/night</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2006/house_06_01.png
            "
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="card-text">
                  <i className="fa-sharp fa-solid fa-location-dot" /> Bali - 5
                  Rooms{' '}
                </span>
                <h5 className="card-title">5 Bed Villa Canggu</h5>
                <span className="card-text">
                  <i
                    className="fa-sharp fa-solid fa-thumbs-up"
                    style={{ color: 'darkgreen' }}
                  />
                  1 Reviews
                </span>
                <span className="card-text">$250/night</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2004/house_04_01.png
            "
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="card-text">
                  <i className="fa-sharp fa-solid fa-location-dot" /> Koh
                  Phangan - 2 Rooms{' '}
                </span>
                <h5 className="card-title">Archie Village House</h5>
                <span className="card-text">
                  <i
                    className="fa-sharp fa-solid fa-thumbs-up"
                    style={{ color: 'darkgreen' }}
                  />
                  1 Reviews
                </span>
                <span className="card-text">$80/night</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2005/house_05_01.png
            "
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="card-text">
                  <i className="fa-sharp fa-solid fa-location-dot" /> Koh Samui
                  - 4 Rooms{' '}
                </span>
                <h5 className="card-title">Luxury 6 Bed Villa</h5>
                <span className="card-text">0 Reviews</span>
                <span className="card-text">$150/night</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2008/house_08_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="card-text">
                  <i className="fa-sharp fa-solid fa-location-dot" /> Koh
                  Phangan - 4 Rooms{' '}
                </span>
                <h5 className="card-title">Narivana Koh Phangan</h5>
                <span className="card-text">0 Reviews</span>
                <span className="card-text">$100/night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
