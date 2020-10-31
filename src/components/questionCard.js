import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';


var shuffle = require('shuffle-array')


const useStyles = makeStyles({
 root: {
   maxWidth: 345,
 },
});
const QuestionCard = (props) =>{ 
    const {correct, incorrect, question} = props.questionData
   let  answers = [...incorrect,correct]
   const classes = useStyles()




    return( 
        
        <div>
            <Card className={classes.root}>{question}
            </Card>
            <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
       
            {!props.answered?
            shuffle(answers).map( answer =>{
              
                //  !props.answered ?
                  
                   return <Button 
               onClick={(e) => e.target.innerText.toLowerCase() == correct.toLowerCase()? props.correctAnswer(props.questionData): props.wrongAnswer(props.questionData) }
               variant =  'contained'
               >

                    {answer}
                </Button>
            
               })
                : 
                <Button onClick={() => props.nextQuestion()}>
              Next Question! 
                </Button>
              }
           
      </ButtonGroup>

        </div>
        
    )


}
//
export default QuestionCard