"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const createTask = [...task];

    createTask.push({ title, details });

    setTask(createTask);
    setTitle("");
    setDetails("");
  };

  const deleteTask = (index) => {
    const removeTask = [...task];
    removeTask.splice(index, 1);
    setTask(removeTask);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-12">
      {/* FORM SECTION */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 w-full max-w-md p-8 md:p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              Add Your Task
            </h1>
            <p className="text-gray-300 text-sm">
              Write your task details below and keep track of your goals.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Add Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:border-blue-400 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:bg-white/30"
            />
            <textarea
              rows={5}
              placeholder="Add your details..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:border-blue-400 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:bg-white/30 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            Submit
          </button>
        </form>
      </div>

      {/* TASK LIST SECTION */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start w-full max-w-3xl">
        {task.length > 0 ? (
          task.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 w-72 h-auto text-white shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-3 text-blue-400">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{item.details}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => deleteTask(index)}
                  className="text-sm bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-white transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center w-full mt-4">
            No tasks added yet. Start by adding one!
          </p>
        )}
      </div>
    </div>
  );
}
