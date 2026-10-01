import { CircleCheck } from "lucide-react";
import { CourseCard, courses } from "./courses";
import Image from "next/image";
import {
  HappyStudents,
  LearningProgress,
  LIME,
  SHADE_LIME,
  Shape,
} from "./hero";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const photoShadow = { filter: "drop-shadow(0 30px 40px rgba(20,30,80,0.18))" };

const LearnerVisual = () => {
  return (
    <div className="relative ml-[40px] h-[550px] w-[575px]">
      {/* 4. Backmost: Course Card */}
      <div className="absolute left-0 top-0 z-10 h-[385px] w-[370px]">
        <CourseCard course={courses[0]} />
      </div>

      {/* 3. Image */}
      <Image
        src="/avatar/hero.png"
        alt="Smiling student with headset holding a laptop"
        width={1500}
        height={1270}
        className="absolute left-[20px] bottom-[60px] z-20 h-[1270px] w-[1500px] object-contain object-bottom"
        style={photoShadow}
      />

      {/* 2. Learning Progress */}
      <div className="relative z-30">
        <LearningProgress position="left-[345px] top-[213px]" />
      </div>

      {/* 1. Frontmost: Shape */}
      <div className="relative z-40">
        <Shape
          file="symbol_4_spiral.png"
          color={LIME}
          shade={SHADE_LIME}
          size={216}
          left={404}
          top={67}
        />
      </div>
    </div>
  );
};

const TotalRevenue = () => {
  return (
    <div className="p-4 bg-blue-800 rounded-2xl w-[300px]  text-white">
      <p className="text-base font-medium leading-[120%] tracking-normal text-gray-50">
        Total Revenue
      </p>
      <p className="mt-1 text-[10px] font-normal leading-[120%] tracking-normal text-gray-50">
        July 1-28
      </p>
      <p className="text-2xl font-semibold leading-[32px] tracking-[-1%] font-poppins mt-2">
        $120.29
      </p>
      <div className="mt-3 h-2 w-full rounded-3xl bg-white">
        <div
          className="h-full rounded-3xl bg-lime-400"
          style={{ width: "60%" }}
        />
      </div>
    </div>
  );
};

const YearToDate = () => {
  return (
    <div className="p-4 bg-blue-800 rounded-2xl w-[134px] text-white">
      <p className="text-base font-medium leading-[120%] tracking-normal text-gray-50">
        Year to Date
      </p>
      <p className="mt-1 text-[10px] font-normal leading-[120%] tracking-normal text-gray-50">
        2023
      </p>
      <p className="text-2xl font-semibold leading-[32px] tracking-[-1%] font-poppins mt-2">
        $1,200.38
      </p>
      <span className="mt-3 inline-flex items-center px-2 py-1 bg-lime-500 rounded-3xl text-gray-950 text-[10px] font-medium">
        +12$
      </span>
    </div>
  );
};

const CreatorVisual = () => {
  return (
    <div className="relative h-[560px] w-[600px]">
      {/* 5. Backmost: Year to Date */}
      <div className="absolute left-px top-[158px] z-10">
        <YearToDate />
      </div>

      {/* 4. Total Revenue */}
      <div className="absolute left-px top-2 z-20">
        <TotalRevenue />
      </div>

      {/* 3. Image */}
      <Image
        src="/avatar/hero-2.png"
        alt="Smiling creator with headset holding a tablet"
        width={1500}
        height={1270}
        className="absolute left-[-50px] top-0 z-30  object-contain object-bottom"
        style={photoShadow}
      />

      {/* 2. Happy Students */}
      <HappyStudents position="left-[284px] top-[377px] z-40" />

      {/* 1. Frontmost: Shape */}
      <div className="relative z-50">
        <Shape
          file="symbol_2_spiral.png"
          color={LIME}
          shade={SHADE_LIME}
          size={216}
          left={302}
          top={80}
        />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-lime-300/50 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-300/40 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-508px] top-[183px] z-0 h-[1137px] w-[1137px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.16)_0%,rgba(0,59,226,0.0368)_53%,rgba(0,59,226,0.0096)_75%,rgba(0,59,226,0)_100%)]" />
      <div className="pointer-events-none absolute left-[-287px] top-[946px] z-0 h-[672px] w-[672px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.138)_53%,rgba(203,252,1,0.036)_75%,rgba(203,252,1,0)_100%)]" />
      <div className="pointer-events-none absolute right-[-300px] top-[-250px] z-0 h-[720px] w-[720px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.35)_0%,rgba(203,252,1,0.0805)_53%,rgba(203,252,1,0.021)_75%,rgba(203,252,1,0)_100%)]" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-16 md:gap-[100px] px-6 md:px-0 py-16 md:py-[120px]">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-0">
          <div>
            <h2 className="text-3xl md:text-[44px] font-semibold leading-[120%] tracking-[-1%] md:leading-[1.15] font-poppins max-w-[560px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-lg font-normal leading-[160%] tracking-normal text-gray-700 max-w-[480px] mt-10">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="flex gap-14 mt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-medium leading-[44px] tracking-[-1%] font-poppins text-blue-800">
                    {stat.value}
                  </p>
                  <p className="text-lg font-normal leading-[160%] tracking-normal text-gray-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <LearnerVisual />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-0">
          <CreatorVisual />
          <div className="md:pl-5">
            <h2 className="text-3xl md:text-[44px] font-semibold leading-[120%] tracking-[-1%] md:leading-[1.15] font-poppins max-w-[480px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="text-lg font-normal leading-[28px] tracking-normal text-gray-700 max-w-[570px] mt-10">
              <strong>ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4 mt-10">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-lg font-medium leading-[120%] tracking-normal"
                >
                  <CircleCheck className="h-5 w-5 shrink-0 fill-blue-800 text-white" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
