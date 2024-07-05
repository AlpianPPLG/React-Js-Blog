import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Post = ({ post, onDelete }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded p-4 mb-4"
    >
      <div className="flex items-center mb-2">
        <FaUser className="text-gray-700 mr-2" />
        <span className="text-gray-700 font-bold">{post.author}</span>
      </div>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p>{post.content}</p>
      <div className="flex justify-end mt-4">
        <Link
          to={`/edit/${post.id}`}
          className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(post.id)}
          className="bg-red-500 text-white py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Post;
