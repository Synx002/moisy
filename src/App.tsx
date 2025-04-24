import "./App.css";
import Wave from "react-wavify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Wave
        fill="url(#gradient)"
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          bottom: "0",
          width: "100vw",
          height: "280px",
          zIndex: "-1",
        }}
        options={{
          height: 0,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="30%" stopColor="#A0D2FF" />
            <stop offset="90%" stopColor="#C7E4FF" />
          </linearGradient>
        </defs>
      </Wave>
      <Footer />
    </>
  );
}

export default App;
