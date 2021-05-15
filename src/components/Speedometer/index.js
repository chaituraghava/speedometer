import '/index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="speed-cont">
          <h1 className="heading">Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <div className="button-container">
            <h1 className="speed">
              Speed is <span>{speed}mph</span>
            </h1>
            <p className="description">
              Min Limit is 0mph, Max Limit is 200mph
            </p>
            <button
              type="button"
              className="increase"
              onClick={this.onAccelerate}
            >
              accelerate
            </button>
            <button type="button" className="decrease" onClick={this.onBrake}>
              apply brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
