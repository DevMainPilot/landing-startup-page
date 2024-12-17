import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
        Nebula
      </span>
      <span className=" decoration-double ml-4 text-sm font-small text-gray-800 dark:text-gray-600  ">
        AI & Data
      </span>
    </div>
  )
}

