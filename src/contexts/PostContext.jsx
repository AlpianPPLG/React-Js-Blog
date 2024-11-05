import React, { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    // Ambil data dari localStorage saat inisialisasi
    const savedPosts = localStorage.getItem("posts");
    return savedPosts
      ? JSON.parse(savedPosts)
      : [
          {
            id: 1,
            title: "First Post",
            content: "This is the content of the first post.",
            author: "John Doe",
          },
          {
            id: 2,
            title: "Second Post",
            content: "This is the content of the second post.",
            author: "Jane Smith",
          },
        ];
  });

  useEffect(() => {
    // Simpan ke localStorage setiap kali posts berubah
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
