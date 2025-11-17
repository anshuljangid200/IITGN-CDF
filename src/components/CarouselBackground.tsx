import { useEffect, useState } from "react";

const images: string[] = [
  "/Carousel-1.jpg",
  "/Carousel-2.jpg",
  "/Carousel-3.jpg",
  "/Carousel-4.jpg",
  "/Carousel-5.jpg",
  "/Carousel-6.jpg",
  "/Carousel-7.jpg",
];

const CarouselBackground = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img
        src={images[index]}
        alt="carousel background"
        className="w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out opacity-100"
      />
    </div>
  );
};

export default CarouselBackground;
