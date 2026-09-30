"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./logo";
import { useState } from "react";

const linkColumns = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Email Sent Successfully!");
  }

  return (
    <footer className={"bg-white"}>
      <div className="mx-auto max-w-[1200] px-6 pt-16 md:px-0 md:pt-[70px]">
        <Logo />
        <div className="grid gap-12 md:grid-cols-2 md:gap-0 mt-4">
          {/* Newsletter */}
          <div className="max-w-[500px]">
            <p className="text-sm font-normal leading-[160%] tracking-normal">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex items-center gap-2"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-[52px] rounded-full px-6 py-3 text-base font-normal leading-[160%] tracking-normal border border-gray-200 shadow-none placeholder:text-gray-950 flex-1"
              />
              <Button
                type="submit"
                className="h-[46px] rounded-full px-6 py-3 text-lg font-medium leading-[120%] bg-lime-400 hover:bg-lime-500 cursor-pointer"
              >
                Search
              </Button>
            </form>

            <p className="text-xs font-normal leading-[160%] tracking-normal mt-6">
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:pt-1"
          >
            {linkColumns.map((col, i) => (
              <ul key={i} className="flex flex-col items-start gap-4">
                {col.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal leading-[160%] tracking-normal hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col gap-4 border-t border-gray-200 py-8 text-xs md:mt-32 md:flex-row md:items-center md:justify-between text-xs font-normal leading-[160%]">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
