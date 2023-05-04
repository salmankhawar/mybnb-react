export default function HouseThumbnail() {
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
  return (
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
  )
}
