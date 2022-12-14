import React from 'react';
import './Question.css'

const Question = ({ singleQuestion, questionCount }) => {

    const { correctAnswer, id, options, question } = singleQuestion;



    let numberOfRightAnswer = 0;
    let numberOfWrongAnswer = 0;

    const handleClickOption = (option) => {
        if (option === correctAnswer) {
            console.log('correct!');
            showCorrectAnswerToast();
        }
        else {
            console.log('incorrect!');
        }
    }

    console.log(correctAnswer);

    const showCorrectAnswerToast = () => {
        alert('hello!');
    }




    return (


        <div className='container border rounded mb-4 mt-5 shadow'>

            <div className=''>
                <h4 className='question-text text-center mb-5'>Question-{questionCount}: {question}</h4>

            </div>

            <div className='container mb-5 d-flex flex-column justify-content-evenly'>
                {
                    options.map((option) => {
                        return <button onClick={() => handleClickOption(option)} className='container btn option-btn mb-2 d-flex justify-content-center py-2 px-4 option-width'>
                            {option}
                        </button>
                    })
                }
            </div>

        </div>


    );
};

export default Question;