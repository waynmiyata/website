import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function SurfBoards() {
  return (
    <section className="w-5/6 mt-10 mx-auto font-sans border-2 border-brand-red">
      <div className="bg-brand-yellow">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <h3 className="text-2xl font-light p-4 tracking-wide bg-brand-red text-white">
                SAMURAI
              </h3>
              <div className="w-full pt-3">
                <Image
                  src="/images/boards/samurai.gif"
                  alt="samurai"
                  width={683}
                  height={111}
                  className="mx-auto"
                />
              </div>
              <p className="p-4 leading-relaxed">
                Wayne loved Samurai movies—the signature Wayne Miyata symbol is
                modeled after his favorite Japanese Samurai actor, Toshiro
                Mifune. The sturdy, classic construction of "Samurai" will
                perform for surfers of all skill levels.
              </p>
            </CarouselItem>
            <CarouselItem>
              <h3 className="text-2xl font-light p-4 tracking-wide bg-brand-red text-white">
                RAZOR'S EDGE
              </h3>
              <div className="w-full pt-3">
                <Image
                  src="/images/boards/razors-edge.gif"
                  alt="razors-edge"
                  width={683}
                  height={111}
                  className="mx-auto"
                />
              </div>
              <p className="p-4 leading-relaxed">
                In Wayne's early 20's rumor had it that he would tape razor
                blades to the edge of his board, warding off other surfers from
                getting in the way of "his" waves. You'll own the water with a
                "Razor's Edge" — it's an aggressive tool for dominating waves of
                any size.
              </p>
            </CarouselItem>
            <CarouselItem>
              <h3 className="text-2xl font-light p-4 tracking-wide bg-brand-red text-white">
                BLACK BELT
              </h3>
              <div className="w-full pt-3">
                <Image
                  src="/images/boards/black-belt.gif"
                  alt="black-belt"
                  width={683}
                  height={111}
                  className="mx-auto"
                />
              </div>
              <p className="p-4 leading-relaxed">
                Wayne mastered Kajukenbo Karate, the art of self-defense. From
                this training, he developed his own unique surfing style — a
                talent highly regarded throughout his life by other surfers,
                filmmakers, and photographers. "Black Belt" delivers a strong,
                graceful ride and helps you get creative with new moves.
              </p>
            </CarouselItem>
            <CarouselItem>
              <h3 className="text-2xl font-light p-4 tracking-wide bg-brand-red text-white">
                RISING SUN
              </h3>
              <div className="w-full pt-3">
                <Image
                  src="/images/boards/rising-sun.gif"
                  alt="rising-sun"
                  width={683}
                  height={111}
                  className="mx-auto"
                />
              </div>
              <p className="p-4 leading-relaxed">
                Wayne was dedicated to his Japanese heritage—the design on this
                board is one of his originals, modeled after Japan's Naval
                Self-Defense Flag. Designed for surfing big waves, "Rising Sun"
                gives your surf an extra edge when you need it.
              </p>
            </CarouselItem>
            <CarouselItem>
              <h3 className="text-2xl font-light p-4 tracking-wide bg-brand-red text-white">
                BANZAI EHUKAI
              </h3>
              <div className="w-full pt-3">
                <Image
                  src="/images/boards/banzai-ehukai.gif"
                  alt="banzai-ehukai"
                  width={683}
                  height={111}
                  className="mx-auto"
                />
              </div>
              <p className="p-4 leading-relaxed">
                "Banzai" (a common Japanese toast) and Ehukai (Hawaiian name for
                "Pipeline") reflect Wayne's love for fun and surf. Pipeline,
                despite its dangerous waves near coral reefs, was one of his
                favorite spots on the North Shore. "Banzai Ehukai" offers a
                thrilling ride no matter where you're surfing.
              </p>
            </CarouselItem>
            <CarouselItem>
              <h3 className="text-2xl font-light p-4 tracking-wide bg-brand-red text-white">
                UNCLE PRESSURE
              </h3>
              <div className="w-full pt-3">
                <Image
                  src="/images/boards/uncle-pressure.gif"
                  alt="uncle-pressure"
                  width={683}
                  height={111}
                  className="mx-auto"
                />
              </div>
              <p className="p-4 leading-relaxed">
                Playfully nicknamed "Uncle Pressure" by his staff, Wayne had a
                reputation for taking his craft seriously. "Uncle Pressure"
                provides strength and precision for an ultra-smooth ride in all
                conditions.
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
export default SurfBoards;
