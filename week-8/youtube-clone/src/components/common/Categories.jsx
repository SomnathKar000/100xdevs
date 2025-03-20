import React from "react";
import { useState } from "react";

export const Categories = () => {
  const categoriesArray = [
    "All",
    "Trending",
    "Music",
    "Gaming",
    "News",
    "Sports",
    "Movies",
    "Technology",
    "Education",
    "Podcasts",
    "Science",
    "Finance",
    "Health",
    "Lifestyle",
    "Food",
    "Travel",
    "DIY & Crafts",
    "History",
    "Comedy",
    "Fashion",
    "Automobile",
    "Pets & Animals",
    "Motivation",
    "Spirituality",
    "Animation",
    "Photography",
    "Business",
    "Programming",
    "Marketing",
    "Vlogs",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className=" gap-3 categories">
      {categoriesArray.map((category) => (
        <div
          className={`bg-[#272727] px-3 mr-3 py-1 rounded-lg cursor-pointer category-item ${
            category === activeCategory ? "active" : ""
          }`}
          key={category}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
