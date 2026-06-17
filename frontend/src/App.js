import React from 'react'

const App = () => {
  return (
    <><div center>Ai blogs</div><ul>
      <li>AI in Healthcare</li>
      <li>AI in Finance</li>
      <li>AI in Education</li>
      <li>AI in Transportation</li>
      <li>AI in Entertainment</li>
      <li>AI in Agriculture</li>
      <li>AI in Cybersecurity</li>
      <li>AI in Robotics</li>
      <li>AI in Natural Language Processing</li>
      <li>AI in Computer Vision</li>
    </ul>
    {/* create form which will contain name and email and message and submit button */}
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App
