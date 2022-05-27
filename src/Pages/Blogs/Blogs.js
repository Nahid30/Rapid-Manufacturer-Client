import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto px-20 my-12'>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium text-cyan-500">
                    1. How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><p>1. Using Immutable Data Structures</p></li>
                        <li><p>2. Function/Stateless Components and React.PureComponent</p></li>
                        <li><p>3. Multiple Chunk Files</p></li>
                        <li><p>4.Dependency optimization</p></li>
                        <li><p>5. Use React.Fragments to Avoid Additional HTML Element Wrappers</p></li>
                        <li><p>6. Avoid Inline Function Definition in the Render Function.</p></li>
                        <li><p>7. Throttling and Debouncing Event Action in JavaScript</p></li>
                        <li><p>8. Avoid using Index as Key for map</p></li>
                        <li><p>9. Keeping component state local where necessary.</p></li>
                        <li><p>10. Code-splitting in React using dynamic import()</p></li>
                    </ul>

                </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium text-cyan-500">
                    2. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><p className='text-emerald-400	'>There are four different ways to manage a state in a React application:</p></li>
                        <li><p>1. Local state</p></li>
                        <li><p>2. Global state</p></li>
                        <li><p>3. Server state</p></li>
                        <li><p>4. URL state</p></li>

                    </ul>

                </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium text-cyan-500">
                    3. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><p>Prototypal Inheritance using __proto__ in JavaScript.
                            Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p></li>
                    </ul>

                </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium text-cyan-500">
                    4. Why you do not set the state directly in React?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><p className='text-emerald-400	'>One should never update the state directly because of the following reasons:</p></li>
                        <li><p>If you update it directly, calling the setState() afterward may just replace the update you made.</p></li>
                        <li><p>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p></li>
                        <li><p>You will lose control of the state across all components.</p></li>
                    </ul>

                </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-cyan-500">
                5. What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><p> <span className='text-emerald-400'>UNIT TESTING </span> is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p></li>
                       
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Blogs;