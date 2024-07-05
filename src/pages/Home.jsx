import React, { useContext, useState, useEffect } from "react";
import Post from "../components/Post";
import { PostContext } from "../contexts/PostContext";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { posts } = useContext(PostContext);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
