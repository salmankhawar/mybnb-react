export default function HouseCreate() {
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
        <div className="row col-12">
          <div className="input-group row">
            <h1>List a House</h1>
            <form>
              <label>Short Title</label>
              <input type="text" className="form-control" />
              <label>Description</label>
              <textarea
                type="text"
                rows={10}
                className="form-control"
                defaultValue={''}
              />
              <label>Number of Rooms</label>
              <input type="number" className="form-control" />
              <label>Location</label>
              <select className="form-control">
                <option>Koh Phangan</option>
                <option selected="">Koh Samui</option>
                <option>Bali</option>
              </select>
              <label>Price per night</label>
              <div>
                <i className="fa-sharp fa-solid fa-dollar-sign" />
                <input type="number" className="form-control" />
              </div>
              <label>Add Photos (up to 9)</label>
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
