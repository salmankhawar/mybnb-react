import { Link } from 'react-router-dom'
export default function Listings() {
  let houses = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chewang',
      price: 350,
      rooms: 4,
      description:
        'This is a wider card with supporting text below as natural lead in to additional content. This content is a little bit longer.',
      updated: '3 mins',
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
      description: 'we have nothing to say here',
      updated: '30 mins',
    },
  ]
  return (
    <div className="col cols-9">
      <h5>My Listings</h5>
      <button className="btn btn-success">
        <Link to="/housecreate">List a House</Link>
      </button>
      <div>
        {houses.length > 0 ? (
          houses.map((element, i) => (
            <div key={i} className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={element.image}
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
                        Last updated {element.updated} ago
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
          <div class="card">
            <span>You don't have any houses listed</span>
          </div>
        )}
      </div>
    </div>
  )
}
