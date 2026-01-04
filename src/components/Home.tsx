import { useContext, useState } from "react";
import useSound from "use-sound";
import AboutModal from "../components/modal/about";
import LinksModal from "../components/modal/links";
import WorksModal from "../components/modal/Works";
import FAQModal from "../components/modal/Faq";
import ContactModal from "../components/modal/Contact";
import { ThemeContext } from "../context/ThemeContext";
import mouseClick from "../assets/sounds/click-mouse.mp3";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);
  const [isWorksModalOpen, setIsWorksModalOpen] = useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Icon buttons configuration
  const iconButtons = [
    {
      id: "about",
      label: "about",
      alt: "About",
      darkIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_about_dark.webp&w=128&q=75",
      lightIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_about.webp&w=128&q=75",
      onClick: () => setIsAboutModalOpen(true),
    },
    {
      id: "links",
      label: "links",
      alt: "Links",
      darkIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_links_dark.webp&w=128&q=75",
      lightIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_links.webp&w=128&q=75",
      onClick: () => setIsLinksModalOpen(true),
    },
    {
      id: "work",
      label: "work",
      alt: "Work",
      darkIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_work_dark.webp&w=128&q=75",
      lightIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_work.webp&w=128&q=75",
      onClick: () => setIsWorksModalOpen(true),
    },
    {
      id: "faq",
      label: "faq",
      alt: "FAQ",
      darkIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_faq_dark.webp&w=128&q=75",
      lightIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_faq.webp&w=128&q=75",
      onClick: () => setIsFAQModalOpen(true),
    },
    {
      id: "contact",
      label: "contact",
      alt: "Contact",
      darkIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact_dark.webp&w=128&q=75",
      lightIcon:
        "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact.webp&w=128&q=75",
      onClick: () => setIsContactModalOpen(true),
    },
  ];

  const [playMouseClick] = useSound(mouseClick, {
    volume: 0.5,
  });

  return (
    <div className="flex-col justify-center items-center hidden md:flex">
      {/* Header */}
      <div
        className={`text-white font-roboto-mono text-xl px-6 py-3 rounded-t-lg w-full max-w-3xl mt-10 ${
          darkMode
            ? "bg-[#171717] border-2 border-b-0 border-[#fff]"
            : "bg-[#424242]"
        }`}
      >
        home
      </div>
      <div
        className={`border-2 shadow-md rounded-b-lg overflow-hidden w-full max-w-3xl z-10 ${
          darkMode ? "bg-[#132135] border-#fff" : "bg-[#fff] border-[#a4a4a4]"
        }`}
      >
        {/* Content */}
        <div className="flex flex-col justify-center items-center p-10 h-[500px]">
          <h1
            className={`font-body mt-10 mb-3 text-7xl font-zen-kaku pt-10${
              darkMode ? "text-[#424242]" : "text-[#fff]"
            }`}
          >
            hi!{" "}
            <span
              className={`font-zen-kaku font-bold ${
                darkMode ? "text-primary-dark" : "text-primary"
              }`}
            >
              i'm Syam
            </span>
          </h1>
          <p
            className={`font-body mb-20 text-+ font-zen-kaku text-2xl ${
              darkMode ? "text-[#fff]" : "text-[#424242]"
            }`}
          >
            Junior Web Developer
          </p>

          {/* Icon buttons - refactored */}
          <div
            className="flex flex-wrap justify-center gap-8 font-roboto-mono font-bold"
            onClick={playMouseClick}
          >
            {iconButtons.map((button) => (
              <div
                key={button.id}
                className="flex flex-col items-center duration-250 cursor-pointer hover:scale-105 active:scale-90"
                onClick={button.onClick}
              >
                <img
                  src={darkMode ? button.darkIcon : button.lightIcon}
                  alt={button.alt}
                  className="w-16 h-16 drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
                />
                <span
                  className={`mt-1 font-body text-base ${
                    darkMode ? "text-[#fff]" : "text-[#424242]"
                  }`}
                >
                  {button.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        darkMode={darkMode}
      />
      <LinksModal
        isOpen={isLinksModalOpen}
        onClose={() => setIsLinksModalOpen(false)}
        darkMode={darkMode}
      />
      <WorksModal
        isOpen={isWorksModalOpen}
        onClose={() => setIsWorksModalOpen(false)}
        darkMode={darkMode}
      />
      <FAQModal
        isOpen={isFAQModalOpen}
        onClose={() => setIsFAQModalOpen(false)}
        darkMode={darkMode}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Home;
