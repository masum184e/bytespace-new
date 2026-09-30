import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <main
        className="bg-blue-800 text-white
    [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)]
    [background-size:120px_120px]
    [background-position:center_top]
    "
      >
        <Header />

        <section className="flex items-center justify-center flex-col px-6 pb-24 pt-8 text-center">
          <p
            className="text-[clamp(9rem,34vw,30rem)] font-semibold leading-[0.8] tracking-tight select-none 
          bg-clip-text   
          text-transparent 
          [background-image:linear-gradient(to_bottom,#D4FF1F_30%,rgba(212,255,31,0)_100%)]"
          >
            404
          </p>
          <h1 className="-mt-[1.0em] max-w-[900px] text-7xl font-semibold leading-[120%] tracking-[-1%]">
            The page you are looking for doesn’t exist
          </h1>
          <p className="text-lg font-normal leading-[160%] tracking-normal mt-10">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Button
            size="lg"
            className="text-lg font-medium leading-[120%] tracking-normal mt-10 rounded-full px-6 py-3 bg-lime-400 hover:bg-lime-500 text-gray-950"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </>
  );
}
