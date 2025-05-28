import { useRef, ReactNode } from "react";
import Draggable from "react-draggable";
import {
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

interface LinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

interface LinkItem {
  name: string;
  icon: ReactNode;
  darkIcon: ReactNode;
  url: string;
}

const LinksModal: React.FC<LinksModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLElement>;

  // Data untuk sosial media links
  const socialLinks: LinkItem[] = [
    {
      name: "Github",
      icon: (
        <FaGithub
          size={60}
          color="#424242"
          className="drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
        />
      ),
      darkIcon: <FaGithub size={60} />,
      url: "https://github.com/Synx002",
    },
    {
      name: "Youtube",
      icon: (
        <FaYoutube
          color="#424242"
          size={60}
          className="drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
        />
      ),
      darkIcon: <FaYoutube size={60} />,
      url: "https://www.youtube.com/@synxularity",
    },
    {
      name: "Linkedin",
      icon: (
        <FaLinkedin
          color="#424242"
          size={60}
          className="drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
        />
      ),
      darkIcon: <FaLinkedin size={60} />,
      url: "https://www.linkedin.com/in/mohammadsyam/",
    },
    {
      name: "discord",
      icon: (
        <FaDiscord
          color="#424242"
          size={60}
          className="drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
        />
      ),
      darkIcon: <FaDiscord size={60} />,
      url: "https://discord.gg/yourinvite",
    },
    {
      name: "instagram",
      icon: (
        <FaInstagram
          color="#424242"
          size={60}
          className="drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
        />
      ),
      darkIcon: <FaInstagram size={60} />,
      url: "https://www.instagram.com/syam02__/",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Draggable
        nodeRef={nodeRef}
        handle=".modal-handle"
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div
          ref={nodeRef as React.RefObject<HTMLDivElement>}
          className="w-[500px] shadow-lg overflow-hidden"
        >
          {/* Header bar */}
          <div
            className={`modal-handle flex justify-between items-center px-6 py-3 cursor-move text-white rounded-t-lg ${
              darkMode ? "bg-[#171717] border-2 border-b-0" : "bg-[#424242]"
            }`}
          >
            <span className="text-xl ml-2 font-roboto-mono">links</span>
            <button
              onClick={onClose}
              className="font-roboto-mono flex items-center justify-center text-white text-base
              duration-100 hover:scale-110 active:scale-80 z-10"
            >
              [x]
            </button>
          </div>

          {/* Content area */}
          <div
            className={`flex flex-col p-8 rounded-b-lg ${
              darkMode
                ? "bg-[#132135] text-white border-[#fff] border-2"
                : "bg-white text-[#424242] border-2 border-t-0 border-[#a4a4a4]"
            }`}
          >
            {/* Social links grid - 2 rows of 4 icons */}
            <div className="grid grid-cols-4 gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-80 transition-opacity"
                >
                  <div className="mb-2">
                    {darkMode ? link.darkIcon : link.icon}
                  </div>
                  <span className="text-base font-roboto-mono ">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Footer message */}
            <div
              className={`mt-8 text-center p-4 border-1 rounded-md font-zen-kaku text-sm  ${
                darkMode
                  ? "border-white text-white"
                  : "border-gray-lighter text-gray"
              }`}
            >
              clicking any of the links will open a new tab!
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default LinksModal;
