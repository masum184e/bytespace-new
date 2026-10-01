import { Button } from "@/components/ui/button";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

// // Revealed by "+ More"
// const moreCategories = [
//   "Business",
//   "Finance",
//   "IT",
//   "Sport",
//   "Development",
//   "Design",
// ];

const Courses = () => {
  // const [active, setActive] = useState("Featured");
  // const [expanded, setExpanded] = useState(false);

  // const visible = expanded ? [...categories, ...moreCategories] : categories;
  const active = "Featured";
  const expanded = false;
  const visible = categories;
  return (
    <section className="bg-white px-6 py-16 md:py-20 text-center">
      <h2 className="text-4xl md:text-[44px] font-semibold leading-[120%] tracking-[-1%] text-black-950 text-balance font-poppins max-w-xl mx-auto">
        Discover Your Passion, Build Your Skills
      </h2>
      <p className="text-lg font-normal leading-[160%] tracking-normal text-gray-400 max-w-[860px] mx-auto mt-5 text-pretty">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>
      <div
        role="group"
        aria-label="Course categories"
        className="max-w-[1180px] mx-auto mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {visible.map((category) => {
          const isActive = category === active;
          return (
            <Button
              key={category}
              type="button"
              variant="ghost"
              aria-pressed={isActive}
              className={`h-[46px] text-base font-medium leading-[120%] tracking-normal cursor-pointer px-4 py-3 rounded-3xl ${isActive ? "bg-lime-400 hover:bg-lime-500" : "bg-gray-50"}`}
            >
              {category}
            </Button>
          );
        })}
        <Button
          type="button"
          variant="link"
          // onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="h-[46px] text-base font-medium leading-[120%] tracking-normal cursor-pointer no-underline hover:no-underline text-blue-800"
        >
          {expanded ? "− Less" : "+ More"}
        </Button>
      </div>
    </section>
  );
};

export default Courses;
