import {Link} from 'react-router-dom'
import Card from '../shared/Card'

function About() {
  return (
    <Card>
      <h1>About Us</h1>
      <p>This is a Feedback App to give feedback to product or service.</p>
      <h4>Version: 1.0.0</h4>
      <Link to='/'>Back to home</Link>
    </Card>
  )
}

export default About
