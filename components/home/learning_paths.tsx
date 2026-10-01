import {
  Building2,
  Camera,
  Laptop,
  Megaphone,
  PencilRuler,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Category = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const categories: Category[] = [
  { label: "Design", href: "/courses?category=design", icon: PencilRuler },
  {
    label: "Development",
    href: "/courses?category=development",
    icon: Smartphone,
  },
  {
    label: "IT & Software",
    href: "/courses?category=it-software",
    icon: Laptop,
  },
  { label: "Business", href: "/courses?category=business", icon: Building2 },
  { label: "Marketing", href: "/courses?category=marketing", icon: Megaphone },
  { label: "Photography", href: "/courses?category=photography", icon: Camera },
];

const LearningPaths = () => {
  return (
    <section className="bg-white px-6 md:px-0 py-16 md:py-20 mx-auto max-w-[1200px]">
      <h2 className="text-4xl md:text-[44px] font-semibold leading-[120%] tracking-[-1%] text-black-950 text-balance font-poppins mx-auto text-center">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="text-lg font-normal leading-[160%] tracking-normal text-gray-400 max-w-[960px] mx-auto mt-5 text-pretty text-center">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(({ label, icon: Icon }) => (
          <li key={label}>
            <Card className="border-border shadow-none rounded-3xl">
              <CardContent className="flex items-center flex-col gap-2 px-4 py-8">
                <span className="bg-lime-400 text-gray-950 p-3 rounded-full flex-items-center justify-center">
                  <Icon className="size-7" strokeWidth={2.25} aria-hidden />
                </span>
                <span className="text-xl font-medium leading-[120%] tracking-normal">
                  {label}
                </span>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LearningPaths;