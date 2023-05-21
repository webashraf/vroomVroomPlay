import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div>
      <div className="  bg-[url('https://images.pexels.com/photos/6209485/pexels-photo-6209485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-bottom bg-no-repeat bg-cover">
        <div className="text-center py-20 mx-auto text-white bg-[#1648557b] h-full">
          <h1 className="text-7xl py-5 uppercase font-mono px-20">Blog</h1>
        </div>
      </div>

      <div className="py-20 grid grid-cols-2 gap-6">
        <div className="mb-5 shadow-2xl p-6 bg-slate-50">
          <h3 className="text-4xl font-bold font-mono">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="mt-2 font-mono">
            <span className="font-bold">Ans:</span> An access token is a
            temporary credential granting client access to protected resources.
            A refresh token allows obtaining a new access token when the
            original expires. Access tokens are stored securely on the
            client-side, typically in memory or secure storage provided by the
            platform. Refresh tokens require extra caution and should be stored
            encrypted in secure HTTP-only cookies or other secure storage
            mechanisms.
          </p>
        </div>
        <div className="mb-5 shadow-2xl p-6 bg-slate-50">
          <h3 className="text-4xl font-bold font-mono">
            Compare SQL and NoSQL databases?
          </h3>
          <p className="mt-2 font-mono">
            <span className="font-bold">Ans:</span> SQL databases are
            structured, table-based databases with strong data consistency,
            suitable for complex relationships and transactions.
            <br />
            NoSQL databases are schema-less, flexible, and scalable, excelling
            in handling unstructured data and offering high performance. SQL
            focuses on structured data with strict relationships, while NoSQL
            prioritizes scalability, flexibility, and efficient handling of
            unstructured data.
          </p>
        </div>
        <div className="mb-5 shadow-2xl p-6 bg-slate-50">
          <h3 className="text-4xl font-bold font-mono">
            What is express js? What is Nest JS?
          </h3>
          <p className="mt-2 font-mono">
            <span className="font-bold">Ans:</span> Express.js is a minimalistic
            and flexible web application framework for Node.js. It provides a
            set of tools and features to build web applications and APIs with
            ease, offering a lightweight and unopinionated approach.
            <br />
            NestJS, on the other hand, is a progressive and opinionated Node.js
            framework built on top of Express.js. It is designed for building
            scalable and maintainable server-side applications, using a modular
            and structured architecture inspired by Angular.
          </p>
        </div>
        <div className="mb-5 shadow-2xl p-6 bg-slate-50">
          <h3 className="text-4xl font-bold font-mono">
          What is MongoDB aggregate and how does it work (google it)?
          </h3>
          <p className="mt-2 font-mono">
            <span className="font-bold">Ans:</span> MongoDB's aggregate is a powerful feature that allows users to perform complex data manipulations and analysis on a collection of documents. It enables data aggregation operations like filtering, grouping, sorting, and performing computations. It works by utilizing a pipeline of stages, where each stage applies a specific operation on the documents, allowing for advanced data transformations and analytics in a single query.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
