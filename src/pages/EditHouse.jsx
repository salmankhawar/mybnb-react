import Nav from '../components/Nav'
export default function EditHouse() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row col-12">
          <div className="input-group row">
            <h1>Edit House</h1>
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
                <option defaultValue="">Koh Samui</option>
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
                Save Changes
              </button>
              <button type="button" className="btn btn-danger">
                Delete House
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
