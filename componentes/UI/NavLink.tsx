"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-serif text-lg tracking-tight pb-1 transition-colors duration-300 border-b-2
        ${
          isActive
            ? "text-primary-900 dark:text-primary-50 border-tertiary-500 font-bold"
            : "text-primary-800/70 dark:text-primary-200/70 border-transparent hover:text-primary-900"
        }
      `}
    >
      {children}
    </Link>
  );
}