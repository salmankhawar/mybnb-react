import Booking from '../components/Booking'
import Nav from '../components/Nav'
import Reviews from '../components/Reviews'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function House() {
  let {id} = useParams()
  const [house, setHouse] = useState({})
  const [clickedImage, setImage] = useState('')
  async function getHouse() {
    let houseData = await axios.get (`http://localhost:4000/houses/${id}`)
    setHouse(houseData.data)
    setImage(houseData.data.photos[0])
  }
  useEffect(() => {getHouse()}, [])


  return (
    <>
      <Nav />
      <div>
        <div className="container border">
          {/* Grid */} 
          <div className="row row-cols-2">
            {/* Row */}
            <div className="col">
              {/* Column 1 */}
              <img src={clickedImage} />
            </div>
            <div className="col">
              {/* Column 2 */}
              <div className="container">
                {/* Grid 2 Gallery */}
                <div className="row row-cols-3">
                  {/* Gallery has 3 columns */}
                  {house.photos ? house.photos.map((element, i) => (
                    <div className="col" key={i} onClick={e =>(setImage(element))}>
                      <img src={element} />
                    </div>
                  )) : null }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-2">
            <div className="col">
              <h5>{house.title}</h5>
              <span>
                <i className="fa-solid fa-location-dot" /> {house.location} - {house.rooms} Rooms
              </span>
              <div className="container">
                <div className="row row-cols-3">
                  <div className="col">
                    <img src={house.host ? house.host.avatar : null} />
                  </div>
                  <div className="col">
                    <span>Hosted By</span>
                    <span> {house.host ? house.host.name : null}</span>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
              <p>
                {house.description}
              </p>
              <h5>0 Reviews</h5>
              <Reviews />
            </div>
            <Booking house={house} />
          </div>
        </div>
      </div>
    </>
  )
}
