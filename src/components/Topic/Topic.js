import React from 'react';

const Topic = ({ topic }) => {

    const { name, total, logo } = topic;

    console.log(name);

    let description = '';



    if (name === 'React') {
        description = 'React is a popular front-end JavaScript library for building UI. Try out your knowledge on React';
    }

    else if (name === 'JavaScript') {
        description = 'JavaScript is the most popular programming language of the web. Test your depth of JavaScript';
    }

    else if (name === 'CSS') {
        description = 'CSS is a style sheet language used for presenting a document written in HTML or XML. Find out how good you are with CSS';

    }

    else if (name === 'Git') {
        description = 'Git is a distributed version control system. Check out your understanding on Git';
    }

    return (
        <div>


            <div className="col">
                <div className="card h-100">

                    {
                        name === 'React' ? <img src={logo} className="border rounded card-img-top bg-dark" alt="..." /> : <img src={logo} className="border rounded card-img-top bg-primary bg-opacity-25" alt="..." />
                    }

                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;