import React, { useState, useRef } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import Draggable from "react-draggable";

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
  const nodeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLElement>;
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({
    software: false,
    opportunities: false,
    remote: false,
    based: false,
    relocate: false,
    pizza: false,
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
            Web Development:{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Visual Stuido Code
            </a>
          </li>
          <li>
            illustration:{" "}
            <a
              href="https://www.clipstudio.net/id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Clip Studio Paint EX
            </a>
          </li>
          <li>
            Game Development:{" "}
            <a
              href="https://unity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Unity 3D
            </a>
          </li>
        </ul>
      ),
    },
    {
      id: "opportunities",
      question: "Are you open to freelance or internship opportunities?",
      answer: (
        <ul className="list-disc pl-6">
          <li>
            Yes, I’m open to freelance work, internships, or full-time
            opportunities in web development.
          </li>
        </ul>
      ),
    },
    {
      id: "remote",
      question: "Are you available for remote work?",
      answer: (
        <ul className="list-disc pl-6">
          <li>
            Absolutely! I’m used to working independently and communicating
            effectively through online platforms. I’m open to both remote and
            on-site roles.
          </li>
        </ul>
      ),
    },
    {
      id: "relocate",
      question: "Are you willing to relocate?",
      answer: (
        <ul className="list-disc pl-6">
          <li>
            Yes, I’m open to relocating for the right opportunity, especially if
            it supports my growth in the tech industry.
          </li>
        </ul>
      ),
    },
    {
      id: "based",
      question: "Where are you based?",
      answer: (
        <ul className="list-disc pl-6">
          <li>
            I’m currently based in{" "}
            <span className="text-primary">Surakarta (Solo)</span>, Central
            Java, Indonesia.
          </li>
        </ul>
      ),
    },
    {
      id: "pizza",
      question: "Pizza?",
      answer: (
        <ul className="list-disc pl-6">
          <li>
            <span className="text-primary">Sure</span> :))
          </li>
        </ul>
      ),
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-roboto-mono overflow-auto">
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
            <span className="text-xl ml-2 font-roboto-mono">
              frequently asked questions
            </span>
            <button
              onClick={onClose}
              className="font-roboto-mono flex items-center justify-center text-white text-base
              duration-100 hover:scale-110 active:scale-80 z-10"
            >
              [x]
            </button>
          </div>

          {/* Content area with fixed height scroll */}
          <div
            className={`flex flex-col p-6 rounded-b-lg h-[400px] overflow-y-auto ${
              darkMode
                ? "bg-[#132135] text-white border-[#fff] border-2"
                : "bg-white text-[#424242] border-2 border-t-0 border-[#a4a4a4]"
            }`}
          >
            {/* FAQ Items */}
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="mb-4 rounded-sm border-1 border-[#fff8e0]"
              >
                <div
                  className={`flex justify-between items-center p-4 cursor-pointer rounded ${
                    darkMode ? "bg-[#3f80bd]" : "bg-[#fff8e0]"
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="font-semibold text-base font-roboto-mono text-gray">
                    {item.question}
                  </span>
                  <span className="text-gray">
                    {expandedItems[item.id] ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>

                {expandedItems[item.id] && (
                  <div className="m-3 text-base font-zen-kaku">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default FAQModal;
