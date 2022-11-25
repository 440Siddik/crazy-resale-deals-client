import React from 'react';

const Blogs = () => {
  return (
    <div className="mx-[5%] my-10">
      <h3 className="text-3xl text-center font-semibold text-orange-500 my-5">
        Some Common Questions
      </h3>
      <h2 className="text-2xl font-medium my-2">
        Ques 1 : What are the different ways to manage a state in a React
        application?
      </h2>
      <p className="text-xl my-3">
        Ans : There are four Kinds of React State to Manage. 1. Local state
        <br />
        2. Global state
        <br />
        3. Server state
        <br />
        4. URL state.
      </p>
      <h2 className="text-2xl font-medium my-2">
        How does prototypical inheritance work?
      </h2>
      <p className="text-xl my-3">
        Ans : The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object.
      </p>
      <h2 className="text-2xl font-medium my-2">
        What is a unit test? Why should we write unit tests?
      </h2>
      <p className="text-xl my-3">
        Ans : The main objective of unit testing is to isolate written code to
        test and determine if it works as intended. Unit testing is an important
        step in the development process, because if done correctly, it can help
        detect early flaws in code which may be more difficult to find in later
        testing stages.
      </p>
      <h2 className="text-2xl font-medium my-2">React vs. Angular vs. Vue?</h2>
      <p className="text-xl my-3">
        Ans : Both - Angular JS and React JS frameworks are used to create web
        interfaces for front end development. Angular is Google's matured and
        advanced JavaScript framework based on TypeScript, whereas Vue is a
        progressive open-source front-end JavaScript framework created by Evan
        You.
      </p>
    </div>
  );
};

export default Blogs;