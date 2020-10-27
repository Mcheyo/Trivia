import React from 'react'
var shuffle = require('shuffle-array')


const questionCard = (props) =>{ 
    const {correct, incorrect, question} = props.questionData
   let  answers = [...incorrect,correct]

//    function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }



    return( 
        <div>
            <h4>{question}</h4>
            

            {shuffle(answers).map(answer =>{
                
               return  <p onClick={(e) => e.target.innerText == correct? console.log("goodjob"): console.log("try again")}>
                    {answer}
                </p>
            })}
        </div>
    )


}

export default questionCard