import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;

  const [layer, setLayer] = useState(1);
  const [lastLayer, setLastLayer] = useState(false);

  const layerNames = {
    1: "The Edge of the Abyss",
    2: "The Forest of Temptation",
    3: "The Great Fault",
    4: "The Goblets of Giants",
    5: "The Sea of Corpses",
    6: "The Capital of the Unreturned",
    7: "The Final Maelstrom",
  };
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const bgLayer = {
    1: "/layer1.webp",
    2: "/layer2.webp",
    3: "/layer3.webp",
    4: "/layer4.webp",
    5: "/layer5.webp",
    6: "/layer6.webp",
    7: "/layer7.webp",
  };

  useEffect(() => {
    const images = [
      "/layer1.webp",
      "/layer2.webp",
      "/layer3.webp",
      "/layer4.webp",
      "/layer5.webp",
      "/layer6.webp",
      "/layer7.webp",
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const nextLayer = () => {
    setLayer((prev) => {
      if (prev === 6) {
        setLastLayer(true);
        return 7;
      }
      return Math.min(prev + 1, 7);
    });
  };

  return (
    <>
      <div
        className="app"
        style={{ backgroundImage: `url(${bgLayer[layer]})` }}
        data-tauri-drag-region
      >
        <p
          className="layer-name"
          data-tauri-drag-region
          style={{ color: layer === 7 ? "black" : "white" }}
        >
          {layerNames[layer]}
        </p>
        <div className="calender-card" data-tauri-drag-region>
          <h1
            className="month"
            data-tauri-drag-region
            style={{ color: layer === 7 ? "black" : "white" }}
          >
            {months[month]}
          </h1>
          <div
            className="date"
            data-tauri-drag-region
            style={{ color: layer === 7 ? "black" : "white" }}
          >
            {date}
          </div>
        </div>
        <button
          className="descend"
          onClick={nextLayer}
          disabled={lastLayer}
          style={{ color: layer === 7 ? "black" : "white" }}
        >
          {layer === 7 ? "Reached the Bottom" : "Descend"}
        </button>
      </div>
    </>
  );
}

export default App;
