
import React, { Component } from 'react'
import QuestionContainer from './containers/questionContainer'
var shuffle = require('shuffle-array')


class App extends Component{ 
 state={ 
   questionsArray: [], 
   questionsToPlay: [],
   loading: true, 
   showGame: false, 
   highScore: 0 
 }

 componentDidMount(){ 
  fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(data => this.setState({
      questionsArray: data, 
      loading: false
  }))
 }
 start = () => { 
// let shuffledQuestions = [...this.state.questionsArray]
 let shuffledQuestions = shuffle.pick([...this.state.questionsArray], { 'picks': 10 })

this.setState({ 
  showGame: true, 
  questionsToPlay: shuffledQuestions
})
 }

 setHighScore = (score) => { 
this.setState({ 
  highScore: score
})
 }

  render(){ 
    return( 
    <div> 
      <h3>
        Current HighScore: {this.state.highScore}
      </h3>

      {!this.state.showGame?
      <button onClick={() => this.start() }>
        Start Game
      </button>
      : null}
     {this.state.showGame? <QuestionContainer questionsArray={this.state.questionsToPlay} restart={this.start} setHighScore={this.setHighScore}/>: "Press Start To play"}
      </div> )
  }
}

export default App;
