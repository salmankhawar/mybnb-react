import CreateReview from './CreateReview'
import Review from './Review'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Reviews({API_URL}) {
  const [reviewData, setReview] = useState([])
  let {id} = useParams()
  async function retrieveReviews() {
    let reviews = await axios.get(`${API_URL}/reviews`, {params: {house: id}})
    reviews ? setReview(reviews.data) : null 
    
  }
  useEffect(() => {retrieveReviews()}, [])
  return (
    <>
      {reviewData.map((review,i) => <Review review={review} key={i} />)}
      <CreateReview API_URL={API_URL} />
    </>
  )
}
