import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import { FeedbackProvider } from './components/contexts/FeedbackContext'
import AboutIcon from './components/AboutIcon'
import About from './components/Pages/About'

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIcon />
                </>
              }
            />

            <Route path='/about/' element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
