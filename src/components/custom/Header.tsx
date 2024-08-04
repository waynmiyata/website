import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full relative">
      <Image
        src="/images/top-banner.gif"
        alt="Wayne Miyata Surfboards"
        width={1152}
        height={172}
      />
      <button
        className="absolute -bottom-4 right-20 border border-white font-sans
        p-2 px-4 hover:-bottom-[1.1rem] hover:right-[4.9rem] hover:bg-black hover:text-white
      z-10 flex items-center justify-center bg-brand-red text-white"
      >
        STORE
      </button>
    </div>
  );
}
export default Header;
