import Image from "next/image";
import WayneHeadshot from "/public/images/wayne-headshot.jpg";

function WayneBio() {
  return (
    <section className="mx-6 font-sans border-2 border-brand-red">
      <div className="bg-brand-yellow pb-16">
        <h3 className="text-2xl font-light bg-brand-red py-2 px-4 text-white">
          Wayne Miyata (1942-2005)
        </h3>
        <Image
          src={WayneHeadshot}
          alt="Wayne Miyata"
          className="float-right w-48 md:w-64 mx-8 md:mb-8 md:mt-8 rounded"
        />

        <p className="pt-6 p-4 text-lg font-light leading-snug">
          Wayne Miyata surfboards are designed and produced by real surfers that
          know the mechanics of a high performance board. The founder, Wayne
          Miyata, dedicated 50 years of his life to riding, designing, and
          building surfboards.
        </p>
        <p className="p-4 pt-0 text-lg font-light leading-snug">
          He perfected old-style techniques of pinlining and glossing surfboards
          while passing down this knowledge and skill to many of the young men
          he mentored and who continue to develop the craft as he trained them.
        </p>
      </div>
    </section>
  );
}
export default WayneBio;
