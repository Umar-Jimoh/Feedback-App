import { createContext, useState, useEffect } from 'react'

const feedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Load feedback from db.json
  const fetchFeedback = async () => {
    const res = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await res.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const res = await fetch(`/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await res.json()

    setFeedback([data, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Set feedback to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })
    const data = await res.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
    setFeedbackEdit({ item: {}, edit: false })
  }

  return (
    <feedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </feedbackContext.Provider>
  )
}

export default feedbackContext
