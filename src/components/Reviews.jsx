import CreateReview from './CreateReview'
import Review from './Review'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Reviews() {
  let {id} = useParams()
  async function retrieveReviews() {
    let reviews = await axios.get('http://localhost:4000/reviews', {params: {house: id}})
    console.log(reviews.data)
  }
  useEffect(() => {retrieveReviews()}, [])
  return (
    <>
      <Review />
      <CreateReview />
    </>
  )
}
