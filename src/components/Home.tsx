import { useContext, useState } from "react";
import AboutModal from "../components/modal/About";
import LinksModal from "../components/modal/Links";
import WorksModal from "../components/modal/Works";
import FAQModal from "../components/modal/Faq";
import ContactModal from "../components/modal/Contact";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);
  const [isWorksModalOpen, setIsWorksModalOpen] = useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center ">
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
                darkMode ? "text-[#c0faff]" : "text-[#f59300]"
              }`}
            >
              i’m Syam
            </span>
          </h1>
          <p
            className={`font-body mb-20 text-center font-zen-kaku text-2xl ${
              darkMode ? "text-[#fff]" : "text-[#424242]"
            }`}
          >
            illustrator, animator, and developer
          </p>

          {/* Icon buttons */}
          <div className="flex flex-wrap justify-center gap-8 font-roboto-mono font-bold">
            {/* About */}
            <div
              className="flex flex-col items-center duration-250 cursor-pointer hover:scale-105 active:scale-90"
              onClick={() => setIsAboutModalOpen(true)}
            >
              <img
                src={
                  darkMode
                    ? "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_about_dark.webp&w=128&q=75"
                    : "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_about.webp&w=128&q=75"
                }
                alt="About"
                className="w-16 h-16 drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
              />
              <span
                className={`mt-1  font-body text-base ${
                  darkMode ? "text-[#fff]" : "text-[#424242]"
                }`}
              >
                about
              </span>
            </div>

            {/* Links */}
            <div
              className="flex flex-col items-center duration-250 cursor-pointer hover:scale-105 active:scale-90"
              onClick={() => setIsLinksModalOpen(true)}
            >
              <img
                src={
                  darkMode
                    ? "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_links_dark.webp&w=128&q=75"
                    : "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_links.webp&w=128&q=75"
                }
                alt="Links"
                className="w-16 h-16 drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
              />
              <span
                className={`mt-1  font-body text-base ${
                  darkMode ? "text-[#fff]" : "text-[#424242]"
                }`}
              >
                links
              </span>
            </div>

            {/* Work */}
            <div
              className="flex flex-col items-center duration-250 cursor-pointer hover:scale-105 active:scale-90"
              onClick={() => setIsWorksModalOpen(true)}
            >
              <img
                src={
                  darkMode
                    ? "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_work_dark.webp&w=128&q=75"
                    : "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_work.webp&w=128&q=75"
                }
                alt="Work"
                className="w-16 h-16 drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
              />
              <span
                className={`mt-1  font-body text-base ${
                  darkMode ? "text-[#fff]" : "text-[#424242]"
                }`}
              >
                work
              </span>
            </div>

            {/* FAQ */}
            <div
              className="flex flex-col items-center duration-250 cursor-pointer hover:scale-105 active:scale-90"
              onClick={() => setIsFAQModalOpen(true)}
            >
              <img
                src={
                  darkMode
                    ? "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_faq_dark.webp&w=128&q=75"
                    : "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_faq.webp&w=128&q=75"
                }
                alt="FAQ"
                className="w-16 h-16 drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
              />
              <span
                className={`mt-1  font-body text-base ${
                  darkMode ? "text-[#fff]" : "text-[#424242]"
                }`}
              >
                faq
              </span>
            </div>

            {/* Contact */}
            <div
              className="flex flex-col items-center duration-250 cursor-pointer hover:scale-105 active:scale-90"
              onClick={() => setIsContactModalOpen(true)}
            >
              <img
                src={
                  darkMode
                    ? "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact_dark.webp&w=128&q=75"
                    : "https://www.sharyap.com/_next/image?url=%2Fimages%2Ficon_contact.webp&w=128&q=75"
                }
                alt="Contact"
                className="w-16 h-16 drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
              />
              <span
                className={`mt-1  font-body text-base ${
                  darkMode ? "text-[#fff]" : "text-[#424242]"
                }`}
              >
                contact
              </span>
            </div>
          </div>
        </div>
      </div>
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
