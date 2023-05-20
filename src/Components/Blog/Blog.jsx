import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="container mx-auto py-[60px] px-3 md:px-0">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-5">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p className="mb-4 text-lg">
          An access token is a short-lived, limited-privilege credential that is
          used to access protected resources. A refresh token is a long-lived,
          high-privilege credential that can be used to obtain new access
          tokens.
        </p>
        <p className="mb-4 text-lg">
          Access tokens are typically used to access resources that are only
          needed for a short period of time, such as a user's profile
          information. Refresh tokens are typically used to access resources
          that are needed for a longer period of time, such as a user's email
          inbox.
        </p>
        <p className="mb-4 text-lg">
          Access tokens are typically stored in the browser's local storage or
          cookies. Refresh tokens are typically stored in a secure location,
          such as a database or a hardware security module.
        </p>
        <p className="mb-4 text-lg font-semibold">
          Here is how access tokens and refresh tokens work:
        </p>
        <ul className="mb-4">
          <li className="mb-2 text-lg">
            The user authenticates with the authorization server.
          </li>
          <li className="mb-2 text-lg">
            The authorization server issues the user an access token and a
            refresh token.
          </li>
          <li className="mb-2 text-lg">
            The client stores the access token in the browser's local storage or
            cookies.
          </li>
          <li className="mb-2 text-lg">
            The client uses the access token to access protected resources.
          </li>
        </ul>
        <p className="mb-4 text-lg font-semibold">
          Here are some best practices for storing access tokens and refresh
          tokens:
        </p>
        <ul className="mb-4">
          <li className="mb-2 text-lg">
            Store access tokens in the browser's local storage or cookies.
          </li>
          <li className="mb-2 text-lg">
            Store refresh tokens in a secure location, such as a database or a
            hardware security module.
          </li>
          <li className="mb-2 text-lg">
            Encrypt access tokens and refresh tokens before storing them.
          </li>
          <li className="mb-2 text-lg">
            Use a strong encryption algorithm, such as AES-256.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-5">
          What is express js? What is Nest JS ?
        </h2>
        <p className="mb-4 text-lg">
          Express.js and NestJS are both web application frameworks for Node.js.
          They are both open source and have large communities of developers.
        </p>
        <p className="mb-4 text-lg">
        Express.js is a minimal framework that provides routing, middleware, and other basic functionality for building web applications. It is often used as a starting point for building more complex applications with other frameworks or libraries.
        </p>
        <p className="mb-4 text-lg">
        NestJS is a framework that builds on top of Express.js and provides a more opinionated and structured approach to building web applications. It uses the Model-View-Controller (MVC) design pattern and provides a number of features that make it easier to build scalable and maintainable applications.
        </p>
      </div>
      <div className="mb-8">
      <h2 className="text-2xl font-semibold text-black mb-5">
      What is MongoDB aggregate and how does it work ?
        </h2>
        <p className="mb-4 text-lg">
        MongoDB aggregate is a feature that allows you to perform complex operations on your data. It is similar to SQL's GROUP BY clause, but it is much more powerful. With MongoDB aggregate, you can group data, calculate aggregates, and perform other operations on your data.
        </p>

        <p className="mb-4 text-lg">
        MongoDB aggregate works by using a pipeline of stages. Each stage in the pipeline performs an operation on the data. The stages are processed in order, and the output from one stage is passed to the next stage. The final stage in the pipeline returns the results of the aggregation.
        </p>
      </div>
    </div>
  );
};

export default Blog;
