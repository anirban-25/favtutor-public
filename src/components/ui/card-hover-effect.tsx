import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img from "../../../public/card1.jpg";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    image: string;
    description: string;
    rating: number;
    price: string;
    link: string;
  }[];
  className?: string;
}) => {
  const renderStars = () => {
    const maxStars = 4;
    const fullStars = Math.floor(4.3);
    const hasHalfStar = 4.3 % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} className="w-6 h-6 text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative w-6 h-6">
          <StarIcon className="absolute w-full h-full text-yellow-500" />
          <StarIcon className="absolute w-full h-full text-gray-300" />
        </div>
      );
    }

    const remainingStars = maxStars - (fullStars + (hasHalfStar ? 0.5 : 0));

    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} className="w-6 h-6 text-gray-300" />
      );
    }

    return stars;
  };
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex  w-max-screen overflow-x-auto md:grid  md:grid-cols-3  lg:grid-cols-4 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-600/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Image
              src={img}
              alt="Sample Image"
              width={500} // Specify your desired width
              height={300}
              className="rounded-2xl"
            />
            <div className="flex justify-start mt-2 h-20 ">
              <div className=" text-base font-bold text-black">
                
                {item.title}:&nbsp;
                <span className="h-32 text-sm font-semibold text-gray-800">
                  {item.description}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex justify-start text-sm text-black font-bold">{item.rating}</div>
              <div className="flex">{renderStars()}</div>
            </div>
            <div className="flex justify-start text-gray-800 text-sm font-extrabold mt-2">
              ${item.price}
            </div>
            <div className="mt-2 bg-[#FB8800] rounded-xl p-2 text-base font-bold">
              Buy Now
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full px-4 py-1 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold x-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking- leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
