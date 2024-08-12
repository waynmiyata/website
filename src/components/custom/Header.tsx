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
      <Link href="/">
        <button
          className="absolute -bottom-4 right-[11.5rem] border border-white font-sans
        p-1 px-3 hover:-bottom-[1.1rem] hover:right-[11.4rem] hover:bg-black hover:text-white
      z-10 flex items-center justify-center bg-brand-red text-white transition-all duration-300 ease-in-out"
        >
          HOME
        </button>
      </Link>
      <Link href="/store">
        <button
          className="absolute -bottom-4 right-20 border border-white font-sans
        p-1 px-3 hover:-bottom-[1.1rem] hover:right-[4.9rem] hover:bg-black hover:text-white
      z-10 flex items-center justify-center bg-brand-red text-white transition-all duration-300 ease-in-out"
        >
          STORE
        </button>
      </Link>
    </div>
  );
}
export default Header;
