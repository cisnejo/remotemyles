import React, { useState } from "react";

import Router from "next/router";

const Posts: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const formbody = { title, body };
      await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formbody),
      });
      await Router.push("/user/posts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={submitData}>
          <h1>Create Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />

          <textarea
            cols={50}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Content"
            rows={8}
            value={body}
          />
          <input
            disabled={!body || !title }
            type="submit"
            value="Create"
          />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Posts;
