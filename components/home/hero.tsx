import { Search } from "lucide-react";
import Header from "../layout/header";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      className="bg-blue-800 text-white
    [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)]
    [background-size:120px_120px]
    [background-position:center_top]
    "
    >
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-[72px] font-semibold leading-[120%] tracking-[-1%]">
          Get Access to Hundreds Courses Available
        </h2>
        <p className="text-lg font-normal leading-[160%] tracking-normal">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
          action="#"
          method="get"
          className="mt-14 md:mt-[62px] w-full max-w-[600px] mx-auto flex items-center gap-4 "
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" />
            <Input
              name="q"
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              className="h-[52px] rounded-full pl-12 pr-6 py-3 text-lg font-normal leading-[160%] tracking-normal shadow-none placeholder:text-gray-200 flex-1"
            />
          </div>
          <Button
            type="submit"
            className="h-[46px] rounded-full px-6 py-3 text-lg font-medium leading-[120%] bg-lime-400 hover:bg-lime-500 cursor-pointer text-gray-950"
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
