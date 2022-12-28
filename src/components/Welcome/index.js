// Write your code here
import React from 'react'
import './index.css'

class Welcome extends React.Component {
  state = {subsribedStatus: false}

  isSubscribed = () => {
    const {subsribedStatus} = this.state
    this.setState({subsribedStatus: !subsribedStatus})
  }

  render() {
    const {subsribedStatus} = this.state
    return (
      <div className="CardContainer">
        <h1>Welcome</h1>
        <p>Thank You! Happy Learning</p>

        {subsribedStatus ? (
          <button onClick={this.isSubscribed}>Subscribed</button>
        ) : (
          <button onClick={this.isSubscribed}>Subscribe</button>
        )}
      </div>
    )
  }
}

export default Welcome
