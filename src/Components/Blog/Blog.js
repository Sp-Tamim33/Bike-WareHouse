import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-10 py-10'>
            <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Difference between javascript and nodejs</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    1) Javascript is a programming language that is used for writing scripts on the website.NodeJS is a Javascript runtime environment.
                    2) Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS. 3) It is basically used on the client-side.	It is mostly used on the server-side.</p>
            </div>




            <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">When should you use nodejs and when should you use mongodb</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                    <br />
                    <br />
                    MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

                    MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</p>
            </div>



            <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Differences between sql and nosql databases.</h5>
                <h6 className='mt-3 text-xl text-white'>SQL :</h6>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    <ul className='no-underline'>
                        <li>1) RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). </li>
                        <li>2) These databases have fixed or static or predefined schema.</li>
                        <li>3) These databases are not suited for hierarchical data storage.</li>
                    </ul>
                </p>
                <h6 className='mt-3 text-xl text-white'>No-SQL :</h6>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    <ul className='no-underline'>
                        <li>1) Non-relational or distributed database system. </li>
                        <li>2) They have dynamic schema</li>
                        <li>3) These databases are best suited for hierarchical data storage.</li>
                    </ul>
                </p>
            </div>



            <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> What is the purpose of jwt and how does it work</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                    <br />
                    <br />
                    <br />

                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:

                    The header and the payload.
                    The signature. </p>
            </div>
        </div>
    );
};

export default Blog;