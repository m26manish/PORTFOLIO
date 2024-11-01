import React, { useState } from 'react';
import javascript from "../../public/javascript.png";
import express from "../../public/express.png";
import mongodb from "../../public/mongodb.jpg";
import react from "../../public/reactjs.png";

function Portfolio() {
  const [cardItems, setCardItems] = useState([
    {
      id: 1,
      logo: mongodb,
      name: "MongoDB",
      liked: false,
      description: "A NoSQL database for scalable applications."
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      liked: false,
      description: "A web framework for Node.js, ideal for building APIs."
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      liked: false,
      description: "A versatile programming language for web development."
    },
    {
      id: 4,
      logo: react,
      name: "React",
      liked: false,
      description: "A JavaScript library for building user interfaces."
    }
  ]);

  const toggleLike = (id) => {
    setCardItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio 📊</h1>
        <a
          href={("../../public/Manish_Resume.pdf")}
          target="_blank"
          className="drop-shadow-md rounded-md bg-green-500 px-3 py-3 duration-200 hover:bg-green-700"
        >
          Find My Resume
        </a>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          {cardItems.map(({ id, logo, name, liked, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-90 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl text-green-500 mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p> {/* Display unique description */}
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button
                  onClick={() => toggleLike(id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Like: {liked ? "💚" : "♡"}
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
