import Image from "next/image";
import { Search, Star } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "../layout/header";

const students = [
  "/avatar/students/1.png",
  "/avatar/students/2.png",
  "/avatar/students/3.png",
  "/avatar/students/4.png",
  "/avatar/students/5.png",
];

const cardClass = "absolute rounded-2xl bg-white p-4 shadow-sm z-15";

function HeroVisual() {
  return (
    <div className="relative z-15 w-full max-w-[900px] mx-auto h-[420px] mt-14 md:absolute md:bottom-0 md:left-1/2 md:mt-0 md:h-[500px] md:w-[900px] md:-translate-x-1/2">
      {/* Lime arc */}
      <div
        aria-hidden
        className="rounded-full bg-lime-400 h-[1120px] w-[1120px] -translate-x-1/2 absolute left-1/2 top-[60px]"
      />

      <Image
        src="/avatar/hero.png"
        alt="Smiling student with headset holding a laptop"
        width={450}
        height={476}
        priority
        className="absolute bottom-0 left-1/2 -translate-x-[43%] w-[720px]"
      />

      {/* Category */}
      <div
        className={`${cardClass} left-[134px] top-[116px] hidden w-[208px] md:block`}
      >
        <p className="text-base font-medium leading-[120%] tracking-normal text-gray-950">
          UI/UX Design
        </p>
        <p className="mt-0.5 text-xs font-normal leading-[160%] tracking-normal text-gray-400">
          200 Courses <span className="mx-1">•</span> 1000+ Students
        </p>
      </div>

      {/* Progress */}
      <div
        className={`${cardClass} left-[572px] top-[127px] hidden w-[232px] md:block`}
      >
        <p className="text-sm font-medium leading-[120%] tracking-normal text-gray-950">
          Learning Progress
        </p>
        <p className="mt-2 text-5xl font-semibold leading-[120%] tracking-[-1%] text-gray-950">
          55%
        </p>
        <div className="mt-3 h-2 w-full rounded-3xl bg-gray-200">
          <div
            className="h-full rounded-3xl bg-lime-400"
            style={{ width: "55%" }}
          />
        </div>
      </div>

      {/* Happy students */}
      <div
        className={`${cardClass} left-[58px] top-[313px] hidden w-[258px] md:block`}
      >
        <p className="text-base font-medium leading-[120%] tracking-normal text-gray-950">
          Happy Students
        </p>
        <p className="mt-0.5 text-xs font-normal leading-[120%] tracking-normal text-gray-950 flex items-center gap-1">
          4.5 <span className="text-gray-400">(240)</span>
          <Star className="h-4 w-4 fill-lime-400 text-lime-400" />
        </p>
        <div className="mt-2 flex items-center">
          {students.map((src, i) => (
            <Avatar
              key={src}
              className="-ml-2 h-10 w-10 border-2 border-white first:ml-0"
            >
              <AvatarImage src={src} alt="" className="object-cover" />
              <AvatarFallback className="bg-neutral-300 text-[10px] text-white">
                {i + 1}
              </AvatarFallback>
            </Avatar>
          ))}
          <span className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold leading-[150%] tracking-normal text-gray-950 bg-lime-400">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}

const LIME = "#E6FD2E";
const WHITE = "#FAFAFA";
const SHADE_LIME = 0.14; // 0 = flat, higher = more 3D shading
const SHADE_WHITE = 0.08;

const px = (n: number) => {
  const cqw = `${(n / 14.4).toFixed(3)}cqw`;
  return n >= 0 ? `min(${cqw}, ${n}px)` : `max(${cqw}, ${n}px)`;
};

type Anchor = Partial<Record<"left" | "right" | "top" | "bottom", number>>;

function Shape({
  file,
  color,
  shade,
  size,
  flip = false,
  ...anchor
}: {
  file: string;
  color: string;
  shade: number;
  size: number; // box size; the PNGs are square with transparent padding
  flip?: boolean;
} & Anchor) {
  const url = `url('/symbols/hero/${file}')`;
  const pos = Object.fromEntries(
    Object.entries(anchor).map(([k, v]) => [k, px(v as number)]),
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute isolate"
      style={{
        ...pos,
        width: px(size),
        height: px(size),
        backgroundColor: color,
        transform: flip ? "scaleX(-1)" : undefined,
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    >
      {/* subtle built-in shading of the PNG, multiplied onto the flat color */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: url,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
          filter: "brightness(1.2)",
          opacity: shade,
        }}
      />
    </div>
  );
}

function Shapes() {
  return (
    // Above the arc (z-10) so the torus and spiral overlap it like the design,
    // below the text (z-20). Desktop only: on phones they would crowd the text.
    <div aria-hidden className="absolute inset-0 z-[15] hidden md:block">
      {/* 1 · lime spiral — left edge, cropped by the edge */}
      <Shape
        file="symbol_1_spiral.png"
        color={LIME}
        shade={SHADE_LIME}
        size={375}
        left={-114}
        top={227}
      />

      {/* 2 · white spiral (mirrored copy of symbol 1) — under the lime one */}
      <Shape
        file="symbol_2_spiral.png"
        color={WHITE}
        shade={SHADE_WHITE}
        size={170}
        left={188}
        top={479}
        flip
      />

      {/* 3 · white torus — bottom-left */}
      <Shape
        file="symbol_3_circle.png"
        color={WHITE}
        shade={SHADE_WHITE}
        size={345}
        left={14}
        top={680}
      />

      {/* 4 · white spiral — bottom-right */}
      <Shape
        file="symbol_4_spiral.png"
        color={WHITE}
        shade={SHADE_WHITE}
        size={330}
        right={-15}
        top={673}
      />

      {/* 5 · white pyramid — right, beside the search row */}
      <Shape
        file="symbol_5_pyramid.png"
        color={WHITE}
        shade={SHADE_WHITE}
        size={190}
        right={146}
        top={462}
      />

      {/* 6 · lime cylinder — top-right, cropped by the edge */}
      <Shape
        file="symbol_6_bottle.png"
        color={LIME}
        shade={SHADE_LIME}
        size={375}
        right={-163}
        top={220}
      />
    </div>
  );
}

const Hero = () => {
  return (
    <section
      className="bg-blue-800 relative isolate overflow-hidden text-white [container-type:inline-size]
    [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)]
    [background-size:120px_120px]
    [background-position:center_top]"
    >
      {/* On desktop this is exactly the 1440 × 1024 artboard (scaled down on narrower screens) */}
      <div className="relative md:min-h-[min(71.111cqw,1024px)]">
        <Shapes />

        <div className="relative z-20">
          <Header />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-12 text-center md:pb-0 md:pt-[50px]">
          <h1 className="text-4xl font-semibold leading-[120%] tracking-[-1%] md:text-6xl lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mt-6 text-base font-light leading-[160%] text-white md:mt-[34px] lg:whitespace-nowrap">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <form
            action="#"
            method="get"
            className="mx-auto mt-10 flex w-full max-w-[580px] items-center gap-4 md:mt-[59px]"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <Input
                name="q"
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="h-[52px] rounded-full bg-white py-3 pl-12 pr-6 text-base font-normal leading-[160%] text-gray-900 shadow-none placeholder:text-gray-400"
              />
            </div>

            <Button
              type="submit"
              className="h-[46px] cursor-pointer rounded-full bg-lime-400 px-6 py-3 text-base font-medium leading-[120%] text-gray-950 hover:bg-lime-500"
            >
              Search
            </Button>
          </form>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
