import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'



export default function createReview({API_URL}) {
  const [newRating, setRating] = useState(0)
  let {id} = useParams()
  
  async function createReview(e) {
    e.preventDefault() 
    let review = {
      house : id,
      description: e.target.description.value,
      rating : newRating 
    }
    await axios.post(`${API_URL}/reviews`, review)
  }
  return (
    <form onSubmit={(e) => createReview(e) }>
      <span>Leave a review</span>
      <textarea  name="description" rows={7} defaultValue={''} />
      <span>
        <i onClick={() => setRating(1)}
          className="fa-sharp fa-solid fa-thumbs-up"
          style={{ color: 'darkgreen' }}
        />
        <i onClick={() => setRating(-1)}
          className="fa-sharp fa-solid fa-thumbs-down"
          style={{ color: '#dc2909' }}
        />
      </span>
      <button className="btn btn-success">Submit</button>
    </form>
  )
}
