import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  textColor?: string;
}

const Logo = ({ textColor }: LogoProps) => {
  return (
    <Link href="/" className="flex items-end gap-2" aria-label="ByteSpace">
      <Image
        src="/logo.svg"
        alt="ByteSpace logo"
        width={29}
        height={32}
        priority
        className="h-8 w-8 shrink-0"
      />

      <span
        className={`text-[24px] font-bold leading-none tracking-normal ${
          textColor ?? "text-gray-950"
        }`}
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
