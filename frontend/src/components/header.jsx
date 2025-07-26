// react icons
import { FaGithub, FaTwitter } from "react-icons/fa";

// header
const Header = () => {
  return (
    <header className="bg-[#050405] text-white flex justify-between items-center px-6 py-4 shadow-[0_0_10px_#ba72bc]">
      {/* Logo */}
      <a href="/">
        <div className="text-[26px] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ba72bc] via-[#ff88ff] to-[#ffd6e0] drop-shadow-[0_0_10px_#ba72bc] cursor-pointer">
          𝙁𝙪𝙩𝙪𝙧𝙚<span className="text-white">𝙂𝙧𝙖𝙢</span>
        </div>
      </a>

      {/* Social Links */}
      <div className="flex gap-4 text-2xl">
        <a
          href="https://github.com/hitoriiiiiiii/FutureGram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ba72bc] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/panic_coder"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ba72bc] transition"
        >
          <FaTwitter />
        </a>
      </div>
    </header>
  );
};

export default Header;