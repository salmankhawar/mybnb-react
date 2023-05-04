import Nav from '../components/Nav'

export default function HouseCreate() {
  let house = {
    shortTitle: '',
    description: '',
    rooms: 0,
    location: '',
    price: 0,
    photos: [],
  }

  function sendForm(e) {
    e.preventDefault()
    house = {
      shortTitle: e.target.shortTitle.value,
      description: e.target.description.value,
      rooms: e.target.rooms.value,
      location: e.target.location.value,
      price: e.target.price.value,
      photos: e.target.photos,
    }
  }
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row col-12">
          <div className="input-group row">
            <h1>List a House</h1>
            <form onSubmit={(e) => sendForm(e)}>
              <label>Short Title</label>
              <input name="shortTitle" type="text" className="form-control" />
              <label>Description</label>
              <textarea
                name="description"
                type="text"
                rows={10}
                className="form-control"
                defaultValue={''}
              />
              <label>Number of Rooms</label>
              <input name="rooms" type="number" className="form-control" />
              <label>Location</label>
              <select
                name="location"
                defaultValue="Koh Phangan"
                className="form-control"
              >
                <option value="Koh Phangan">Koh Phangan</option>
                <option value="Koh Sumai">Koh Samui</option>
                <option value="Bali">Bali</option>
              </select>
              <label>Price per night</label>
              <div>
                <i className="fa-sharp fa-solid fa-dollar-sign" />
                <input name="price" type="number" className="form-control" />
              </div>
              <label>Add Photos (up to 9)</label>
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <input
                name="photos"
                type="text"
                className="form-control"
                placeholder="http://..."
              />
              <button className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
