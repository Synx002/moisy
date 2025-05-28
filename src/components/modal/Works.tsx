import React, { useRef } from "react";
import Draggable from "react-draggable";
import tekadHero from "../../assets/tekadHero.png";
import kaboHero from "../../assets/kaboHero.png";
import myTaxHero from "../../assets/myTaxHero.png";
import daikhHero from "../../assets/daikhHero.png";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

interface SkillItem {
  name: string;
}

const WorkModal: React.FC<WorkModalProps> = ({ isOpen, onClose, darkMode }) => {
  const nodeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLElement>;

  // Tools data
  const tools: SkillItem[] = [
    { name: "Visual Studio Code" },
    { name: "Figma" },
    { name: "Git" },
  ];

  // Development skills data
  const devSkills: SkillItem[] = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "PHP" },
    { name: "Python" },
    { name: "React" },
    { name: "Vue" },
    { name: "Tailwind" },
    { name: "Bootstrap" },
    { name: "Node.js" },
    { name: "MySql" },
    { name: "Postgre" },
  ];

  interface Project {
    title: string;
    description: string;
    extraInfo: string;
    imageUrl: string;
    webUrl: string;
  }

  const projects: Project[] = [
    {
      title: "Tekadverse",
      description:
        "my sibling had this awesome idea for a digital comic agency, so naturally i got roped into building the website 😅 now it’s live and full of artsy comic energy!",
      extraInfo:
        "all the web dev magic (aka: coding, debugging, crying at 2am) was done by me! super proud of how it turned out 💻✨.",
      imageUrl: tekadHero,
      webUrl: "https://synx002.github.io/tekadverse-2024/",
    },
    {
      title: "My Tax Indonesia",
      description:
        "my very first job experience! i didn’t build the whole thing, but i do keep the website alive and looking fresh ✨ mostly handling UI stuff and squashing bugs before they bite 🐛💥",
      extraInfo:
        "this is where i learned the joys of ‘maintenance mode’—aka reading someone else’s code and trying not to cry. UI updates? done. weird layout bugs? also done. proud to be part of it!",
      imageUrl: myTaxHero,
      webUrl: "https://mytax.co.id/",
    },
    {
      title: "Daikh & Co",
      description:
        "started with a template, gave it a glow-up ✨ helped build and update the UI for this stylish site—now it looks way cooler than it did before 😎",
      extraInfo:
        "no shame in the template game! i tweaked, tuned, and transformed the design to match the brand's vibe. lots of UI polishing, color picking, and the occasional css battle 💅💻",
      imageUrl: daikhHero,
      webUrl: "https://daikhnco.com/",
    },
    {
      title: "Kabo",
      description:
        "my very first freelance gig! built it with WordPress + sprinkled in some GSAP magic for smooth animations ✨ it used to look super slick... until they changed the UI 😢",
      extraInfo:
        "i was in charge of the full setup and animation work—learned a lot about client work, WordPress quirks, and how to make things move nicely on scroll. it’s changed since, but hey, it was mine once!",
      imageUrl: kaboHero,
      webUrl: "https://kabo.id/",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-zen-kaku overflow-auto">
      <Draggable
        nodeRef={nodeRef}
        handle=".modal-handle"
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div
          ref={nodeRef as React.RefObject<HTMLDivElement>}
          className="w-[850px] shadow-lg overflow-hidden"
        >
          {/* Header bar */}
          <div
            className={`modal-handle flex justify-between items-center px-6 py-3 cursor-move text-white rounded-t-lg ${
              darkMode ? "bg-[#171717] border-2 border-b-0" : "bg-[#424242]"
            }`}
          >
            <span className="text-xl ml-2 font-roboto-mono">works</span>
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
            className={`flex flex-col p-6 rounded-b-lg max-h-[500px] overflow-y-auto ${
              darkMode
                ? "bg-[#132135] text-white border-[#fff] border-2"
                : "bg-white text-[#424242] border-2 border-t-0 border-[#a4a4a4]"
            }`}
          >
            {/* Email info section */}
            <div className="bg-amber-50 p-4 rounded mb-6">
              <p className="text-black">
                Accepting work offers via my{" "}
                <span className="text-amber-600 font-medium">work email</span>!
              </p>
              <p className="text-black">
                I do web design and web/app development. :)
              </p>
            </div>

            {/* Two-column layout for Tools and Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Development column */}
              <div>
                <h2 className="text-xl font-roboto-mono uppercase mb-4 font-bold">
                  Development
                </h2>
                <div className="flex flex-wrap gap-2">
                  {devSkills.map((skill, index) => (
                    <span
                      key={index}
                      className={`inline-block px-2 py-2 rounded-md text-base border-1 hover:translate-y-[2px] ${
                        darkMode
                          ? "bg-[#171717] text-white border-white drop-shadow-[0_5px_0_rgba(255,255,255,0.2)]"
                          : "bg-white text-[#424242] border-[#f5f5f5] drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools column */}
              <div>
                <h2 className="text-xl font-roboto-mono uppercase mb-4 font-bold">
                  Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`inline-block px-2 py-2 rounded-md text-base border-1 hover:translate-y-[2px]  ${
                        darkMode
                          ? "bg-[#171717] text-white border-white drop-shadow-[0_5px_0_rgba(255,255,255,0.2)]"
                          : "bg-white text-[#424242] border-[#f5f5f5] drop-shadow-[0_5px_0_rgba(0,0,0,0.2)]"
                      }`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Showcase section */}
            <div className="mt-8">
              <h2 className="text-xl font-roboto-mono uppercase mb-4 font-bold">
                Projects
              </h2>
              <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-6 pb-5 items-start border-b-2 border-[#f5f5f5]"
                  >
                    {/* Gambar project */}
                    <div className="flex-shrink-0">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-[180px] h-[180px] md:w-[220px] rounded-lg object-cover "
                      />
                    </div>

                    {/* Konten teks */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl text-amber-600 font-bold">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-base">
                          {project.description}
                        </p>
                        <p className="mt-2 text-sm md:text-base">
                          {project.extraInfo}
                        </p>
                      </div>

                      <div className="mt-6 text-center">
                        <a
                          href={project.webUrl}
                          target="_blank"
                          className="bg-amber-100 text-amber-600 px-4 py-2 rounded font-semibold text-sm hover:bg-amber-200"
                        >
                          visit
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Other Project*/}
            <div>
              <p className="mt-5 text-xl font-semibold">Other dev projects:</p>
              <ul className="py-5 list-disc pl-6 text-lg">
                <li>This Website!</li>
                <li>
                  that's it for now, there are some more projects i'm working on
                  in the background that i'll release soon :)
                </li>
              </ul>
            </div>
            <div className="mt-1">
              see more on&nbsp;
              <a
                href="https://github.com/Synx002"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-[#f59300] hover:text-[#c0faff] transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default WorkModal;
