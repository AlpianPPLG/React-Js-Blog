import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Post = ({ post, onDelete }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [notification, setNotification] = useState("");

  // Handle comment input change
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      // Check for duplicate comments
      const isDuplicate = comments.some(
        (comment) => comment.text === commentText.trim()
      );

      if (isDuplicate) {
        showNotification("Comment already exists!"); // Show notification if duplicate
      } else {
        setComments([...comments, { text: commentText, id: Date.now() }]);
        setCommentText(""); // Clear input after submit
        showNotification("Comment added successfully!");
      }
    }
  };

  // Handle comment deletion with confirmation
  const handleCommentDelete = (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setComments(comments.filter((comment) => comment.id !== commentId));
      showNotification("Comment deleted successfully!");
    }
  };

  // Show notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 3000); // Notification disappears after 3 seconds
  };

  // Delete post with confirmation
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      onDelete(post.id);
      showNotification("Post deleted successfully!");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded p-4 mb-4"
    >
      {notification && (
        <div className="bg-green-500 text-white p-2 rounded mb-2">
          {notification}
        </div>
      )}
      <div className="flex items-center mb-2">
        <FaUser className="text-gray-700 mr-2" />
        <span className="text-gray-700 font-bold">{post.author}</span>
      </div>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p>{post.content}</p>

      {/* Display category and tags */}
      <div className="mt-2">
        <span className="text-sm text-gray-600">Category: {post.category}</span>
        <div className="mt-1">
          <span className="text-sm text-gray-600">Tags: </span>
          {post.tags && post.tags.length > 0 ? (
            post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No tags available</span>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Link
          to={`/edit/${post.id}`}
          className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>

      {/* Komentar Section */}
      <div className="mt-4">
        <h3 className="font-semibold">Comments</h3>
        <div className="flex flex-col mt-2 space-y-2">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start justify-between">
              <div className="flex items-start">
                <FaUser className="text-gray-500 mr-2" />
                <p className="bg-gray-200 p-2 rounded">{comment.text}</p>
              </div>
              <button
                onClick={() => handleCommentDelete(comment.id)}
                className="bg-red-500 text-white ml-2 py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="flex mt-4">
          <input
            type="text"
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            className="flex-1 p-2 border rounded-l-lg"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-lg"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Post;
