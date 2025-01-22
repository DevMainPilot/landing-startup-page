"use client"; // Asegúrate de que este está al principio del archivo

import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div
      className={cn("flex items-center", className)}
      {...props}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Cambiar el cursor para indicar que es clickable
    >
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
        kabots
      </span>
      <span className="decoration-double ml-4 text-sm font-small text-gray-800 dark:text-gray-600">
        AI & Data
      </span>
    </div>
  );
}
