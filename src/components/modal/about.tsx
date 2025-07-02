import React, { useRef } from "react";
import Draggable from "react-draggable";
import synxIcon from "../../assets/synx-icon.png";
import useSound from "use-sound";
import closeClick from "../../assets/sounds/close.mp3";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLElement>;

  const [playCloseClick] = useSound(closeClick, {
    volume: 1,
  });

  const handleClose = () => {
    playCloseClick();
    onClose();
  };

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
          className="w-[700px] shadow-lg overflow-hidden"
        >
          {/* Header bar */}
          <div
            className={`modal-handle flex justify-between items-center px-6 py-3 cursor-move text-white rounded-t-lg ${
              darkMode ? "bg-[#171717] border-2 border-b-0" : "bg-[#424242]"
            }`}
          >
            <span className="text-xl ml-2 font-roboto-mono">about</span>
            <button
              onClick={handleClose}
              className="absolute font-roboto-mono flex items-center justify-center text-white text-xl right-0 mr-6 py-3 
    duration-100 hover:scale-110 active:scale-80 z-10"
            >
              [x]
            </button>
          </div>

          {/* Content area with fixed height */}
          <div
            className={`flex flex-col h-[450px] border-2 rounded-b-lg ${
              darkMode
                ? "bg-[#132135] text-white border-[#fff]"
                : "bg-white border-[#a4a4a4]"
            }`}
          >
            {/* Profile section - sticky */}
            <div
              className={`flex p-[32px] pl-[60px] border-b-1  ${
                darkMode ? "border-[#afafaf]" : "border-[#a4a4a4]"
              }`}
            >
              {/* Profile image */}
              <div className="mr-8">
                <img
                  src={synxIcon}
                  alt="About Image"
                  className="h-auto rounded-full object-cover w-(--avatar-width) duration-250 hover:scale-105"
                />
              </div>

              {/* Name and title */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-[#f59300]">
                  Mohammad Syam
                </h2>
                <p className="mb-1">ID-based freelance web developer</p>
                <p className="">
                  Available for colaboration and{" "}
                  <a href="#" className="text-[#f59300] hover:underline">
                    Fulltime job
                  </a>
                </p>
              </div>
            </div>

            {/* Bio section - scrollable */}
            <div className="mr-1 mb-1 pl-[60px] overflow-y-auto flex-grow">
              <p className="mb-4 mt-2">hi! i'm Syam, an web developer. i...</p>

              <ul className="list-disc pl-6 space-y-2">
                <li className="">create website wireframes, and</li>
                <li className="">do frontend web development!</li>
              </ul>

              <p className="py-5">
                interested in working with me? send me an email at{" "}
                <a
                  href="mailto:mosyam0202@gmail.com"
                  className="text-[#f59300] hover:underline"
                >
                  mosyam0202@gmail.com
                </a>
                ! :)
              </p>

              <span className="font-roboto-mono font-semibold text-xl md:text-2xl">
                EDUCATION
              </span>
              <br />
              <div className="my-2 border-l-4 pl-3 border-[#f5f5f5]">
                <p className="md:pt-3 text-base md:text-xl/4">
                  Bachelor of Science in Computer Science
                </p>
                <span className="text-sm/6 text-gray-light">
                  Amikom University of Yogyakarta (GRADUATED CUM LAUDE 2023)
                </span>
              </div>
              <br />

              <span className="font-roboto-mono font-semibold text-xl md:text-2xl">
                OTHER INTEREST
              </span>
              <ul className="mt-2 pl-6 list-disc">
                <li>Game Development</li>
                <li>Music!</li>
                <li>Video Editing</li>
                <li>Illustration</li>
              </ul>
              <br />

              <span className="font-roboto-mono font-semibold text-xl md:text-2xl">
                LANGUAGE PROFICIENCY
              </span>
              <div className="my-2 border-l-4 pl-3 border-[#f5f5f5]">
                <p>
                  i have native fluency in Indonesian{" "}
                  <span className="font-bold text-[#f59300]">
                    (Bahasa Indonesia)
                  </span>
                  , and can communicate at an intermediate level in{" "}
                  <span className="font-bold text-[#f59300]">English</span>!
                </p>
                <p className="text-sm mt-4">
                  i’m currently polishing my English skills to sound even
                  cooler!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default AboutModal;
