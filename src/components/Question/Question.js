import React, { useState } from 'react';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'





const Question = ({ singleQuestion, questionCount }) => {

    const { correctAnswer, id, options, question } = singleQuestion;

    const [selected, setSelected] = useState(false);
    const [numberOfRightAnswer, setNumberOfRightAnswer] = useState(0);
    const [numberOfWrongAnswer, setNumberOfWrongAnswer] = useState(0);

    const [seen, setSeen] = useState(false);

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
        toast.success('Correct!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    const showCorrectAnswer = () => {
        toast.info(`Correct Answer: ${correctAnswer}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setSeen(seen => !seen);

    }

    const dismiss = () => {
        toast.dismiss();
        setSeen(seen => !seen);
    }
    const showIncorrectAnswerToast = () => {
        toast.error('Incorrect!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }








    return (


        <div className='container border rounded mb-4 mt-5 shadow'>
            <div className='d-flex justify-content-around '>
                <div className=''>
                    <h4 className='question-text text-center mb-5'>Question-{questionCount}: {question}</h4>

                </div>

                <div className=''>
                    {

                        seen ? <button onClick={dismiss} className=' btn'>
                            <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                        </button> : <button onClick={showCorrectAnswer} className=' btn'>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        </button>
                    }

                </div>
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

