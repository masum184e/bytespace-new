import Link from "next/link";
import Logo from "./logo";
import { ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Creators", href: "#" },
];

const Header = () => {
  return (
    <header className="mx-auto w-full max-w-[1200] flex items-center justify-between px-6 pt-8 md:px-0">
      <Logo textColor="text-white" />
      <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-base ${link.label === "Home" ? "font-bold" : "font-medium"} leading-[120%] tracking-normal`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-6 ">
        <Link
          href="/sign-in"
          className="text-base font-normal leading-6 tracking-normal hover:text-white"
        >
          Sign In
        </Link>
        <Link
          href="/join"
          className="text-base font-normal leading-6 tracking-normal hover:text-white"
        >
          Join Us
        </Link>
        <Link
          href="/cart"
          aria-label="Cart"
          className="text-base font-normal leading-6 tracking-normal hover:text-white"
        >
          <ShoppingBag className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
