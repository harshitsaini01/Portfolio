import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="flex justify-center items-center min-h-screen mt-10">
      <div className="px-8 w-full max-w-6xl">
        <h1 className="text-white text-center text-[35px] sm:text-[45px] font-extrabold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Professional <span className="text-purple-500">Skillset</span>
        </h1>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
  { image: "public/about.png" },
];
