import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
      <div className="feedback">
        <h2 className="feedback--title">Feedback</h2>
        <img src='/assets/feedback-image.png' className="feedback--image" alt="table"/>

        <form className="feedbackForm">
            <div>
                <label className="feedbackForm--label">NAME</label><br/>
                <input type="text" className="feedbackForm--input"/>
            </div>
            <div>
                <label className="feedbackForm--label">EMAIL</label><br/>
                <input type="email" className="feedbackForm--input"/>
            </div>
            <div>
                <label className="feedbackForm--label">MESSAGE</label><br/>
                <input type="text" className="feedbackForm--input"/>
            </div><br/>
            <button className="feedbackForm--button">SEND</button>
        </form>
      </div>
  )
}

export default Feedback;