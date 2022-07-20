import {useContext} from 'react'
import feedbackContext from './contexts/FeedbackContext'

function FeedbackStat() {

  const {feedback} = useContext(feedbackContext)
    
  
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace('.0','')
  
  return (
    <div className='feedback-stats'>
      <h3>{feedback.length} Reviews</h3>
      <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  )
}

export default FeedbackStat
