export default function Booking({house}) {
  return (
    <div className="col">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">${house.price}/Night</h5>
          <span className="card-text">0 Reviews</span>
          <form>
            <textarea
              rows={5}
              placeholder="Send the host a message..."
              defaultValue={''}
            />
            <button className="btn btn-success">Request Booking</button>
          </form>
        </div>
      </div>
    </div>
  )
}

// After Submitting request */}
//      <div class="col">
// <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">$350/Night</h5>
//     <span class="card-text">0 Reviews</span>
//     <div class="card bg-light text-success"><strong>Thank you for your inquiry</strong>
//     <span>Sent on 02 Jan 2022 -01:01 </span>
//     </div>
