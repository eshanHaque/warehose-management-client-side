import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='mt-3 mb-2'>
                <h2>Different between JS and NodeJS</h2>
                <p><b>Javascript</b></p><br />
                <p>Javasript is a programming language. JS used for writing scripts on the website. It can only be run in the browsers. It is used for frontend development. </p><br />
                <p><b>NodeJS</b></p><br />
                NodeJS is a Javascript runtime environment. We can run Javascript outside of the browser with the help of NodeJs. its used for server-side development.
            </div>
            <div className='mt-3 mb-2'>
                <h2>When should use MongoDB and when Should use NodeJS</h2>
                <p>NodeJs is used for making server side and MongoDB for storing data. Any project  needs a programming environment and a runtime library that offers you basic programming tools and can compile and  interpret our code. nodejs is a tool for javascript</p> When our application need store data and update it later we need to use MongoDB.
            </div>
        </div>
    );
};

export default Blogs;