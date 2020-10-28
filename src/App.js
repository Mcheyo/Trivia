
import React, { Component } from 'react'
import QuestionContainer from './containers/questionContainer'
var shuffle = require('shuffle-array')


class App extends Component{ 
 state={ 
   questionsArray: [], 
   loading: true, 
   showGame: false
 }

 componentDidMount(){ 
  fetch("http://localhost:3000/data")
  .then(res => res.json())
  .then(data => this.setState({
      questionsArray: shuffle.pick((data),{'picks':10}), 
      loading: false
  }))
 }
 start = () => { 
this.setState({ 
  showGame: true
})
 }

  render(){ 
    return( 
    <div> 
      {!this.state.showGame?
      <button onClick={() => this.start() }>
        Start Game
      </button>
      : null}
     {this.state.showGame? <QuestionContainer questionsArray={this.state.questionsArray}/>: "Press Start To play"}
      </div> )
  }
}

export default App;
