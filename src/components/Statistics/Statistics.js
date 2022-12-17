import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {



    const topics = useLoaderData();

    const { data } = topics;

    // console.log(data);

    // const topicNames = [];
    // const topicTotal = [];

    // data.map((datum) => topicNames.push(datum.name))
    // data.map((datum) => topicTotal.push(datum.total))

    // console.log(topicNames);
    // console.log(topicTotal);

    return (
        <div className='container border rounded mt-5'>
            <div className='container w-75'>
                <h5 className='text-center mb-3'>Number of Questions for each topic</h5>
                <ResponsiveContainer width={'100%'} height={400}>

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />

                    </BarChart>

                </ResponsiveContainer>
            </div>



        </div>






    );
};

export default Statistics;