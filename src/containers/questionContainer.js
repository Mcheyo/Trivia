import React, { Component } from 'react'
import QuestionCard from '../components/questionCard'

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
          questionsArray: data}))
      }
    render(){ 
        return( 
            <div>
              {this.state.questionsArray.map(question => <QuestionCard questionData={question}/>)}
            </div>
        )
    }
}