import Booking from '../components/Booking'
import Nav from '../components/Nav'
import Reviews from '../components/Reviews'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function House() {
  let {id} = useParams()
  const [house, setHouse] = useState({})
  async function getHouse() {
    let houseData = await axios.get (`http://localhost:4000/houses/${id}`)
    setHouse(houseData)
  }
  useEffect(() => {getHouse()}, [])

  return (
    <>
      <Nav />
      <div className="container border">
        {/* Grid */}
        <div className="row row-cols-2">
          {/* Row */}
          <div className="col">
            {/* Column 1 */}
            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" />
          </div>
          <div className="col">
            {/* Column 2 */}
            <div className="container">
              {/* Grid 2 Gallery */}
              <div className="row row-cols-3">
                {/* Gallery has 3 columns */}
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png" />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png" />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png" />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png" />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png" />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png" />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png" />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-2">
          <div className="col">
            <h5>Luxury Villa in Chewang</h5>
            <span>
              <i className="fa-solid fa-location-dot" /> Koh Samui - 4 Rooms
            </span>
            <div className="container">
              <div className="row row-cols-3">
                <div className="col">
                  <img src="https://randomuser.me/api/portraits/men/11.jpg" />
                </div>
                <div className="col">
                  <span>Hosted By</span>
                  <span>Tony Russo</span>
                </div>
                <div className="col"></div>
              </div>
            </div>
            <p>
              Stylish, tropical, luxurious, airy and absolute stunning view over
              the the bay of Chewang, this villa
            </p>
            <h5>0 Reviews</h5>
            <Reviews />
          </div>
          <Booking />
        </div>
      </div>
    </>
  )
}
