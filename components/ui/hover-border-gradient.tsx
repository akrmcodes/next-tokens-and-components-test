"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion"; // ✅ بديل motion/react
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // ✅ استخدمنا tokens بدلاً من أبيض/أسود صلب
  const movingMap: Record<Direction, string> = {
    TOP:    "radial-gradient(20.7% 50% at 50% 0%, var(--foreground) 0%, transparent 100%)",
    LEFT:   "radial-gradient(16.6% 43.1% at 0% 50%, var(--foreground) 0%, transparent 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, var(--foreground) 0%, transparent 100%)",
    RIGHT:  "radial-gradient(16.2% 41.2% at 100% 50%, var(--foreground) 0%, transparent 100%)",
  };

  // ✅ الـ highlight من الـ primary
  const highlight = "radial-gradient(75% 181.159% at 50% 50%, var(--primary) 0%, transparent 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]); // إبقاء نفس السلوك

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        // ✅ ألوان الخلفية والحدود من الثيم
        "relative flex w-fit content-center items-center justify-center gap-10 overflow-visible rounded-full border border-border p-px transition duration-500",
        "bg-background/20 hover:bg-background/10",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          // ✅ سطح الزر من الثيم
          "z-10 rounded-[inherit] px-4 py-2",
          "bg-background text-foreground",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className={cn("absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]")}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />

      {/* ✅ الحشوة الداخلية بنفس خلفية الثيم حتى يبقى التدرّج كأنه Border */}
      <div className="absolute inset-[2px] z-1 flex-none rounded-[100px] bg-background" />
    </Tag>
  );
}
