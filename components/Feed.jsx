"use client";

import { useEffect, useState } from "react";
import PrompCard from "./PrompCard";

// Same page Useable Component
const PromptCardList = ({ data, handleTagClick }) => {
  return <div className="mt-5 prompt_layout"></div>;
};

const Feed = () => {
  const [SearchText, setSearchText] = useState("");
  const [posts, setposts] = useState([]);

  useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();

        setposts(data);
      };

      fetchPosts();
    },
    []);

  const handleSearchChange = (e) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center border-2">
        <input
          type="text"
          className="search_input peer"
          placeholder="Search for Tag, Username"
          value={SearchText}
          onChange={handleSearchChange}
          required
        ></input>
      </form>

      <PromptCardList data={[posts]} handleTagClick={() => {}} />
      <PrompCard />
    </section>
  );
};

export default Feed;
