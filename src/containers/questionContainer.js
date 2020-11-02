import React, { Component } from 'react'
import QuestionCard from '../components/questionCard'
import Container from '@material-ui/core/Container';
const Swal = require('sweetalert2')


export default class questionContainer extends Component{ 
  state = { 
        questionsArray: [],
        questionToShow: {},
        questionsAnswered: [], 
        answered: false , 
        score: 0
        
    }
    componentDidMount(){ 
        
       this.setState({ 
           questionsArray: this.props.questionsArray, 
           questionToShow: this.props.questionsArray[0]
       })
       }
      


   
loadQuestion = () =>{ 
    if(this.state.questionsAnswered.length < this.state.questionsArray.length){
   let currentQuestion =  this.state.questionsArray.find(question => !this.state.questionsAnswered.includes(question))
   this.setState({ 
       questionToShow: currentQuestion, answered: false
   })
  }
  else{ 
      alert("Game over")
      Swal.fire({
        title: 'Game Over',
    
        imageUrl: 'https://media.giphy.com/media/l2JdZEIie6tRGGQy4/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

     

  }
}
  
 correctAnswer =  (e) => { 
    Swal.fire({
        title: 'Correct',
    
        imageUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
  this.setState ({ 
    questionsAnswered: [...this.state.questionsAnswered, e],
    answered: !this.state.answered, 
    score: this.state.score + 1
})
 
    }

 wrongAnswer = (e) => { 
     
   
     
    Swal.fire({
        title: 'Nice try ',
        text: `The correct answer was ${e.correct}`,
        imageUrl: 'https://media.giphy.com/media/m8eIbBdkJK7Go/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
        this.setState({ 
            questionsAnswered: [...this.state.questionsAnswered, e],
            answered: !this.state.answered
    })

}


    render(){ 
        return( 
            <Container  maxWidth="sm">
            <div>
                {/* <button onClick={() =>this.loadQuestion() }>
                    { this.state.questionsAnswered.length<10? 'Next Question!' : 'Start over'}
                </button> */}
                <h4>
                    Score: {this.state.score}
                </h4>
               {this.state.questionToShow.question? 
               <QuestionCard questionData={this.state.questionToShow} 
               correctAnswer={this.correctAnswer} 
               wrongAnswer={this.wrongAnswer} 
               answered={this.state.answered}
               nextQuestion = {this.loadQuestion}/>
               : null}
            </div>
            </Container>
        )
    }
}