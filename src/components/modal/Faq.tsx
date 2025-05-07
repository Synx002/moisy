import React, { useState } from "react";

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({
    software: false,
    commissions: false,
    setup: false,
    soundEffects: false,
  });

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // FAQ Data
  const faqItems: FAQItem[] = [
    {
      id: "software",
      question: "what software do you use?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            illustration:{" "}
            <a href="#" className="text-amber-500">
              Clip Studio Paint EX
            </a>
          </li>
          <li>
            animation:{" "}
            <a href="#" className="text-amber-500">
              Clip Studio Paint EX
            </a>
            , Adobe Animate
          </li>
          <li>3D: blender 2.83 LTS</li>
          <li>
            feel free to check the rest of the tools i use in the Work window!
          </li>
        </ul>
      ),
    },
    {
      id: "software",
      question: "what software do you use?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            illustration:{" "}
            <a href="#" className="text-amber-500">
              Clip Studio Paint EX
            </a>
          </li>
          <li>
            animation:{" "}
            <a href="#" className="text-amber-500">
              Clip Studio Paint EX
            </a>
            , Adobe Animate
          </li>
          <li>3D: blender 2.83 LTS</li>
          <li>
            feel free to check the rest of the tools i use in the Work window!
          </li>
        </ul>
      ),
    },
    {
      id: "software",
      question: "what software do you use?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            illustration:{" "}
            <a href="#" className="text-amber-500">
              Clip Studio Paint EX
            </a>
          </li>
          <li>
            animation:{" "}
            <a href="#" className="text-amber-500">
              Clip Studio Paint EX
            </a>
            , Adobe Animate
          </li>
          <li>3D: blender 2.83 LTS</li>
          <li>
            feel free to check the rest of the tools i use in the Work window!
          </li>
        </ul>
      ),
    },
    {
      id: "software",
      question: "what software do you use?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            illustration:{" "}
            <a href="#" className="text-amber-500">
              Clip Studio Paint EX
            </a>
          </li>
          <li>
            animation:{" "}
            <a href="#" className="text-amber-500">
              Clip Studio Paint EX
            </a>
            , Adobe Animate
          </li>
          <li>3D: blender 2.83 LTS</li>
          <li>
            feel free to check the rest of the tools i use in the Work window!
          </li>
        </ul>
      ),
    },
    {
      id: "commissions",
      question: "are your commissions open?",
      answer: (
        <ul className="list-disc pl-6">
          <li>
            for commission work, please contact me via my{" "}
            <a href="#" className="text-amber-500 font-medium">
              work email
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "setup",
      question: "what's your setup?",
      answer: (
        <p className="pl-6">
          Setup information would appear here when expanded.
        </p>
      ),
    },
    {
      id: "soundEffects",
      question: "where do you get your sound effects?",
      answer: (
        <p className="pl-6">
          Sound effects information would appear here when expanded.
        </p>
      ),
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-mono overflow-auto">
      <div className="w-[600px] shadow-lg overflow-hidden">
        {/* Header bar */}
        <div
          className={`flex justify-between items-center px-4 py-2 text-white rounded-t-lg ${
            darkMode ? "bg-[#171717] border-2 border-b-0" : "bg-[#424242]"
          }`}
        >
          <span className="text-xl ml-2">frequently asked questions</span>
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
          className={`flex flex-col p-4 rounded-b-lg h-[400px] overflow-y-auto ${
            darkMode
              ? "bg-[#132135] text-white border-[#fff] border-2"
              : "bg-white text-[#424242] border-2 border-t-0 border-[#a4a4a4]"
          }`}
        >
          {/* FAQ Items */}
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4">
              <div
                className="flex justify-between items-center p-3 bg-amber-50 cursor-pointer rounded"
                onClick={() => toggleItem(item.id)}
              >
                <span className="font-medium text-black">{item.question}</span>
                <span className="text-black">
                  {expandedItems[item.id] ? "▲" : "▼"}
                </span>
              </div>

              {expandedItems[item.id] && (
                <div className="mt-2 ml-2 text-base">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQModal;
