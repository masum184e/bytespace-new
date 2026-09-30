import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2" aria-label="ByteSpace">
      <Image
        src="/logo.svg"
        alt="ByteSpace logo"
        width={28.88}
        height={31.5}
        priority
        className="h-8 w-8 shrink-0"
      />

      <span
        className="text-[24px] text-gray-950 font-bold leading-none tracking-normal"
        style={{
          fontFamily: "Clash Display, sans-serif",
        }}
      >
        ByteSpace
      </span>
    </Link>
  );
};

export default Logo;
