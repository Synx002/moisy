import React, { createContext, useState, useEffect, ReactNode } from "react";

type SoundContextType = {
  soundEnabled: boolean;
  toggleSound: () => void;
};

export const SoundContext = createContext<SoundContextType>({
  soundEnabled: true,
  toggleSound: () => {},
});

type SoundProviderProps = {
  children: ReactNode;
};

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    // Try to get the sound preference from localStorage
    const savedSoundPreference = localStorage.getItem("soundEnabled");
    // If a preference exists, use it; otherwise default to enabled
    return savedSoundPreference === null
      ? true
      : savedSoundPreference === "true";
  });

  // Update localStorage when sound preference changes
  useEffect(() => {
    localStorage.setItem("soundEnabled", soundEnabled.toString());
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};
