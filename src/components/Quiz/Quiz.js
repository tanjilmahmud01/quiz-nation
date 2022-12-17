import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
    const questionDetails = useLoaderData();

    const { data } = questionDetails;

    const { id, logo, name, questions, total } = data;

    let questionCount = 1;

    const notify = () => toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });



    return (
        <div>
            <h2 className='text-center mt-3'>Quiz of {name}</h2>

            {/* <h2>Number of correct answer: </h2>
            <h2>Number of Incorrect answer: </h2> */}

            {
                questions.map((singleQuestion) => {



                    return <Question
                        singleQuestion={singleQuestion}
                        key={singleQuestion.id}
                        questionCount={questionCount++}
                    ></Question>
                })
            }

            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />


            </div>
        </div>
    );
};

export default Quiz;