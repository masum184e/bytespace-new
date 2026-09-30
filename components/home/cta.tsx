import Link from "next/link";
import { Button } from "@/components/ui/button";

const LIME = "#E6FD2E";
const WHITE = "#FAFAFA";
const SHADE_LIME = 0.14; // 0 = flat, higher = more 3D shading
const SHADE_WHITE = 0.08;

const px = (n: number) => {
  const cqw = `${(n / 14.4).toFixed(3)}cqw`;
  return n >= 0 ? `min(${cqw}, ${n}px)` : `max(${cqw}, ${n}px)`;
};

type Anchor = Partial<Record<"left" | "right" | "top" | "bottom", number>>;

function Symbol({
  file,
  color,
  shade,
  size,
  ...anchor
}: {
  file: string;
  color: string;
  shade: number;
  size: number; // box size; the PNGs are square with transparent padding
} & Anchor) {
  const url = `url('/symbols/cta/${file}')`;
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
    // z-0 keeps the shapes behind the text (content is z-10)
    <div aria-hidden className="absolute inset-0 z-0">
      {/* 1 · lime spiral — top-left, cropped by the edges */}
      <Symbol
        file="symbol_1_spiral.png"
        color={LIME}
        shade={SHADE_LIME}
        size={375}
        left={-114}
        top={-153}
      />

      {/* 2 · white spiral — top, left of the heading */}
      <Symbol
        file="symbol_2_spiral.png"
        color={WHITE}
        shade={SHADE_WHITE}
        size={175}
        left={182}
        top={6}
      />

      {/* 3 · white cone — left edge */}
      <Symbol
        file="symbol_3_cone.png"
        color={WHITE}
        shade={SHADE_WHITE}
        size={189}
        left={-50}
        top={225}
      />

      {/* 4 · lime torus — bottom-left, bleeds off the bottom */}
      <Symbol
        file="symbol_4_circle.png"
        color={LIME}
        shade={SHADE_LIME}
        size={342}
        left={17}
        bottom={-152}
      />

      {/* 5 · lime triangle — top-right */}
      <Symbol
        file="symbol_5_triangle.png"
        color={LIME}
        shade={SHADE_LIME}
        size={188}
        right={173}
        top={0}
      />

      {/* 6 · white cylinder — right edge, bleeds off the side */}
      <Symbol
        file="symbol_6_cylinder.png"
        color={WHITE}
        shade={SHADE_WHITE}
        size={372}
        right={-154}
        top={5}
      />

      {/* 7 · lime spiral — bottom-right, bleeds off the bottom */}
      <Symbol
        file="symbol_7_spiral.png"
        color={LIME}
        shade={SHADE_LIME}
        size={332}
        right={1}
        bottom={-133}
      />
    </div>
  );
}

export function CreatorCTA() {
  return (
    <section
      className="relative isolate overflow-hidden bg-blue-800 text-white
    [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)]
    [background-size:120px_120px]
    [background-position:center_top]
    "
    >
      <Shapes />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-[84px] text-center">
        <h2 className="max-w-xl mx-auto text-3xl md:text-[44px] font-semibold leading-[120%] tracking-[-1%] md:leading-[1.15] font-poppins">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="text-lg font-normal leading-[160%] tracking-normal text-center mt-10 text-pretty">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Button
          size="lg"
          className="h-[46px] font-medium leading-[120%] tracking-normal mt-10 rounded-full px-6 py-3 bg-lime-400 hover:bg-lime-500 text-gray-950"
        >
          <Link href="#">Join as Creator</Link>
        </Button>
      </div>
    </section>
  );
}

export default CreatorCTA;
