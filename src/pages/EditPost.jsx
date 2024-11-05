import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";

const EditPost = () => {
  const { id } = useParams();
  const { posts, setPosts } = useContext(PostContext);
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === parseInt(id));
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [author, setAuthor] = useState(post ? post.author : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { ...post, title, content, author };
    setPosts(posts.map((p) => (p.id === parseInt(id) ? updatedPost : p)));
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to the main page
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
