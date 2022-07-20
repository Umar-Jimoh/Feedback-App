import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import feedbackContext from './contexts/FeedbackContext'
import Spinner from './shared/Spinner'
import FeedbackItem from './FeedbackItem'

function FeedbackList() {
  const {feedback, isLoading} = useContext(feedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet</p>
  }
  
  return isLoading ? (
    <Spinner />
  ) : (
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
    </AnimatePresence>

          /* {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))} */
  )

}

export default FeedbackList
