import React from 'react';

const Blog = () => {
    return (
        <div className="m-10">
            <div className="m-10">
                <h1> what is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.</p>
            </div>
            <div className="m-10">
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.</p>
            </div>
            <div className="m-10">
                <h1>How does the private route work?</h1>
                <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start</p>
            </div>
            <div className="qsn">
                <h1> What is Node? How does Node work?</h1>
                <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
        </div>
    );
};

export default Blog;