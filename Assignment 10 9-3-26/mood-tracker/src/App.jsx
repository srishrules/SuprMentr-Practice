import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");

  const getMoodData = () => {
    if (mood === "happy") {
      return {
        color: "lightyellow",
        emoji: "😄",
        text: "You're feeling happy! Thats great!"
      };
    } else if (mood === "sad") {
      return {
        color: "lightblue",
        emoji: "😢",
        text: "You're feeling sad. Feel better soon! "
      };
    } else if (mood === "angry") {
      return {
        color: "salmon",
        emoji: "😠",
        text: "You're feeling angry. Take a deep breath! "
      };
    }
    else if (mood === "scared") {
      return {
        color: "lightgreen",
        emoji: "😨",
        text: "You're feeling scared. Don't worry, you're safe! "
      };
    }
    else if (mood === "bored") {
      return {
        color: "lightgray",
        emoji: "😴",
        text: "You're feeling bored. Try doing something fun! "
      };
    }
    else if (mood === "confused") {
      return {
        color: "orange",
        emoji: "🤔",
        text: "You're feeling confused. Take your time to figure it out! "
      };
    }
    else {
      return {
        color: "white",
        emoji: "",
        text: "How are you feeling today?"
      };
    }
  };

  const buttonStyle = {
    margin: "10px",
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer"
  };

  const moodData = getMoodData();

  return (
    <div
      style={{
        backgroundColor: moodData.color,
        color: "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",

      }}
    >
      <h1 style={{ color: "black" }}>Mood Tracker</h1>
      <h2 style={{ color: "black" }}>{moodData.text}</h2>

      <button onClick={() => setMood("happy")} style={buttonStyle}>
        Happy
      </button>
      <button onClick={() => setMood("sad")} style={buttonStyle}>
        Sad
      </button>
      <button onClick={() => setMood("angry")} style={buttonStyle}>
        Angry
      </button>
      <button onClick={() => setMood("scared")} style={buttonStyle}>
        Scared
      </button>
      <button onClick={() => setMood("bored")} style={buttonStyle}>
        Bored
      </button>
      <button onClick={() => setMood("confused")} style={buttonStyle}>
        Confused
      </button>

      <div style={{ fontSize: "100px", marginTop: "100px" }}>
        {moodData.emoji}
      </div>
    </div>
  );
}

export default App;