import SurfBoards from "@/components/custom/SurfBoards";
import WayneBio from "@/components/custom/WayneBio";
import WayneVideo from "@/components/custom/WayneVideo";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center mt-10">
      <WayneBio />
      <WayneVideo />
      <SurfBoards />
    </main>
  );
}
