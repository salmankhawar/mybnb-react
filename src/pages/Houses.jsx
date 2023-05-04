import { useState, useEffect } from 'react'

// States

// const [searchForm, setSearchForm] = useState({})

// useEffect(() => {}, [searchForm])

// Function

// Data
let houses = [
  {
    image:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
    title: 'Luxury Villa in Chewang',
    price: 350,
    location: 'Koh Samui',
    rooms: 4,
    reviews: 3,
    score: 1,
  },
  {
    image:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2002/house_02_01.png',
    title: 'Private Villa Lotus 1',
    price: 150,
    location: 'Koh Phangan',
    rooms: 3,
    reviews: 1,
    score: -1,
  },
]
// Main
export default function House() {
  function sendForm(e) {
    e.preventDefault()
    let form = {
      location: e.target.location.value,
      rooms: e.target.rooms.value,
      price: e.target.price.value,
      sort: e.target.sort.value,
      name: e.target.name.value,
    }
  }

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
          <form onSubmit={(e) => sendForm(e)} className="input-group row">
            <div className="input-group mb-3 col">
              <label className="input-group-text">
                <i className="fa-solid fa-location-dot" />
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                name="location"
                defaultValue="Any Location"
              >
                <option value="Any Location">Any Location</option>
                <option value="Koh Phangan">Koh Phangan</option>
                <option value="Koh Samui">Koh Samui</option>
                <option value="Bali">Bali</option>
              </select>
            </div>
            <div className="input-group mb-3 col">
              <label className="input-group-text">
                <i className="fa-sharp fa-solid fa-house" />
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                name="rooms"
                defaultValue="Any Rooms"
              >
                <option value="Any Rooms">Any Rooms</option>
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4">4 Rooms</option>
                <option value="5">5 Rooms</option>
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
                name="price"
              />
            </div>
            <div className="input-group mb-3 col">
              <label className="input-group-text">
                <i className="fa-sharp fa-solid fa-at" />
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                name="sort"
                defaultValue="low to high"
              >
                <option value="low to high">Price (low to high)</option>
                <option value="high to low">Price (high to low)</option>
              </select>
            </div>
            <div className="input-group mb-3 col">
              <input
                type="text"
                className="form-control"
                placeholder="House Name..."
                name="name"
              />
            </div>
            <div className="input-group mb-3 col">
              <button className="btn btn-success">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-4">
          {houses.map((element, i) => (
            <div className="col" key={i}>
              <div className="card">
                <img src={element.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <span className="card-text">
                    <i className="fa-sharp fa-solid fa-location-dot" />
                    {element.location} - {element.rooms} Rooms
                  </span>
                  <a href="abc.com" className="stretched-link">
                    <h5 className="card-title">{element.title}</h5>
                  </a>
                  <span className="card-text">
                    {element.score == 1 && (
                      <i
                        className="fa-sharp fa-solid fa-thumbs-up"
                        style={{ color: 'darkgreen' }}
                      />
                    )}{' '}
                    {element.score == -1 && (
                      <i
                        className="fa-sharp fa-solid fa-thumbs-down"
                        style={{ color: '#dc2909' }}
                      />
                    )}
                    {element.reviews} Reviews
                  </span>
                  <span className="card-text">${element.price}/night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
