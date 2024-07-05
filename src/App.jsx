import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import { PostProvider } from "./contexts/PostContext";

const App = () => {
  return (
    <PostProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
};

export default App;
