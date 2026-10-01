import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Testimonial } from "@/types/testimonial";

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/avatar/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/avatar/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/avatar/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAFAFA]">
      {/* Soft gradient blobs: periwinkle (bottom-left), lime (center-top), lime (right) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute"
          style={{
            width: "1137px",
            height: "1137px",
            left: "-442px",
            top: "149px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
            filter: "blur(20px)",
          }}
        />

        <div
          className="absolute"
          style={{
            width: "672px",
            height: "672px",
            left: "395px",
            top: "-138px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(20px)",
          }}
        />

        <div
          className="absolute"
          style={{
            width: "1137px",
            height: "1137px",
            left: "842px",
            top: "-241px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-0 md:py-[100px]">
        {/* Heading row */}
        <div className="grid gap-6 md:grid-cols-[1fr_580px] md:items-center md:gap-0">
          <h2 className="text-4xl md:text-[44px] font-semibold leading-[120%] tracking-[-1%] text-black-950 text-balance font-poppins max-w-[480px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-lg font-normal leading-[160%] tracking-normal text-black-700 text-pretty">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards — heights follow their content, like the design */}
        <ul className="mt-14 grid items-start gap-6 md:mt-[72px] md:grid-cols-3 md:gap-[41px]">
          {testimonials.map((t) => (
            <li key={t.name}>
              <Card className="bg-white p-6 gap-0 rounded-3xl border-0 shadow-none">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={t.avatar}
                    alt={t.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-neutral-200 text-lg font-medium text-neutral-600">
                    {t.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <p className="mt-8 text-xl font-semibold leading-[120%] tracking-[-1%] font-poppins">
                  {t.name}
                </p>
                <p className="mt-1 text-lg font-normal leading-[160%] tracking-normal text-blue-800">
                  {t.role}
                </p>
                <blockquote className="mt-6 text-lg font-normal leading-[160%] tracking-normal text-black-700">
                  “{t.quote}”
                </blockquote>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
