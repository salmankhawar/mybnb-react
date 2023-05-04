export default function CreateReview() {
  return (
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
      <button className="btn btn-success">Submit</button>
    </form>
  )
}
