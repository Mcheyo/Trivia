import React, { Component } from 'react'
import QuestionCard from '../components/questionCard'
 var shuffle = require('shuffle-array')


export default class questionContainer extends Component{ 
  state ={ 
        questionsArray: [],
        quesitonToShow: {},
        questionsAnswered: []
    }
    componentDidMount(){ 
        fetch("http://localhost:3000/data")
        .then(res => res.json())
        .then(data => this.setState({
            questionsArray: shuffle(data)
        }))
       }
      


   
    
    // startGame = () =>{ 
    //     let questions = [...this.state.questionsArray]
    //    this.setState({ 
    //        questionsArray: shuffle(questions)
    //    })
       
       
    // }


    render(){ 
        return( 
            <div>
                <button onClick={() =>this.startGame() }>
                    Play! 
                </button>
              {this.state.questionsArray.map(question => <QuestionCard questionData={question}/>)}
            </div>
        )
    }
}