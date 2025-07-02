import React, { useContext, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import useSound from "use-sound";
import { ThemeContext } from "../context/ThemeContext";
import { SoundContext } from "../context/SoundContext";
import backgroundMusic from "../assets/sounds/bgm.mp3";

const Footer: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const { soundEnabled } = useContext(SoundContext);

  // State lokal untuk mengontrol background music
  const [musicEnabled, setMusicEnabled] = useState(false);

  const [play, { stop }] = useSound(backgroundMusic, {
    volume: 1,
    loop: true,
  });

  const handleBackgroundMusic = () => {
    if (musicEnabled) {
      // Stop BGM kalau sedang menyala
      stop();
    } else {
      // Play BGM kalau belum menyala
      play();
    }

    // Update state lokal, bukan context
    setMusicEnabled(!musicEnabled);
  };

  return (
    <>
      <footer className="fixed pointer-events-none bottom-0 w-screen h-screen z-0 md:z-10 flex flex-col items-center">
        <div className="pointer-events-auto max-w-[var(--froggert-width)] right-[1%] bottom-0 absolute flex justify-end">
          <div>
            <button
              className="cursor-pointer duration-150 hover:scale-105 hover:drop-shadow-md bobbing"
              onClick={handleBackgroundMusic}
              aria-label="Toggle background music"
            >
              {darkMode ? (
                musicEnabled ? (
                  <img
                    src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fplayer%2Ffroggert_stop_dark.webp&w=640&q=75"
                    alt="froggert stop dark"
                    draggable="false"
                    loading="lazy"
                    width={150}
                    height={150}
                  />
                ) : (
                  <img
                    src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fplayer%2Ffroggert_play_dark.webp&w=640&q=75"
                    alt="froggert play dark"
                    draggable="false"
                    loading="lazy"
                    width={150}
                    height={150}
                  />
                )
              ) : musicEnabled ? (
                <img
                  src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fplayer%2Ffroggert_stop.webp&w=1080&q=75"
                  alt="froggert stop"
                  draggable="false"
                  loading="lazy"
                  width={150}
                  height={150}
                />
              ) : (
                <img
                  src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fplayer%2Ffroggert_play.webp&w=640&q=75"
                  alt="froggert play"
                  draggable="false"
                  loading="lazy"
                  width={150}
                  height={150}
                />
              )}
            </button>
          </div>
        </div>
        <div className="absolute w-screen bottom-5 bg-transparent hidden md:flex justify-center">
          <div>
            <button className="pointer-events-auto relative rounded-md duration-250 cursor-pointer h-12 w-12 hover:scale-105 active:scale-90">
              <div className="flex justify-center">
                <FaGithub
                  size={32}
                  className={
                    darkMode ? "social-icon-dark" : "social-icon-light"
                  }
                />
              </div>
            </button>
          </div>
          <div>
            <button className="pointer-events-auto relative rounded-md duration-250 cursor-pointer h-12 w-12 hover:scale-105 active:scale-90">
              <div className="flex justify-center">
                <FiInstagram
                  size={32}
                  className={
                    darkMode ? "social-icon-dark" : "social-icon-light"
                  }
                />
              </div>
            </button>
          </div>
          <div>
            <button className="pointer-events-auto relative rounded-md duration-250 cursor-pointer h-12 w-12 hover:scale-105 active:scale-90">
              <div className="flex justify-center">
                <FaLinkedin
                  size={32}
                  className={
                    darkMode ? "social-icon-dark" : "social-icon-light"
                  }
                />
              </div>
            </button>
          </div>
        </div>
        <div
          className={`text-center text-sm fixed bottom-1 ${
            darkMode ? "copyright-dark" : "copyright-light"
          }`}
        >
          © 2025 Mohammad Syam
        </div>
      </footer>
    </>
  );
};

export default Footer;
