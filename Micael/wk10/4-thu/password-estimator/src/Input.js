import React from 'react'
import estimateStrength from './estimateStrength'
import starsGenerator from './starGenerator'


class Input extends React.Component{
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      starNumber: 0
    }
  }

  handleChange(event){
    event.persist()
    let starNumber = estimateStrength(event.target.value).score
    this.setState({
      starNumber: starNumber
    })
  }

  createStars(starNumber){
    return new Array(starNumber).fill('').map((key) => <i className="far fa-star"></i>)
  }

  render(){
    return <section>
      <input type="text" onChange={this.handleChange}/>
      <div class="stars">
      {this.createStars(this.state.starNumber)}
      </div>
    </section>
  }
}

export default Input