import { useRef, ReactNode } from "react";
import Draggable from "react-draggable";
import { FaTwitter, FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";
import { SiKofi, SiBluesky } from "react-icons/si";
import { BsPrinter } from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";

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
      name: "twitter",
      icon: <FaTwitter size={60} color="#424242" />,
      darkIcon: <FaTwitter size={60} className="border-2" />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "youtube",
      icon: <FaYoutube size={60} />,
      url: "https://youtube.com/c/yourusername",
    },
    {
      name: "ko-fi",
      icon: <SiKofi size={60} />,
      url: "https://ko-fi.com/yourusername",
    },
    {
      name: "discord",
      icon: <FaDiscord size={60} />,
      url: "https://discord.gg/yourinvite",
    },
    {
      name: "instagram",
      icon: <FaInstagram size={60} />,
      url: "https://instagram.com/yourusername",
    },
    {
      name: "bluesky",
      icon: <SiBluesky size={60} />,
      url: "https://bsky.app/profile/yourusername",
    },
    {
      name: "art prints",
      icon: <BsPrinter size={60} />,
      url: "https://yourprintshop.com",
    },
    {
      name: "merch",
      icon: <MdShoppingBag size={60} />,
      url: "https://yourmerchstore.com",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-zen-kaku">
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
            <span className="text-xl ml-2 font-mono">links</span>
            <button
              onClick={onClose}
              className="font-mono flex items-center justify-center text-white text-base
              duration-100 hover:scale-110 active:scale-80 z-10"
            >
              [x]
            </button>
          </div>

          {/* Content area */}
          <div
            className={`flex flex-col p-8 rounded-b-lg ${
              darkMode
                ? "bg-[#132135] text-white border-2 border-t-0 border-gray-300"
                : "bg-white border-2 border-t-0 border-gray-300"
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
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Footer message */}
            <div className="mt-8 text-center p-4 bg-gray-100 rounded-md text-sm text-black">
              clicking any of the links will open a new tab!
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default LinksModal;
