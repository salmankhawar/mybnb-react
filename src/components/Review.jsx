export default function Review({review, i}) {
  return (
    <div className="card" key={i}>
      <span>{review.date}</span>
      {review.rating == 1 ?
        <span>
          <i
            className="fa-sharp fa-solid fa-thumbs-up"
            style={{ color: 'darkgreen' }}
          />
        </span>: <i
          className="fa-sharp fa-solid fa-thumbs-down"
          style={{ color: '#dc2909' }}
        /> }
      <h5 className="card-title">{review.author.name}</h5>
      <div className="card-body">{review.description}</div>
    </div>
  )
}
