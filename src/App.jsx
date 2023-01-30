import { Nav, Comments, Gallery, Posts } from "./components";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "./components/utils/constants";
import { async } from "q";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const callPost = async () => {
      const fetchData = await fetch(API_URL + "/posts");
      const data = await fetchData.json();
      await new Promise((r) => setTimeout(r, 5000));
      setPosts(data);
    };
    callPost();
  }, []);

  return (
    <>
      <div>
        <Nav />

        <Routes>
          {/* //send data through props */}
          <Route path="/posts" element={<Posts posts={posts} />} />

          <Route path="/comments" element={<Comments />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
