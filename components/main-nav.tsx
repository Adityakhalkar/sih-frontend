import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" passHref>
        <Image src="/sih-logo-1.jpeg" alt="Satellite Tracker" width={100} height={100} className="cursor-pointer" />
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
    </nav>
  );
}
