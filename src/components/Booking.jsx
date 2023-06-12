import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const API_URL = process.env.REACT_APP_API_URL


export default function Booking({house, API_URL}) {
  const [booked, setBooked] = useState(false)
  let {id} = useParams()
  async function createBooking(e) {
    e.preventDefault() 
    let booking = {
      description: e.target.description.value,
      house: id
    }
    let post = await axios.post(`${API_URL}/bookings`, booking)
    setBooked(true)
  }

  async function retrieveBooking() {
    let newBooking = await axios.get(`${API_URL}/bookings`, {params: {house: id}})
    newBooking.data._id ? setBooked(true) : null
  }
  useEffect(() => {retrieveBooking()}, [])

  return (
    <div className="col">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">${house.price}/Night</h5>
          <span className="card-text">{house.reviews} Reviews</span>
          {!booked ? 
            (<form onSubmit={(e) => createBooking(e) }>
              <textarea
                name="description"
                rows={5}
                placeholder="Send the host a message..."
                defaultValue={''}
              />
              <button className="btn btn-success">Request Booking</button>
            </form>)
            : (<div className="card bg-light text-success"><strong>Thank you for your inquiry</strong> </div>)
          }
        </div>
      </div>
    </div>
  )
}


    
