import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
axios.defaults.withCredentials = true

export default function Listings({userInfo, API_URL}) {
  const [user, setUser] = useState(userInfo)
  const [houses, setHouses] = useState([])
  async function getListings() {
    if (userInfo) {
      let housesData = await axios.get(`${API_URL}/houses?user=${user._id}`)
      setHouses(housesData.data)
    }
  }
  useEffect(() => {getListings()}, [user])
  useEffect(() => {
    setUser(userInfo)
  })

  return (
    <div className="col cols-9">
      <h5>My Listings</h5>
      <button className="btn btn-success">
        <Link to="/housecreate">List a House</Link>
      </button>
      <div>
        {Array.isArray(houses) && houses.length > 0 ? (
          houses.map((element, i) => (
            <div key={i} className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={element.photos[0]}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <span className="card-text">
                      {element.rooms} Rooms - ${element.price}/night
                    </span>
                    <p className="card-text">{element.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated {element.updated}
                      </small>
                    </p>
                    <button className="btn btn-outline-secondary">
                      <Link to="/edithouse">Edit</Link>
                    </button>
                    <button className="btn btn-outline-success">
                      <Link to="/house">View</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="card">
            <span>You don't have any houses listed</span>
          </div>
        )}
      </div>
    </div>
  )
}
