export default function House() {
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
      {/* with Reviews */}
      {/* <div class="container"> 
<div class="row row-cols-2">
  <div class="col">
    <h5>Luxury Villa in Chewang</h5>
    <span><i class="fa-solid fa-location-dot"></i> Koh Samui - 4 Rooms</span>
    <div class="container">
      <div class="row row-cols-3">
        <div class="col">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" />
        </div>
        <div class="col">
          <span>Hosted By</span>
          <span>Tony Russo</span>
        </div>
        <div class="col">

        </div>
      </div>
    </div>
    <p>
      Stylish, tropical, luxurious, airy and absolute stunning view over the the bay of Chewang, this villa 
    </p>
    <h5>2 Reviews</h5>
    <form>
    <span>Leave a review</span>
    <textarea rows="7"></textarea>
    <span><i class="fa-sharp fa-solid fa-thumbs-up" style="color: darkgreen;"></i><i class="fa-sharp fa-solid fa-thumbs-down" style="color: #dc2909;"></i></span>
    <button type="button" class="btn btn-success">Submit</button>
    </form>
    <div class="card">
      <span>02 Jan 2022</span>
      <span><i class="fa-sharp fa-solid fa-thumbs-up" style="color: darkgreen;"></i></span>
      <h5 class="card-title">Peter Lewis</h5>
      <div class="card-body">
        This place is fantastic
      </div>
    </div>
    <div class="card">
      <span>02 Jan 2022</span>
      <span><i class="fa-sharp fa-solid fa-thumbs-up" style="color: darkgreen;"></i></span>
      <h5 class="card-title">Peter Lewis</h5>
      <div class="card-body">
        This place is fantastic
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">$350/Night</h5>
        <span class="card-text"><i class="fa-sharp fa-solid fa-thumbs-up" style="color: darkgreen;"></i>2 Reviews</span>
        <form>
          <textarea rows="5" placeholder="Send the host a message..."></textarea>
          <button type="button" class="btn btn-success">Request Booking</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </div> */}
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
            <form>
              <span>Leave a review</span>
              <textarea rows={7} defaultValue={''} />
              <span>
                <i
                  className="fa-sharp fa-solid fa-thumbs-up"
                  style={{ color: 'darkgreen' }}
                />
                <i
                  className="fa-sharp fa-solid fa-thumbs-down"
                  style={{ color: '#dc2909' }}
                />
              </span>
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">$350/Night</h5>
                <span className="card-text">0 Reviews</span>
                <form>
                  <textarea
                    rows={5}
                    placeholder="Send the host a message..."
                    defaultValue={''}
                  />
                  <button type="button" className="btn btn-success">
                    Request Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* After Submitting request */}
          {/* <div class="col">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">$350/Night</h5>
        <span class="card-text">0 Reviews</span>
        <div class="card bg-light text-success"><strong>Thank you for your inquiry</strong>
        <span>Sent on 02 Jan 2022 -01:01 </span>
        </div> */}
        </div>
      </div>
    </>
  )
}
