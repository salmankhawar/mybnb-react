import { Link } from 'react-router-dom'
export default function HouseThumbnail({house, i}) {
  return (
    
    <div className="col" key={i}>
      <div className="card">
        <Link to={`/house/${house._id}`}
          className="text-decoration-none text-black">
          <img src={house.photos[0]} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="card-text">
              <i className="fa-sharp fa-solid fa-location-dot" />
              {house.location} - {house.rooms} Rooms
            </span>
            <h5 className="card-title">{house.title}</h5>
            <span className="card-text">
              {house.rating == 1 && (
                <i
                  className="fa-sharp fa-solid fa-thumbs-up"
                  style={{ color: 'darkgreen' }}
                />
              )}{' '}
              {house.rating == -1 && (
                <i
                  className="fa-sharp fa-solid fa-thumbs-down"
                  style={{ color: '#dc2909' }}
                />
              )}
              {house.reviews} Reviews  
            </span>
            <span className="card-text">${house.price}/night</span>
          </div>
        </Link>
      </div>
    </div>
     
  )
}
