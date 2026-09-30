import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CreatorCTA() {
  return (
    <section
      className="bg-blue-800 text-white
    [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)]
    [background-size:120px_120px]
    [background-position:center_top]
    "
    >
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="max-w-xl mx-auto text-[44px] md:text-4xl font-semibold leading-[120%] tracking-[-1%] md:leading-[1.15] font-poppins">
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
