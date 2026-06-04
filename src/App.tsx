import { useState } from "react";
import { mockPosts } from "./data/mockPosts";
import Post from "./components/post";

import "./App.css";
import Header from "./components/Header";
import vector2Svg from "./img/Vector_2.svg";
import { HiBars3BottomLeft, HiSquares2X2 } from "react-icons/hi2";

type ViewMode = "rows" | "tiles";

function App() {
  const [view, setView] = useState<ViewMode>("rows");

  return (
    <>
      <img
        src={vector2Svg}
        alt=""
        className="fixed pointer-events-none -z-10"
        style={{ right: 0, top: 786 }}
      />

      <Header />

      <div className="max-w-5xl mx-auto mt-3 p-4">
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => setView("rows")}
            className={`p-2 rounded-lg transition cursor-pointer ${view === "rows"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            <HiBars3BottomLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setView("tiles")}
            className={`p-2 rounded-lg transition cursor-pointer ${view === "tiles"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            <HiSquares2X2 className="w-5 h-5" />
          </button>
        </div>


        <div className={view === "tiles" ? "grid grid-cols-3 gap-4" : "space-y-4"}>
          {mockPosts.map((p, i) => (
            <Post key={i} {...p} view={view} />
          ))}
        </div>

        <div className="flex justify-center pb-8 mt-6">
          <button className="px-10 py-1 text-gray-400 border border-gray-400 rounded-full text-sm cursor-pointer hover:bg-gray-100">
            LOAD MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
