import React, { useContext } from "react";
import "./App.css";
import Wave from "react-wavify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { SoundContext, SoundProvider } from "./context/SoundContext";
import useSound from "use-sound";

// Background music file path
const BG_MUSIC = "/sounds/background-music.mp3";

// Create a themed App component that uses the contexts
const ThemedApp: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const { soundEnabled } = useContext(SoundContext);

  // Background music that loops
  const [playBgMusic, { stop: stopBgMusic }] = useSound(BG_MUSIC, {
    volume: 0.3,
    loop: true,
    soundEnabled,
  });

  // Play or stop background music when soundEnabled changes
  React.useEffect(() => {
    if (soundEnabled) {
      playBgMusic();
    } else {
      stopBgMusic();
    }

    return () => {
      stopBgMusic();
    };
  }, [soundEnabled, playBgMusic, stopBgMusic]);

  return (
    <div className={darkMode ? "app-container-dark" : "app-container-light"}>
      <Navbar />
      <Wave
        fill="url(#gradient)"
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "280px",
          zIndex: "0",
        }}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="30%" stopColor={darkMode ? "#2A4A5F" : "#A0D2FF"} />
            <stop offset="90%" stopColor={darkMode ? "#1A2A3F" : "#C7E4FF"} />
          </linearGradient>
        </defs>
      </Wave>
      <Footer />
    </div>
  );
};

// Main App component that wraps everything in both providers
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <ThemedApp />
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
