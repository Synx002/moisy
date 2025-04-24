import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="fixed pointer-events-none bottom-0 w-screen h-screen z-0 md:z-10 flex flex-col items-center">
        <div className="pointer-events-auto max-w-[var(--froggert-width)] right-[1%] bottom-0 absolute flex justify-end">
          <div>
            <button className="cursor-pointer duration-150 hover:scale-105 hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] bobbing">
              <img
                src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fplayer%2Ffroggert_stop.webp&w=1080&q=75"
                alt="froggert stop"
                draggable="false"
                loading="lazy"
                width={150}
                height={150}
              />
            </button>
          </div>
        </div>
        <div className="flex absolute w-screen bottom-[1.5%] bg-(--transparent) hidden md:flex justify-center">
          <div>
            <button className="pointer-events-auto relative rounded-md duration-250 cursor-pointer h-[50px] w-[50px] hover:scale-105 active:scale-90">
              <div className="flex justify-center">
                <FaGithub
                  size={32}
                  className="hidden dark:block drop-shadow-sm max-w-[50px]"
                />
              </div>
            </button>
          </div>
          <div>
            <button className="pointer-events-auto relative rounded-md duration-250 cursor-pointer h-[50px] w-[50px] hover:scale-105 active:scale-90">
              <div className="flex justify-center">
                <FiInstagram
                  size={32}
                  className="hidden dark:block drop-shadow-sm max-w-[50px]"
                />
              </div>
            </button>
          </div>
          <div>
            <button className="pointer-events-auto relative rounded-md duration-250 cursor-pointer h-[50px] w-[50px] hover:scale-105 active:scale-90">
              <div className="flex justify-center">
                <FaLinkedin
                  size={32}
                  className="hidden dark:block drop-shadow-sm max-w-[50px]"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="text-center text-sm fixed bottom-1 text-gray">
          © 2025 Mohammad Syam
        </div>
      </footer>
    </>
  );
};

export default Footer;
