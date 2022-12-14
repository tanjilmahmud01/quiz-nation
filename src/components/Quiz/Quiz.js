import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const questionDetails = useLoaderData();

    const { data } = questionDetails;

    const { id, logo, name, questions, total } = data;

    let questionCount = 1;





    return (
        <div>
            <h2>Quiz of {name}</h2>



            {
                questions.map((singleQuestion) => {



                    return <Question
                        singleQuestion={singleQuestion}
                        key={singleQuestion.id}
                        questionCount={questionCount++}
                    ></Question>
                })
            }
        </div>
    );
};

export default Quiz;