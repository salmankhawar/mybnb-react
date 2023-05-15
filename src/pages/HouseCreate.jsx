import Nav from '../components/Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function HouseCreate() {
  const navigate = useNavigate()

  async function sendForm(e) {
    e.preventDefault()
    let photos = Array.from(e.target.photos).map(e => e.value)
    let house = {
      title: e.target.title.value,
      description: e.target.description.value,
      rooms: e.target.rooms.value,
      location: e.target.location.value,
      price: e.target.price.value,
      photos: photos,
    }  
   
    try {
      let post = await axios.post ('http://localhost:4000/houses', house) 
      console.log(post)
      navigate(`/house/${post.data._id}`)
    } catch (err) {
      console.log(err)
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
              <input name="title" type="text" className="form-control" />
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
                <option value="Koh Samui">Koh Samui</option>
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
