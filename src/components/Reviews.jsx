import CreateReview from './CreateReview'
import Review from './Review'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Reviews({API_URL}) {
  let {id} = useParams()
  async function retrieveReviews() {
    let reviews = await axios.get(`${API_URL}/reviews`, {params: {house: id}})
  }
  useEffect(() => {retrieveReviews()}, [])
  return (
    <>
      <Review />
      <CreateReview />
    </>
  )
}
