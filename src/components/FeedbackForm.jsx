import { useState, useContext, useEffect } from 'react'
import feedbackContext from './contexts/FeedbackContext'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

function FeedbackForm({ errMessage }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDiabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(feedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDiabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = ({ target: { value } }) => {
    setText(value)

    if (value === '') {
      setBtnDiabled(true)
      setMessage('')
    } else if (value !== '' && value.trim().length <= 10) {
      setBtnDiabled(true)
      setMessage(errMessage)
    } else {
      setMessage(null)
      setBtnDiabled(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
      setBtnDiabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            placeholder='write a review'
            value={text}
          />
          <Button type='submit' text='send' btnDisabled={btnDisabled} />
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

FeedbackForm.defaultProps = {
  errMessage: 'minimum of 10 characters',
}

export default FeedbackForm
