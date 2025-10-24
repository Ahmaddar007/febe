"use client";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=15"
    );
    const data = await response.json();
    setList(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <button
        onClick={fetchData}
        className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg mb-6 transition"
      >
        Load Images
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {list.length > 0 ? (
          list.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-gray-800">{item.author}</h2>
                <p className="text-sm text-gray-500">ID: {item.id}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Click the button to load images</p>
        )}
      </div>
    </div>
  );
};

export default Home;
