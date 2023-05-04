export default function Profile() {
  let user = {
    name: '',
    email: '',
    avatar: '',
  }
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

  function sendForm(e) {
    e.preventDefault()
    user = {
      name: e.target.name.value,
      email: e.target.email.value,
      avatar: e.target.avatar.value,
    }
  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-3">
          <div className="col text-left">
            <img src="images/logo-airbnb.png" />
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
      <div className="container">
        <div className="row cols-2">
          <div className="col col-3">
            <h5>Profile</h5>
            <form onSubmit={(e) => sendForm(e)}>
              <label>Name</label>
              <input name="name" type="text" className="form-control" />
              <label>Email</label>
              <input name="email" type="email" className="form-control" />
              <label>Profile Picture</label>
              <img src="" />
              <input name="avatar" type="text" className="form-control" />
              <button className="btn btn-success">Save Changes</button>
            </form>
          </div>
          <div className="col cols-9">
            <h5>My Listings</h5>
            <button type="button" className="btn btn-success">
              List a House
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
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-success"
                          >
                            View
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
        </div>
      </div>
    </>
  )
}
