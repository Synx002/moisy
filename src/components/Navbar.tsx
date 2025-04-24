const navbar = () => {
  return (
    <>
      <nav className="p-3">
        <button className="p-2 duration-250 hover:scale-110 active:scale-80">
          <img
            src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fdark_mode_light.webp&w=48&q=75"
            alt="dark mode toggle"
            draggable="false"
            loading="lazy"
            width={40}
            height={40}
          />
        </button>
        <button className="p-2 duration-250 hover:scale-110 active:scale-80">
          <img
            src="https://www.sharyap.com/_next/image?url=%2Fimages%2Fsfx_on_light.webp&w=96&q=75"
            alt="dark mode toggle"
            draggable="false"
            loading="lazy"
            width={40}
            height={40}
          />
        </button>
      </nav>
    </>
  );
};

export default navbar;
