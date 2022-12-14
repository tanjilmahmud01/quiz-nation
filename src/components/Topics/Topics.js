import React from 'react';
import Header from '../Header/Header';

import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {

    const topics = useLoaderData();

    console.log(topics);

    const { data, status } = topics;



    return (
        <div>
            <Header></Header>

            <div className='container'>
                <div className='container mt-5 row row-cols-1 row-cols-md-4 border border-danger'>
                    {


                        data.map(topic => <Topic
                            topic={topic}
                            key={topic.id}
                        >
                        </Topic>)
                    }
                </div>
            </div>





        </div >
    );
};

export default Topics;