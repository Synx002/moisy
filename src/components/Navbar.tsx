import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SoundContext } from "../context/SoundContext";
import useSound from "use-sound";
import toggleOnSound from "../assets/sounds/toggle-on.mp3";
import toggleOffSound from "../assets/sounds/toggle-off.mp3";
import click from "../assets/sounds/click.mp3";

// Import your sound files
// Example: Place your sound effects in the public folder and reference them

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { soundEnabled, toggleSound } = useContext(SoundContext);

  // Sound for toggling dark mode
  const [playToggleOn] = useSound(toggleOnSound, {
    volume: 0.5,
    // Only play if sound is enabled
    soundEnabled,
  });

  const [playToggleOff] = useSound(toggleOffSound, {
    volume: 0.5,
    soundEnabled,
  });

  // Sound for toggling sound itself
  const [playClick] = useSound(click, {
    volume: 0.5,
    // Always play this sound when toggling sound on
    // It won't play when turning sound off (as expected)
    soundEnabled: true,
  });

  const handleDarkModeToggle = () => {
    toggleDarkMode();
    // Play different sounds based on which state we're switching to
    if (!darkMode) {
      playToggleOn();
    } else {
      playToggleOff();
    }
  };

  const handleSoundToggle = () => {
    // Play click sound before toggling off (won't play when turning it back on if sound is off)
    if (!soundEnabled) {
      playClick();
    }
    toggleSound();
  };

  return (
    <>
      <nav className="p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            className="p-2 duration-250 hover:scale-110 active:scale-80"
            onClick={handleDarkModeToggle}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <img
                src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fdark_mode_dark.webp&w=96&q=75"
                alt="light mode toggle"
                draggable="false"
                loading="lazy"
                width={40}
                height={40}
              />
            ) : (
              <img
                src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fdark_mode_light.webp&w=48&q=75"
                alt="dark mode toggle"
                draggable="false"
                loading="lazy"
                width={40}
                height={40}
              />
            )}
          </button>
          <button
            className="p-2 duration-250 hover:scale-110 active:scale-80"
            onClick={handleSoundToggle}
            aria-label="Toggle sound"
          >
            {darkMode ? (
              // Dark mode images
              soundEnabled ? (
                <img
                  src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fsfx_on_dark.webp&w=96&q=75"
                  alt="sound on toggle dark mode"
                  draggable="false"
                  loading="lazy"
                  width={40}
                  height={40}
                />
              ) : (
                <img
                  src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fsfx_off_dark.webp&w=96&q=75"
                  alt="sound off toggle dark mode"
                  draggable="false"
                  loading="lazy"
                  width={40}
                  height={40}
                />
              )
            ) : // Light mode images
            soundEnabled ? (
              <img
                src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fsfx_on_light.webp&w=96&q=75"
                alt="sound on toggle light mode"
                draggable="false"
                loading="lazy"
                width={40}
                height={40}
              />
            ) : (
              <img
                src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fsfx_off_light.webp&w=96&q=75"
                alt="sound off toggle light mode"
                draggable="false"
                loading="lazy"
                width={40}
                height={40}
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
