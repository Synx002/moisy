import React, { useRef } from "react";
import Draggable from "react-draggable";
import synxIconEnvelope from "../../assets/synx-icon-envelope.png";
import useSound from "use-sound";
import closeClick from "../../assets/sounds/close.mp3";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const [playCloseClick] = useSound(closeClick, {
    volume: 1,
  });

  const handleClose = () => {
    playCloseClick();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-roboto-mono overflow-auto">
      <Draggable
        nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
        handle=".modal-handle"
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div
          ref={nodeRef}
          className="w-[550px] shadow-lg overflow-hidden rounded-lg"
        >
          {/* Header */}
          <div
            className={`modal-handle flex justify-between items-center px-4 py-2 cursor-move text-white rounded-t-lg
              ${
                darkMode ? "bg-[#171717] border-2 border-b-0" : "bg-[#424242]"
              }`}
          >
            <span className="text-xl">contact</span>
            <button
              onClick={handleClose}
              className="font-roboto-mono flex items-center justify-center text-white text-base hover:scale-110 duration-100"
            >
              [x]
            </button>
          </div>

          {/* Content */}
          <div
            className={`p-6 text-center rounded-b-lg space-y-4  ${
              darkMode
                ? "bg-[#132135] text-white border-[#fff] border-2"
                : "bg-white text-[#424242] border-2 border-t-0 border-[#a4a4a4]"
            }`}
          >
            <h2 className="text-2xl font-bold">yayy mail!</h2>
            <p className="text-sm">
              The easiest way to reach me is by email — I check it often! I’m
              not super active on social media DMs, but you’re still welcome to
              drop a message there too. I’ll get back to you as soon as I can 😊
            </p>

            {/* Gambar karakter (gunakan image lokal atau url) */}
            <img
              src={synxIconEnvelope} // Ganti ini sesuai path image kamu
              alt="Mail Character"
              className="w-60 mx-auto"
            />

            <p className="text-sm">
              email me at:{" "}
              <a
                href="mailto:mosyam0202@gmail.com"
                className="text-amber-500 font-semibold"
              >
                mosyam0202@gmail.com
              </a>
              <br />
              or press the button below to open your mail app.
            </p>

            <a
              href="mailto:mosyam0202@gmail.com"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition"
            >
              send me an email!
            </a>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default ContactModal;
