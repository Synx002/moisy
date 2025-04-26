import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-[#fff] border-2 mt-10 border-[#a4a4a4] shadow-md rounded-lg overflow-hidden w-full max-w-3xl z-10">
        {/* Header */}
        <div className="bg-[#424242] text-white font-mono text-lg px-6 py-3 rounded-t-lg">
          home
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center p-10 h-[500px]">
          <h1 className="text-4xl font-body mb-2 text-gray-800">
            hi! <span className="text-orange-500 font-bold">i'm Syam</span>
          </h1>
          <p className="text-gray-600 font-body mb-10 text-center">
            illustrator, animator, and developer
          </p>

          {/* Icon buttons */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* About */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/ios/100/000000/info--v1.png"
                alt="About"
                className="w-16 h-16"
              />
              <span className="mt-2 text-gray-700 font-body text-sm">
                about
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/ios/100/000000/link--v1.png"
                alt="Links"
                className="w-16 h-16"
              />
              <span className="mt-2 text-gray-700 font-body text-sm">
                links
              </span>
            </div>

            {/* Work */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/ios/100/000000/opened-folder.png"
                alt="Work"
                className="w-16 h-16"
              />
              <span className="mt-2 text-gray-700 font-body text-sm">work</span>
            </div>

            {/* FAQ */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/ios/100/000000/help.png"
                alt="FAQ"
                className="w-16 h-16"
              />
              <span className="mt-2 text-gray-700 font-body text-sm">faq</span>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/ios/100/000000/filled-message.png"
                alt="Contact"
                className="w-16 h-16"
              />
              <span className="mt-2 text-gray-700 font-body text-sm">
                contact
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
