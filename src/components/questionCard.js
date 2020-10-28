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
       
            {shuffle(answers).map(answer =>{
                
               return  <Button 
               
               onClick={(e) => e.target.innerText.toLowerCase() == correct.toLowerCase()? props.correctAnswer(props.questionData): props.wrongAnswer(props.questionData) }
               variant = {props.answered? 'disabled': 'contained'}
               >

                    {answer}
                </Button>
            })}
           
      </ButtonGroup>

        </div>
        
    )


}
//
export default QuestionCard