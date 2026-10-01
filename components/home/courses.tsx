import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Course } from "@/types/course";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ChartNoAxesColumn, Star } from "lucide-react";
import { Badge } from "../ui/badge";

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

export const courses: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    image: "/images/courses/1.jpg",
    students: [
      { id: "1", avatar: "/avatar/students/2.png" },
      { id: "2", avatar: "/avatar/students/8.png" },
      { id: "3", avatar: "/avatar/sarah.png" },
      { id: "4", avatar: "/avatar/students/9.png" },
    ],
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/2.jpg",
    students: [
      { id: "1", avatar: "/avatar/students/2.png" },
      { id: "2", avatar: "/avatar/students/8.png" },
      { id: "3", avatar: "/avatar/sarah.png" },
      { id: "4", avatar: "/avatar/students/9.png" },
    ],
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    image: "/images/courses/3.jpg",
    students: [
      { id: "1", avatar: "/avatar/students/2.png" },
      { id: "2", avatar: "/avatar/students/8.png" },
      { id: "3", avatar: "/avatar/sarah.png" },
      { id: "4", avatar: "/avatar/students/9.png" },
    ],
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Life",
    image: "/images/courses/4.jpg",
    students: [
      { id: "1", avatar: "/avatar/students/2.png" },
      { id: "2", avatar: "/avatar/students/8.png" },
      { id: "3", avatar: "/avatar/sarah.png" },
      { id: "4", avatar: "/avatar/students/9.png" },
    ],
  },
  {
    id: "money",
    title: "Mastering Money Management",
    image: "/images/courses/5.jpg",
    students: [
      { id: "1", avatar: "/avatar/students/2.png" },
      { id: "2", avatar: "/avatar/students/8.png" },
      { id: "3", avatar: "/avatar/sarah.png" },
      { id: "4", avatar: "/avatar/students/9.png" },
    ],
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    image: "/images/courses/6.jpg",
    students: [
      { id: "1", avatar: "/avatar/students/2.png" },
      { id: "2", avatar: "/avatar/students/8.png" },
      { id: "3", avatar: "/avatar/sarah.png" },
      { id: "4", avatar: "/avatar/students/9.png" },
    ],
  },
].map((c) => ({
  ...c,
  creator: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
}));

export function CourseCard({ course }: { course: Course }) {
  const stats = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ];

  return (
    <Card className="border border-gray-200 rounded-3xl p-4 shadow-none gap-0 bg-white">
      {/* Thumbnail with stat chips */}
      <Link href={`/courses/${course.id}`} className="relative h-[200px]">
        <Avatar className="w-full h-full">
          <AvatarImage
            src={course.image}
            alt={course.title}
            className="object-cover rounded-3xl"
          />
          <AvatarFallback className="rounded-3xl bg-gray-200">
            {course.title.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex items-center justify-between gap-3 absolute bottom-4 inset-x-2">
          {stats.map((stat) => (
            <Badge
              key={stat}
              variant="secondary"
              className="text-xs font-medium leading-[120%] tracking-normal p-3 bg-white/60  hover:bg-white/60 backdrop-blur-sm text-black-700 whitespace-nowrap rounded-3xl"
            >
              {stat}
            </Badge>
          ))}
        </div>
      </Link>

      {/* Title + rating */}
      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold leading-[120%] tracking-[-1%] font-poppins">
          <Link href={`/courses/${course.id}`}>{course.title}</Link>
        </h3>
        <span className="flex gap-1 shrink-0 items-center text-lg font-normal leading-[160%] tracking-normal text-black-700">
          {course.rating}
          <Star className="h-4 w-4 fill-gray-200 text-gray-200" aria-hidden />
        </span>
      </div>

      {/* Level + students */}
      <div className="flex items-center">
        <Badge variant="secondary" className="">
          <ChartNoAxesColumn aria-hidden />
          {course.level}
        </Badge>
        <div className="flex items-center">
          {course.students &&
            course.students.map((student) => (
              <Avatar
                key={student.id}
                className="-ml-2 h-8 w-8 border-2 border-white first:ml-0"
              >
                {student.avatar && (
                  <AvatarImage src={student.avatar} alt={student.id} />
                )}
                <AvatarFallback className="bg-gray-200" />
              </Avatar>
            ))}
          <span className="-ml-2 bg-lime-400 text-[10px] font-medium  leading-[120%] tracking-normal h-8 w-8 rounded-full flex items-center justify-center border-2 border-white">
            {/* {course.students && course.students.length - 4}+ */}
            26+
          </span>
        </div>
      </div>

      <p className="mt-0.5 text-xs font-normal leading-[160%] tracking-normal text-black-700">
        by{" "}
        <Link href="/creators" className="text-blue-800 hover:nderline">
          {course.creator}
        </Link>
      </p>

      {/* Price */}
      <p className="mt-5 flex items-baseline">
        <span className="text-xl font-semibold leading-[120%] tracking-[-1%] font-poppins text-blue-800">
          ${course.price}
        </span>
        <span className="text-xs font-normal leading-[160%] tracking-normal text-black-700 ml-0.5">
          /lifetime
        </span>
      </p>
    </Card>
  );
}

const Courses = () => {
  // const [active, setActive] = useState("Featured");
  // const [expanded, setExpanded] = useState(false);

  // const visible = expanded ? [...categories, ...moreCategories] : categories;
  const active = "Featured";
  const expanded = false;
  const visible = categories;
  return (
    <section className="bg-white px-6 md:px-0 py-16 md:py-20 mx-auto max-w-[1200px]">
      <h2 className="text-4xl md:text-[44px] font-semibold leading-[120%] tracking-[-1%] text-black-950 text-balance font-poppins max-w-xl mx-auto text-center">
        Discover Your Passion, Build Your Skills
      </h2>
      <p className="text-lg font-normal leading-[160%] tracking-normal text-gray-400 max-w-[860px] mx-auto mt-5 text-pretty text-center">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>
      <div
        role="group"
        aria-label="Course categories"
        className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center"
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

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
