import React, { useState } from 'react';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Question = ({ singleQuestion, questionCount }) => {

    const { correctAnswer, id, options, question } = singleQuestion;

    const [selected, setSelected] = useState(false);
    const [numberOfRightAnswer, setNumberOfRightAnswer] = useState(0);
    const [numberOfWrongAnswer, setNumberOfWrongAnswer] = useState(0);



    const notify = (option) => {
        if (option === correctAnswer) {

            showCorrectAnswerToast();
        }
        else {
            showIncorrectAnswerToast();
        }
        setSelected(true);
    }



    const showCorrectAnswerToast = () => {
        toast('Correct!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

    }
    const showIncorrectAnswerToast = () => {
        toast('Incorrect!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

    }

    console.log(numberOfRightAnswer, numberOfWrongAnswer);






    return (


        <div className='container border rounded mb-4 mt-5 shadow'>

            <div className=''>
                <h4 className='question-text text-center mb-5'>Question-{questionCount}: {question}</h4>

            </div>

            <div className='container mb-5 d-flex flex-column justify-content-evenly'>
                {
                    options.map((option, idx) => {
                        return (
                            <div>
                                <button key={idx} onClick={() => notify(option)} className='container btn option-btn mb-2 d-flex justify-content-center py-2 px-4 option-width'>
                                    {option}
                                </button>

                            </div>
                        )


                    })
                }



            </div>


        </div>




    );
};

export default Question;

// { () => handleClickOption(option) } 