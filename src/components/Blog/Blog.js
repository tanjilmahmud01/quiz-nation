import React from 'react';

const Blog = () => {
    return (
        <div className=' w-75 container mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button title-background text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            What is purpose of React Router?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, <strong>allows changing the browser URL,</strong> and keeps the UI in sync with the URL.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed title-background text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            How does Context API work?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the <strong> alternative to "prop drilling"</strong> or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                            Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed title-background text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            What is the use of useRef() hook in React?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            useRef is a React Hook that lets you reference a value that's not needed for rendering.useRef returns <strong>a ref object</strong> with a single <code>current</code> property initially set to the initial value you provided. <strong>Changing a ref does not trigger a re-render.</strong> This means refs are perfect for storing information that doesn't affect the visual output of your component. It is used for <strong>Manupulating the DOM</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Blog;