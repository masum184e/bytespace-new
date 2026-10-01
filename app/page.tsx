import Courses from "@/components/home/courses";
import CreatorCTA from "@/components/home/cta";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Partnership from "@/components/home/partnership";
import Testimonials from "@/components/home/testimonials";
import Footer from "@/components/layout/footer";

const page = () => {
  return (
    <main>
      <Hero />
      <Partnership />
      <Courses />
      <Features/>
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default page;
