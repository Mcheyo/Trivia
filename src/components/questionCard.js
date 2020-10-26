import React from 'react'

const questionCard = (props) =>{ 
    const {correct, incorrect, question} = props.questionData
   let  answers = [...incorrect,correct]

   function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }


    return array
}
    return( 
        <div>
            <h4>{question}</h4>
            

            {shuffleArray(answers).map(answer =>{
                
               return  <p onClick={(e) => console.log(e.target.innerText)}>
                    {answer}
                </p>
            })}
        </div>
    )


}

export default questionCard