import React, { Component } from 'react'
import QuestionCard from '../components/questionCard'
import Container from '@material-ui/core/Container';


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
  }
}
  
 correctAnswer =  (e) => { 
alert("good job!")
  this.setState ({ 
    questionsAnswered: [...this.state.questionsAnswered, e],
    answered: !this.state.answered, 
    score: this.state.score + 1
})
 
    }

 wrongAnswer = (e) => { 
     
        alert("bummer, wrong answer")
        this.setState({ 
            questionsAnswered: [...this.state.questionsAnswered, e],
            answered: !this.state.answered
    })

}


    render(){ 
        return( 
            <Container  maxWidth="sm">
            <div>
                <button onClick={() =>this.loadQuestion() }>
                    { this.state.questionsAnswered.length<10? 'Next Question!' : 'Start over'}
                </button>
                <h4>
                    Score: {this.state.score}
                </h4>
               {this.state.questionToShow.question? 
               <QuestionCard questionData={this.state.questionToShow} 
               correctAnswer={this.correctAnswer} 
               wrongAnswer={this.wrongAnswer} 
               answered={this.state.answered}/>
               : null}
            </div>
            </Container>
        )
    }
}