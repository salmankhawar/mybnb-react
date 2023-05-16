import { Link } from 'react-router-dom'
export default function HouseThumbnail({house, i}) {
  
  return (
    
    <div className="col" key={i}>
      <div className="card">
        <img src={house.photos[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="card-text">
            <i className="fa-sharp fa-solid fa-location-dot" />
            {house.location} - {house.rooms} Rooms
          </span>
          <Link to={`/house/${house._id}`}>
            <h5 className="card-title">{house.title}</h5>
          </Link>

          <span className="card-text">
            {house.score == 1 && (
              <i
                className="fa-sharp fa-solid fa-thumbs-up"
                style={{ color: 'darkgreen' }}
              />
            )}{' '}
            {house.score == -1 && (
              <i
                className="fa-sharp fa-solid fa-thumbs-down"
                style={{ color: '#dc2909' }}
              />
            )}
            {house.reviews} Reviews  
          </span>
          <span className="card-text">${house.price}/night</span>
        </div>
      </div>
    </div>
     
  )
}
