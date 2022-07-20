import { FaTimes } from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import feedbackContext from './contexts/FeedbackContext'
import Card from './shared/Card'

function FeedbackItem({ item }) {

    const {deleteFeedback, editFeedback} = useContext(feedbackContext)


    return (
      <Card>
          <div className='num-display'>{item.rating}</div>

          <button className='edit' onClick={() => editFeedback(item)}>
          {<FaEdit color='purple'/>}
          </button>

          <button
            className='close'
            onClick={() => {
              deleteFeedback(item.id)
            }}
            >
            {<FaTimes color='purple' />}
          </button>
  
          <div className='text-display'>{item.text}</div>
      </Card>
    )
  
  }
  export default FeedbackItem
  