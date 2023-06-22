import HouseThumbnail from '../components/HouseThumbnail'
import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

const API_URL = process.env.REACT_APP_API_URL

export default function Houses() {
  const [houses, setHouses] = useState([])
  const [filter, setFilter] = useState([])
  async function getHouses() {
    let housesData = await axios.get(`${API_URL}/houses`)
    setHouses(housesData.data), setFilter(housesData.data)
  }
  useEffect(() => {getHouses()}, [])
  
  async function sendForm(e) {
    e.preventDefault()
    let form = {
      location: e.target.location.value,
      rooms: e.target.rooms.value,
      price: e.target.price.value,
      sort: e.target.sort.value,
      name: e.target.name.value,
    }
    let search = await axios.get(`${API_URL}/houses`, {params: form})
    setHouses(search.data)
  }
  
   
  return (
    <>
      <Nav />
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
                defaultValue=""
              >
                <option value="">Any Location</option>
                {filter.map((house, i) => <option value={house.location} key={i}>{house.location}</option>)}
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
                defaultValue=""
              >
                <option value="">Any Rooms</option>
                {filter.map((house, i) => <option value={house.rooms} key={i}>{house.rooms} Rooms</option>)}  
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
                defaultValue="price"
              >
                <option value="price">Price (low to high)</option>
                <option value="-price">Price (high to low)</option>
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
          {houses.map((house, i) => <HouseThumbnail house={house} key={i} /> )}
        </div>
      </div>
    </>
  )
}
